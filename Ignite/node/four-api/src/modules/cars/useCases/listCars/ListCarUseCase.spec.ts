import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarUseCase } from "./ListCarUseCase"

let listCarsUseCase: ListCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {

    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listCarsUseCase = new ListCarUseCase(carsRepositoryInMemory);
    })

    it("Shoul be able to list avaliable cars", async()=>{
        const car = await carsRepositoryInMemory.create({
            brand: "Name a car",
            category_id: "sadsad",
            daily_rate: 90,
            description: "minha descricao",
            fine_amount: 2,
            license_plate: "12312312312",
            name: "joao"
        })
        
        const cars = await listCarsUseCase.execute({});
        expect(cars).toEqual([car]);
    })

    it("Shoul be able to list all avaliable cars by brand", async()=>{
        const car = await carsRepositoryInMemory.create({
            brand: "Name a car223",
            category_id: "saadaddsad",
            daily_rate: 9230,
            description: "misaddasnha descricao",
            fine_amount: 3422,
            license_plate: "12asdasdasd312312312",
            name: "joaosdsad"
        })
        
        const cars = await listCarsUseCase.execute({
            brand: "Name a car223"
        })
        console.log(cars)
        expect(cars).toEqual([car]);
    })

})