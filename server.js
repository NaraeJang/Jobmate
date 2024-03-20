import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config(); // if you don't place it on the top, it sometimes causes errors.
import express from 'express';
const app = express();
import morgan from 'morgan'; // Provides log for our request.
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

//public
import cookieParser from 'cookie-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// CUSTOM INSTANCES.
//router
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './client/dist')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json()); // built-in middleware in order to send and receive json from server and front-end.
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data:'],
    },
  })
);
app.use(mongoSanitize());

app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateUser, userRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

// CUSTOMIZED NOT FOUND ERROR ROUTE.
// we already have default not found error route that was provided by express. however, we can customize it.
app.use('*', (req, res) => {
  res.status(404).json({ msg: `not found` });
}); // * means we are going to apply this to all request.

app.use(errorHandlerMiddleware);

// PORT
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
