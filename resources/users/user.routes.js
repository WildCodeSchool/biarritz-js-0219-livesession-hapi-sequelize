const User = require("./user.model");

module.exports = {
  method: "GET",
  path: "/users",
  handler: function() {
    return User.findAll();
  }
};
