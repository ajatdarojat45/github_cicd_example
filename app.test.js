const request = require("supertest");
const app = require("./app");

describe("GET /", function () {
  try {
    it("responds with json", async function () {
      const response = await request(app).get("/");
      expect(response.status).toEqual(200);
      expect(response.body.message).toMatch(/udin/i);
    });
  } catch (err) {
    console.log(err);
  }
});
