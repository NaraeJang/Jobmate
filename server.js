import * as dotenv from 'dotenv';
dotenv.config(); // if you don't place it on the top, it sometimes causes errors.
import express from 'express';
const app = express();
import morgan from 'morgan'; // Provides log for our request.
import { nanoid } from 'nanoid';

// temp
let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'facebook', position: 'back-end' },
];

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

// GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

// CREATE A JOB
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({ msg: 'please provide company and position' });
  }

  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);

  res.status(201).json({ jobs });
});

// GET SINGLE JOB
app.get('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => {
    return job.id === id;
  });

  if (!job) {
    return res
      .status(404)
      .json({ msg: `There is no matching job exists with ${id}` });
  }

  res.status(200).json({ job });
});

// EDIT JOB
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(404).json({ msg: `Please provide company and position` });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ msg: `job modified`, job });
});

// DELETE JOB
app.delete('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: `${id} job was deleted successfully.` });
});

// CUSTOMIZED NOT FOUND ERROR ROUTE.
// we already have default not found error route that was provided by express. however, we can customize it.
app.use('*', (req, res) => {
  res.status(404).json({ msg: `not found` });
}); // * means we are going to apply this to all request.

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: `something went wrong...` });
});

// PORT
const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}...`);
});
