const Sequelize = require("sequelize");
const sequelize = require("../../db/connect");

const User = sequelize.define(
  "user",
  {
    // attributes
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    // options
  }
);

module.exports = User;
