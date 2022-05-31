import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Users', User);
