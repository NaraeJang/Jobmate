import {
  BadRequestError,
  UnauthenticatedError,
} from '../errors/customErrors.js';
import { verityJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verityJWT(token);
    const testUser = userId === '65ce879f80c54cf279c567c5';
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    console.log(error);
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthenticatedError('Unauthorized to access this route');
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Demo User. Read Only!');
  }
  next();
};
