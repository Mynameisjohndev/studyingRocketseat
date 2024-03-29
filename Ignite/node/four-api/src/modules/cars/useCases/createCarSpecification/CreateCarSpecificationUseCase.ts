import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';
import { AppError } from './../../../../shared/errors/AppError';
import { ICarsRepository } from "@modules/cars/repositories/ICarRepository";
import { inject, injectable } from "tsyringe";
import { Car } from '@modules/cars/infra/typeorm/entities/cars';

interface IRequest{
    car_id: string;
    specifications_id: string[]
}
@injectable()
class CreateCarSpecificationUseCase{

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ){}

    async execute({ car_id, specifications_id }: IRequest): Promise<Car>{
        const carExists = await this.carsRepository.findById(car_id);
        if(!carExists){
            throw new AppError("Car does not exists!");
        }
        
        const specifications = await this.specificationRepository.findByIds(
            specifications_id
        )
        
        carExists.specifications = specifications;
        
        await this.carsRepository.create(carExists);
        return carExists;
    }

}

export { CreateCarSpecificationUseCase }