import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Vivek',
    email: 'vivek@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Vipul',
    email: 'vipul@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Saurabh',
    email: 'saurabh@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
