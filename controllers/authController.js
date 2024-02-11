import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { bcryptHashPassword, comparePassword } from '../utils/passwordUtils.js';
import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';

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
  const findTheUser = await User.findOne({ email: req.body.email });

  // check email
  if (!findTheUser) throw new UnauthenticatedError('invalid credentials');
  // check password
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    findTheUser.password
  );
  if (!isPasswordCorrect)
    throw new UnauthorizedError('password is not matched');

  res.send('login');
};
