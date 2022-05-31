import User from '../models/UserModel.js';

export const AuthRoleAdmin = async (req, res, next) => {
  const name = req.body.name;
  const user = await User.aggregate([
    {
      $match: { name: name },
    },
  ]);

  try {
    if (user[0].role === 'admin') {
      next();
    } else {
      res.json({ msg: 'Access Denied', status: 'You are not an admin' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

