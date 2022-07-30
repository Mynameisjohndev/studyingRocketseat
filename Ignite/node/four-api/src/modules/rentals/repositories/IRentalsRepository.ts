import { ICreateRentalDto } from "../dto/ICreateDto";
import { Rentals } from "../infra/typeorm/entities/Rentals";

interface IRentalsRepository{
    create({car_id,user_id, expected_return_date  } : ICreateRentalDto ): Promise<Rentals>
    findOpenRentalByCar(car_id: string ): Promise<Rentals>;
    findOpenRentalByUser( user_id: string): Promise<Rentals>;
}


export { IRentalsRepository }