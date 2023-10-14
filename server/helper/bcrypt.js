require("dotenv").config();

const bcrypt = require("bcrypt");
const SALT = 10;

module.exports.encryptPWD = (password) => {
  const salt = bcrypt.genSaltSync(SALT);
  return bcrypt.hashSync(String(password), 10);
};

module.exports.decryptPWD = (password, hashPWD) => {
  return bcrypt.compareSync(password, hashPWD);
};
