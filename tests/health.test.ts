import request from "supertest";
import { createServer } from "../src/server";

const app = createServer();

describe("Health API", () => {
  it("should return OK", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("should fail correctly", async () => {
    const res = await request(app).get("/health/fail");
    expect(res.status).toBe(500);
  });
});
