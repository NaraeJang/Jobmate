import Job from '../models/JobModel.js';

import { nanoid } from 'nanoid';

// temp
let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'facebook', position: 'back-end' },
];

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

// CREATE A JOB
export const createJob = async (req, res) => {
  const job = await Job.create(req.body);

  res.status(201).json({ job });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (!job) {
    return res
      .status(404)
      .json({ msg: `There is no matching job exists with ${id}` });
  }

  res.status(200).json({ job });
};

// EDIT JOB
export const updateJob = async (req, res) => {
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
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: `${id} job was deleted successfully.` });
};
