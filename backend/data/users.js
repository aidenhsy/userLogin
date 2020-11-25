import bcrypt from "bcryptjs";
const users = [
  {
    isAdmin: true,
    email: "admin@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    email: "harry@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    email: "larry@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
];
export default users;
