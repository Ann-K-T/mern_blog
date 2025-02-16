import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);

export default User;
// The user model is created using mongoose.Schema and exported as a model named User. This model will be used to interact with the MongoDB database. The model has three fields: username, email, and password. The timestamps option is set to true, which will automatically add createdAt and updatedAt fields to the documents. This will help us keep track of when the documents were created and updated.
