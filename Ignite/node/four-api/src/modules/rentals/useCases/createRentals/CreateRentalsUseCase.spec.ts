import { AppError } from './../../../../shared/errors/AppError';
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalsUseCase } from "./CreateRentalsUseCase"

let createRentalsUseCase: CreateRentalsUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create renal", ()=>{
    beforeEach(()=>{
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
        createRentalsUseCase = new CreateRentalsUseCase(rentalsRepositoryInMemory);
    })

    it("Should be able to create a new rental", async()=>{
        const rental = await createRentalsUseCase.execute({
            car_id: "dfadad",
            user_id: "2342342",
            expected_return_date: new Date()
        })
        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    })

    it("Should not be able to create a new rental if there is another open to the same user", async()=>{
        expect(async()=>{
            await createRentalsUseCase.execute({
                car_id: "1231223",
                user_id: "2342342",
                expected_return_date: new Date()
            })
            const rental = await createRentalsUseCase.execute({
                car_id: "dfadad",
                user_id: "2342342",
                expected_return_date: new Date()
            })
        }).rejects.toBeInstanceOf(AppError);
    })

    it("Should not be able to create a new rental if there is another open to the same car", async()=>{
        expect(async()=>{
            await createRentalsUseCase.execute({
                car_id: "dfadad",
                user_id: "sd232",
                expected_return_date: new Date()
            })
            const rental = await createRentalsUseCase.execute({
                car_id: "dfadad",
                user_id: "2342342",
                expected_return_date: new Date()
            })
        }).rejects.toBeInstanceOf(AppError);
    })

})