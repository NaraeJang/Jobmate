import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';

export const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user: newUser });
};
export const login = async (req, res) => {
  res.send('login');
};
