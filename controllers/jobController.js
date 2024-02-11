import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  console.log(req.user);
  const jobs = await Job.find({});

  res.status(StatusCodes.OK).json({ jobs });
};

// CREATE A JOB
export const createJob = async (req, res) => {
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  res.status(StatusCodes.OK).json({ job });
};

// EDIT JOB
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ msg: `job modified`, job: updatedJob });
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndRemove(id);

  res.status(StatusCodes.OK).json({ msg: `job deleted`, job: removedJob });
};
