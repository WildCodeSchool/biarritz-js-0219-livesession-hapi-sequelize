"use strict";

const Hapi = require("@hapi/hapi");
const connect = require("./db/connect");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});

server.route(require("./resources/users/user.routes"));

exports.init = async () => {
  const sequelize = require("./db/connect");
  await sequelize.sync({ force: true });
  await server.initialize();
  return server;
};

exports.start = async () => {
  const sequelize = require("./db/connect");
  await sequelize.sync();
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});
