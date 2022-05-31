const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic',
};

const users = [
  { _id: 1, name: 'Putra', role: 'admin' },
  { _id: 2, name: 'Darius', role: 'basic' },
  { _id: 3, name: 'Jeremy', role: 'basic' },
];

const projects = [
  { _id: 1, name: 'Project Putra', userId: 1 },
  { _id: 2, name: 'Project Darius', userId: 2 },
  { _id: 3, name: 'Project Jeremy', userId: 3 },
];
