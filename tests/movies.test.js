const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies");

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });
});

describe("GET /api/movies:id/1", () => {
    it("return movie id 1", async () => {
        const response = await request(app).get("/api/movies/1");

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });
});

describe("GET /api/movies:id/0", () => {
    it("verify if status not found 404 for id 0", async () => {
        const response = await request(app).get("/api/movies/0");

        expect(response.status).toEqual(404);
    });
});