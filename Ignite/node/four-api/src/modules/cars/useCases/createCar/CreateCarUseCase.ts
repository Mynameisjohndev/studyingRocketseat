import { ICarsRepository } from "@modules/cars/repositories/ICarRepository";
import { inject, injectable } from "tsyringe";

interface IRequest{
    name: string;
    description: string;
    daily_rate: number;
    lincese_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

@injectable()
class CreateCarUseCase{

    constructor(
        @inject("CarsRepository")
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
    }: IRequest): Promise<void>{
        this.carsRepository.create({
            brand, 
            category_id, 
            daily_rate, 
            description, 
            fine_amount, 
            lincese_plate, 
            name 
        })
    }
}

export { CreateCarUseCase }