const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return CI/CD message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Node.js CI/CD pipeline is working!");
  });
});
