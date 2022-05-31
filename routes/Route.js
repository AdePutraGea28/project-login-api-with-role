import express from 'express';
import { getUsers, updateUser, deleteUser } from '../controllers/UserController.js';
import { getProjects, updateProject, deleteProject } from '../controllers/ProjectController.js';
import { AuthRoleAdmin } from '../middlewares/authRole.js';
import { AuthUser } from '../middlewares/authUser.js';

const router = express.Router();

// only admin can access admin page
router.post('/admin', AuthUser, AuthRoleAdmin, (req, res) => {
  res.send('Admin Page');
});

// in general page admin is allowed to access
router.post('/general', AuthUser, (req, res) => {
  res.send('General User Page');
});

// CRUD users route only admin can access
router.get('/admin/get/users', getUsers);
router.patch('/admin/update/user/:id', updateUser);
router.delete('/admin/delete/user/:id', deleteUser);

// CRUD projects route only admin can access
router.get('/admin/get/projects', getProjects);
router.patch('/admin/update/project/:id', updateProject);
router.delete('/admin/delete/project/:id', deleteProject);

export default router;
