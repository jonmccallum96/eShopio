import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joe Jon',
    email: 'jon@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kelly Clarkson',
    email: 'kelly@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
