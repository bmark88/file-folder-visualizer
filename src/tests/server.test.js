import request from "supertest";
import app from "../../server.js";
import fs from "fs";

describe("POST /files", () => {
  it("should respond with a 400 status code for an invalid directory", async () => {
    const response = await request(app).post("/files").send({
      directory: "directory/withoutForwardSlash",
    });

    expect(response.statusCode).toBe(400);
  });
});
