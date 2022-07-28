import { AppError } from './../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"
import { SpecificationInMemory } from '@modules/cars/repositories/in-memory/SpecificationInMemory';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationInMemory;

describe("Create car specification",()=>{

    beforeEach(()=>{
        specificationRepositoryInMemory = new SpecificationInMemory()
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory,
            specificationRepositoryInMemory
            );
    })

    it("Shoul not be able to add new specification to a now-existent car", async() => {
        expect(async()=>{
            const car_id = "1231";
            const specifications_id = ["ssdsd","sdsd","sdas"];
            await createCarSpecificationUseCase.execute({
                car_id,
                specifications_id
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
        const specifications = await specificationRepositoryInMemory.create({
            description: "teste",
            name:"teste"
        })
        
        const specifications_id = [specifications.id];

        const specifications_cars = await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specifications_id
        })

        expect(specifications_cars).toHaveProperty("specifications");
        expect(specifications_cars.specifications.length).toBe(1);
    })

})