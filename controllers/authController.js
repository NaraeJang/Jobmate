import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import bcryptHashPassword from '../utils/passwordUtils.js';

export const register = async (req, res) => {
  const password = req.body.password;
  const hashedPassword = await bcryptHashPassword(req.body.password);
  req.body.password = hashedPassword;

  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const newUser = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: `User has been created.` });
};

export const login = async (req, res) => {
  res.send('login');
};
