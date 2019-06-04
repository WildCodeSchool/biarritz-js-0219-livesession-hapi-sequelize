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
      url: "/"
    });
    expect(res.statusCode).to.equal(200);
  });
});
