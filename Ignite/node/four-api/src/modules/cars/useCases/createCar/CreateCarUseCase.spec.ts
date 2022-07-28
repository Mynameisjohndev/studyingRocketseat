import { AppError } from './../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car",() => {

    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    });

    it("Shoul be able to create a new car", async()=>{

        const car = await createCarUseCase.execute({
            brand: "Name a car",
            category_id: "sadsad",
            daily_rate: 90,
            description: "minha descricao",
            fine_amount: 2,
            license_plate: "12312312312",
            name: "joao"
        });

        expect(car).toHaveProperty("id");

    });

    it("Shoul be able not to create a car with exists license plate", async()=>{
        expect(async()=>{
            
            await createCarUseCase.execute({
                brand: "car 1",
                category_id: "sadsad",
                daily_rate: 90,
                description: "minha descricao",
                fine_amount: 2,
                license_plate: "12312312312",
                name: "joao"
            });

            await createCarUseCase.execute({
                brand: "car 2",
                category_id: "sadsad",
                daily_rate: 90,
                description: "minha descricao",
                fine_amount: 2,
                license_plate: "12312312312",
                name: "joao"
            });

        }).rejects.toBeInstanceOf(AppError);
    });

    it("Shoul be able not to create a car with avaliabe true by default ", async()=>{
       const car = await createCarUseCase.execute({
            brand: "Name a car",
            category_id: "sadsad",
            daily_rate: 90,
            description: "minha descricao",
            fine_amount: 2,
            license_plate: "abc213",
            name: "joao"
        });

        expect(car.avaliable).toBe(true);

    });
 

})