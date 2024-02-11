import bcrypt from 'bcryptjs';

export const bcryptHashPassword = async (password) => {
  // a random value is added to the password before hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

export const comparePassword = async (password, bcryptHashPassword) => {
  const isMatch = await bcrypt.compare(password, bcryptHashPassword);
  return isMatch;
};
