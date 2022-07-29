import { Rentals } from "../infra/typeorm/entitiees/Rentals";

interface IRentalsRepository{
    // create( car_id: string, user_id: string, expect_return_date: Date ): Promise<void>
    findOpenRentalByCar(car_id: string ): Promise<Rentals>;
    findOpenRentalByUser( user_id: string): Promise<Rentals>;
}


export { IRentalsRepository }