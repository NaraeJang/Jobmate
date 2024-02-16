import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });

  res.status(StatusCodes.OK).json({ jobs });
};

// CREATE A JOB
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
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

// SHOW OVERVIEW
export const showOverview = async (req, res) => {
  // temp values
  const defaultStats = {
    pending: 22,
    interview: 11,
    declined: 4,
  };
  let monthlyApplications = [
    {
      date: 'May 23',
      count: 12,
    },
    {
      date: 'Jun 23',
      count: 9,
    },
    {
      date: 'Jul 23',
      count: 3,
    },
  ];

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
