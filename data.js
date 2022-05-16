const ROLE = {
  ADMIN: admin,
  BASIC: basic,
};

export default {
  ROLE: ROLE,
  user: [
    { id: 1, name: 'Putra', role: ROLE.ADMIN },
    { id: 2, name: 'Darius', role: ROLE.BASIC },
    { id: 3, name: 'Jeremy', role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: 'Project Putra', userId: 1 },
    { id: 2, name: 'Project Darius', userId: 2 },
    { id: 3, name: 'Project Jeremy', userId: 3 },
  ],
};
