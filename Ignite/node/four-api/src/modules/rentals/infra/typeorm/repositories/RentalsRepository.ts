import { getRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { ICreateRentalDto } from "@modules/rentals/dto/ICreateDto";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { Rentals } from "../entities/Rentals";

class RentalsRepository implements IRentalsRepository{

    private repository: Repository<Rentals>;

    constructor(){
        this.repository = getRepository(Rentals);
    }

    async create({ car_id, user_id, expected_return_date }: ICreateRentalDto): Promise<Rentals> {
        const rental = this.repository.create({
            car_id,
            expected_return_date,
            user_id
        });

        await this.repository.save(rental);
        return rental;
    }

    async findOpenRentalByCar(car_id: string): Promise<Rentals> {
        const openByCar = await this.repository.findOne({car_id});
        return openByCar;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rentals> {
        const openByUser = await this.repository.findOne({user_id});
        return openByUser;
    }

}

export { RentalsRepository }