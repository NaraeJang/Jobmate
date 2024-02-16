import { Router } from 'express';
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
  showOverview,
} from '../controllers/jobController.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route('/overview').get(showOverview);

router
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
