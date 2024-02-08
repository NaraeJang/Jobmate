import * as dotenv from 'dotenv';
dotenv.config(); // if you don't place it on the top, it sometimes causes errors.
import express from 'express';
const app = express();
import morgan from 'morgan'; // Provides log for our request.

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

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}...`);
});
