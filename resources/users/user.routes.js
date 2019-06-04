const User = require("./user.model");

module.exports = [
  {
    method: "GET",
    path: "/users",
    handler: function() {
      return User.findAll();
    }
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: function(request) {
      const userId = request.params.id;
      return User.findOne({
        where: {
          id: userId
        }
      });
    }
  }
];
