import User from '../models/UserModel.js';

export const AuthUser = async (req, res, next) => {
  const name = req.body.name;
  const user = await User.aggregate([
    {
      $match: { name: name },
    },
  ]);

  try {
    if (name === '') return res.json({ msg: 'input your name' });
    if (user.length !== 0) {
      next();
    } else {
      res.json({ msg: 'You are not a user!' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
