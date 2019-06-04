const Sequelize = require("sequelize");

let dbName = "api";
if (process.env.NODE_ENV === "test") {
  dbName = "api_test";
}

module.exports = new Sequelize(dbName, "admin", "admin", {
  host: "localhost",
  dialect: "mysql"
});
