import { AppError } from './../../../../shared/errors/AppError';
import { ICarsRepository } from "@modules/cars/repositories/ICarRepository";
import { inject, injectable } from "tsyringe";
import { Car } from '@modules/cars/infra/typeorm/entities/cars';

interface IRequest{
    name: string;
    description: string;
    daily_rate: number;
    lincese_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

// @injectable()
class CreateCarUseCase{

    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute({
        brand, 
        category_id, 
        daily_rate, 
        description, 
        fine_amount, 
        lincese_plate, 
        name
    }: IRequest): Promise<Car>{

        const carAlreadyExists = await this.carsRepository.findByLicensePlate(lincese_plate)

        if(carAlreadyExists){
            throw new AppError("Car already exists!");
        }

        const car = await this.carsRepository.create({
            brand, 
            category_id, 
            daily_rate, 
            description, 
            fine_amount, 
            lincese_plate, 
            name 
        })

        return car;

    }
}

export { CreateCarUseCase }