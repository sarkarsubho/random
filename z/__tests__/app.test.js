const request = require("supertest");
const server = require("../server");

global.score = 1;
const sleep = (delay) => new Promise((res) => setTimeout(res, delay));
describe("get request", () => {
  test("should get requested data", async () => {
    await sleep(3000);
    const result = await request(server).get("/public");

    console.log(result.text);

    expect(JSON.parse(result.text)).toEqual(["abc.txt", "xyz.txt"]);
  });
});
