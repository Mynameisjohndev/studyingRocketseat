import { app } from "@shared/infra/http/app";
import request from "supertest";



describe("Create category controller",()=>{


    // beforeEach(()=>{
    // })

    it("Should be able to get all cars", async () => {
        await request(app).get("/cars/avaliable").expect(200);        
    });

})