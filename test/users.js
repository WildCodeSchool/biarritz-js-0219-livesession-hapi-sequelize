const should = require("should");
const { init } = require("../server");

describe("# USERS", () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  it("responds with 200", async () => {
    const res = await server.inject({
      method: "GET",
      url: "/users"
    });
    should(res.statusCode).equal(200);
  });

  it("responds an empty user list", async () => {
    const res = await server.inject({
      method: "GET",
      url: "/users"
    });
    const payload = JSON.parse(res.payload);
    should(payload).deepEqual([]);
  });

  it("responds a user list with two users", async () => {
    const user1 = {
      email: "testuserone@toto.com",
      name: "userone"
    };
    const user2 = {
      email: "testusertwo@toto.com",
      name: "usertwo"
    };
    const res = await server.inject({
      method: "GET",
      url: "/users"
    });
    const payload = JSON.parse(res.payload);
    should(payload).equal([user1, user2]);
  });
});
