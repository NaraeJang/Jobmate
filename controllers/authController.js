import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { bcryptHashPassword, comparePassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

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

  const isValidUser =
    findTheUser &&
    (await comparePassword(req.body.password, findTheUser.password));

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({
    userId: findTheUser._id,
    role: findTheUser.role,
  });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  }); // 1st param: name, 2nd: whatever i'm getting back, 3rd: option

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};

export const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged out' });
};
