import { Car } from "@modules/cars/infra/typeorm/entities/cars";
import { ICreateCarDTO } from "@modules/dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarRepository";

class CarsRepositoryInMemory implements ICarsRepository{
   

    cars: Car[] = [];

    async create({
        brand, 
        category_id, 
        daily_rate, 
        description, 
        fine_amount, 
        lincese_plate,
        name
} : ICreateCarDTO): Promise<void> {
        const car = new Car();

        Object.assign(car,{
            brand, 
            category_id, 
            daily_rate, 
            description, 
            fine_amount, 
            lincese_plate,
            name
        })

        this.cars.push(car);

    }

}  

export { CarsRepositoryInMemory };