import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config(); // if you don't place it on the top, it sometimes causes errors.
import express from 'express';
const app = express();
import morgan from 'morgan'; // Provides log for our request.
import mongoose from 'mongoose';

// CUSTOM INSTANCES.
//router
import jobRouter from './routes/jobRouter.js';
// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // built-in middleware in order to send and receive json from server and front-end.

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/', (req, res) => {
  //   res.send('Hello world...');

  console.log(req);

  res.json({ message: 'Data received', data: req.body });
});

app.use('/api/v1/jobs', jobRouter);

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
