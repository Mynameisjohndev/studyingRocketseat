import { AppError } from './../../../../shared/errors/AppError';
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

interface IRequest{
    user_id: string;
    car_id: string;
    expect_return_date: Date;
}

class CreateRentalsUseCase{


    constructor(
        private rentalRepository: IRentalsRepository
    ){}

    async execute({ car_id,user_id, expect_return_date }: IRequest) : Promise<void>{
        const carUnavaliable = await this.rentalRepository.findOpenRentalByCar(car_id);       

        if(carUnavaliable){
            throw new AppError("Car is unavailable");
        }

        const user = await this.rentalRepository.findOpenRentalByUser(user_id);       

        if(user){
            throw new AppError("THere a rantle in progress for user");
        }
    }

}

export { CreateRentalsUseCase };