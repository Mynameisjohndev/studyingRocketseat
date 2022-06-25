import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userSRepository: IUsersRepository
    ) {}

    async execute({
        driver_license,
        email,
        name,
        password,
    }: ICreateUserDTO): Promise<void> {
        await this.userSRepository.create({
            driver_license,
            email,
            name,
            password,
        });
    }
}

export { CreateUserUseCase };
