import express from 'express';
const app = express();

app.use(express.json()); // built-in middleware in order to send and receive json from server and front-end.

app.get('/', (req, res) => {
  //   res.send('Hello world...');

  console.log(req);

  res.json({ message: 'Data received', data: req.body });
});

app.listen(5100, () => {
  console.log('server running...');
});
