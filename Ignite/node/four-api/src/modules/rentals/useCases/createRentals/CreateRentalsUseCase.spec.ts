import dayjs from 'dayjs';
import { AppError } from './../../../../shared/errors/AppError';
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalsUseCase } from "./CreateRentalsUseCase"
import { DayjsDateProvider } from '@shared/Container/providers/DateProvider/implementations/DayjsDateProvider';

let createRentalsUseCase: CreateRentalsUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dateProvider: DayjsDateProvider;

describe("Create renal", ()=>{
    const dayAdd24Hours = dayjs().add(1,'day').toDate()
    beforeEach(()=>{
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
        dateProvider = new DayjsDateProvider()
        createRentalsUseCase = new CreateRentalsUseCase(rentalsRepositoryInMemory, dateProvider);
    })

    it("Should be able to create a new rental", async()=>{
        const rental = await createRentalsUseCase.execute({
            car_id: "dfadad",
            user_id: "2342342",
            expected_return_date: dayAdd24Hours
        })
        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    })

    it("Should not be able to create a new rental if there is another open to the same user", async()=>{
        expect(async()=>{
            await createRentalsUseCase.execute({
                car_id: "1231223",
                user_id: "2342342",
                expected_return_date: dayAdd24Hours
            })
            const rental = await createRentalsUseCase.execute({
                car_id: "dfadad",
                user_id: "2342342",
                expected_return_date: dayAdd24Hours
            })
        }).rejects.toBeInstanceOf(AppError);
    })

    it("Should not be able to create a new rental if there is another open to the same car", async()=>{
        expect(async()=>{
            await createRentalsUseCase.execute({
                car_id: "dfadad",
                user_id: "sd232",
                expected_return_date: dayAdd24Hours
            })
            const rental = await createRentalsUseCase.execute({
                car_id: "dfadad",
                user_id: "2342342",
                expected_return_date: dayAdd24Hours
            })
        }).rejects.toBeInstanceOf(AppError);
    })

    it("Should not be able to create a new rental with invalid return time", async()=>{
        expect(async()=>{
            await createRentalsUseCase.execute({
                car_id: "dfadad",
                user_id: "sd232",
                expected_return_date: dayjs().toDate()
            })
        }).rejects.toBeInstanceOf(AppError);
    })

})