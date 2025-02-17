import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  // Get the username, email and password from the request body
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }
  const hashPassword = bcryptjs.hashSync(password, 10);

  // User object to be saved in the database  with the hashed password
  // User came from the User model imported from user.model.js
  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
};
