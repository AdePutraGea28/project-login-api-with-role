import User from '../models/UserModel.js';

export const getUsers = async (req, res) => {
  try {
    const user = await User.aggregate([
      {
        $match: {},
      },
    ]);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user
export const updateUser = async (req, res) => {
  const getId = parseInt(req.params.id);

  try {
    const update = await User.findOneAndUpdate(
      { _id: getId },
      {
        $set: {
          name: req.body.name,
        },
      }
    );
    res.json({ msg: 'user updated' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  const getId = parseInt(req.params.id);
  try {
    const deleteUser = await User.findOneAndDelete({ _id: getId });
    res.json({ msg: 'User Deleted' });
  } catch (error) {
    res.json({ messgae: error.message });
  }
};
