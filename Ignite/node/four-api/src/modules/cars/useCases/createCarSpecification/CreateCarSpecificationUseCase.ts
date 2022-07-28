import { AppError } from './../../../../shared/errors/AppError';
import { ICarsRepository } from "@modules/cars/repositories/ICarRepository";
import { inject, injectable } from "tsyringe";

interface IRequest{
    card_id: string;
    specification_id: string[]
}
// @injectable()
class CreateCarSpecificationUseCase{

    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute({ card_id, specification_id }: IRequest): Promise<void>{
        const carExists = await this.carsRepository.findById(card_id);
        if(!carExists){
            throw new AppError("Car does not exists!");
        }

    }

}

export { CreateCarSpecificationUseCase }