import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Project = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Projects', Project);
