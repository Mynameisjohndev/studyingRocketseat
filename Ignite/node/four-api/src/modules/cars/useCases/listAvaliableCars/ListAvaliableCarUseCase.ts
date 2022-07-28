import { Car } from '@modules/cars/infra/typeorm/entities/cars';
import { ICarsRepository } from '@modules/cars/repositories/ICarRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest{
    category_id?: string;
    brand?: string;
    name?: string;
}

@injectable()
class ListAvaliableCarUseCase{

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute({ brand,category_id,name }:IRequest) : Promise<Car[]>{
        const cars = await this.carsRepository.findAvaliable(category_id,brand,name)
        return cars;
    }

}

export { ListAvaliableCarUseCase };