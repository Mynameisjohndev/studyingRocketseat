import { Car } from "@modules/cars/infra/typeorm/entities/cars";
import { ICreateCarDTO } from "@modules/dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarRepository";

class CarsRepositoryInMemory implements ICarsRepository{

    cars: Car[] = [];
    
    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find(car =>car.license_plate === license_plate);
    }
   
    async create({
        brand, 
        category_id, 
        daily_rate, 
        description, 
        fine_amount, 
        license_plate,
        name
} : ICreateCarDTO): Promise<Car> {
        const car = new Car();

        Object.assign(car,{
            brand, 
            category_id, 
            daily_rate, 
            description, 
            fine_amount, 
            license_plate,
            name
        })

        this.cars.push(car);

        return car;

    }

}  

export { CarsRepositoryInMemory };