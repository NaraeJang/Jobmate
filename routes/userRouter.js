import { Router } from 'express';
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/userController';

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStats);
router.get('/update-user', updateUser);
export default router;
