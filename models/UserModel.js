import mongoose, { mongo } from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  role: {
    type: String,
  },
});

export default mongoose.model('User', UserSchema);
