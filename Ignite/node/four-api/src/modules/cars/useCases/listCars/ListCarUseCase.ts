import { Car } from '@modules/cars/infra/typeorm/entities/cars';
import { ICarsRepository } from '@modules/cars/repositories/ICarRepository';

interface IRequest{
    category_id?: string;
    brand?: string;
    name?: string;
}

class ListCarUseCase{

    constructor(
        private carsRepository: ICarsRepository
    ){}

    async execute({ brand,category_id,name }:IRequest) : Promise<Car[]>{
        const cars = await this.carsRepository.findAvaliable(category_id,brand,name)
        return cars;
    }

}

export { ListCarUseCase };