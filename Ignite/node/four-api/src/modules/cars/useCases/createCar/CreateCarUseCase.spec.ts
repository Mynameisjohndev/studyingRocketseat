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
        await createCarUseCase.execute({
            brand: "Name a car",
            category_id: "sadsad",
            daily_rate: 90,
            description: "minha descricao",
            fine_amount: 2,
            lincese_plate: "12312312312",
            name: "joao"
        });
    });

})