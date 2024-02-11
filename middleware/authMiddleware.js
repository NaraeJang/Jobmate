import { UnauthenticatedError } from '../errors/customErrors.js';
import { verityJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verityJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    console.log(error);
  }
};
