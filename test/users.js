const expect = require("expect.js");
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
      method: "get",
      url: "/users"
    });
    expect(res.statusCode).to.equal(200);
  });

  it("responds a user list", async () => {
    const res = await server.inject({
      method: "get",
      url: "/users"
    });
    const payload = JSON.parse(res.payload);
    expect(payload).to.equal([]);
  });
});
