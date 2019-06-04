const Sequelize = require("sequelize");

async function connect() {
  return new Sequelize("api", "admin", "admin", {
    host: "localhost",
    dialect: "mysql"
  });
}

module.exports = connect;
