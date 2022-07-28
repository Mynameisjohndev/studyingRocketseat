import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvaliableCarUseCase } from "./ListAvaliableCarUseCase"

let listCarsUseCase: ListAvaliableCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {

    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listCarsUseCase = new ListAvaliableCarUseCase(carsRepositoryInMemory);
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
        expect(cars).toEqual([car]);
    })

    it("Shoul be able to list all avaliable cars by name", async()=>{
        const car = await carsRepositoryInMemory.create({
            brand: "Name a sadasd",
            category_id: "dasdasd",
            daily_rate: 92230,
            description: "dasdsadsdaa descricao",
            fine_amount: 34222,
            license_plate: "12dasdaasdasdasd312312312",
            name: "dasdadasd"
        })
        
        const cars = await listCarsUseCase.execute({
            name: "dasdadasd"
        })
        expect(cars).toEqual([car]);
    })

    it("Shoul be able to list all avaliable cars by category_id", async()=>{
        const car = await carsRepositoryInMemory.create({
            brand: "Name a sadasd",
            category_id: "ec6a8df0-c015-4b43-b880-f88809ebc999",
            daily_rate: 92230,
            description: "dasdsadsdaa descricao",
            fine_amount: 34222,
            license_plate: "12dasdaasdasdasd312312312",
            name: "dasdadasd"
        })
        
        const cars = await listCarsUseCase.execute({
            category_id: "ec6a8df0-c015-4b43-b880-f88809ebc999"
        })
        expect(cars).toEqual([car]);
    })

})