import { app } from "@shared/infra/http/app";
import request from "supertest";



describe("Create category controller",()=>{


    // beforeEach(()=>{
    // })

    it("Should be able to get all cars", async () => {
        const response = await request(app)
        .post("/categories")      
        .send({
            name: "Cateogry",
            description: "teste supertest"
        })
        expect(response.status).toBe(201)
    });

})