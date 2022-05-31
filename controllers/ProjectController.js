import Project from '../models/ProjectModel.js';

// get all projects
export const getProjects = async (req, res) => {
  try {
    const project = await Project.aggregate([
      {
        $match: {},
      },
    ]);
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update project
export const updateProject = async (req, res) => {
  const getId = req.params.id;
  try {
    const updateProject = await Project.findOneAndUpdate(
      { _id: getId },
      {
        $set: {
          name: req.body.name,
        },
      }
    );
    res.status(200).json({ message: 'Project Updated' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete project
export const deleteProject = async (req, res) => {
  const getId = parseInt(req.params.id);
  console.log(getId);
  try {
    const checkIfExists = await Project.aggregate([
      {
        $match: { _id: getId },
      },
    ]);

    if (checkIfExists.length === 0) {
      return res.json({ msg: 'Project does not exists' });
    } else {
      const deleteProject = await Project.findOneAndDelete({ _id: getId });
      res.status(200).json({ message: 'Project Deleted' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
