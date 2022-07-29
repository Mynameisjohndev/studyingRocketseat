import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalsUseCase } from "./createRentalsUseCase"

let createRentalsUseCase: CreateRentalsUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create renal", ()=>{
    beforeEach(()=>{
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
        createRentalsUseCase = new CreateRentalsUseCase(rentalsRepositoryInMemory);
    })

    it("Should be able to create a new rental", async()=>{
        await createRentalsUseCase.execute({
            car_id: "dfadad",
            user_id: "2342342",
            expect_return_date: new Date()
        })
    })

})