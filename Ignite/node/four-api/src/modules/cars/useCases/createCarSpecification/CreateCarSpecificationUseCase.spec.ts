import { AppError } from './../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car specification",()=>{

    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
    })

    it("Shoul not be able to add new specification to a now-existent car", async() => {
        expect(async()=>{
            const card_id = "1231";
            const specification_id = ["ssdsd","sdsd","sdas"];
            await createCarSpecificationUseCase.execute({
                card_id,
                specification_id
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("Shoul be able to add new specification to the car", async() => {
        const car = await carsRepositoryInMemory.create({
            brand: "Name a car",
            category_id: "sadsad",
            daily_rate: 90,
            description: "minha descricao",
            fine_amount: 2,
            license_plate: "1231",
            name: "joao"
        })
        const specification_id = ["ssdsd","sdsd","sdas"];
        await createCarSpecificationUseCase.execute({
            card_id: car.id,
            specification_id
        })
    })

})