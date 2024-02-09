import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  // a random value is added to the password before hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const newUser = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user: newUser });
};
export const login = async (req, res) => {
  res.send('login');
};
