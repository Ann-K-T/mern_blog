import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
//.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.

app.listen(3000, () => {
  console.log('Server is running on port 3000!!');
});

app.use('/api/user', userRoutes);
// .use is a method that allows you to run a function on every request that matches the path
// This is a middleware function that will run for every request that matches /api/user
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
