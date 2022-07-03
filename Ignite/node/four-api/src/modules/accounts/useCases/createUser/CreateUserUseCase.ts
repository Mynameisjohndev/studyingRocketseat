import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

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
        const userAlreadyExists = await this.userSRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }
        const passwrodhash = await hash(password, 8);
        await this.userSRepository.create({
            driver_license,
            email,
            name,
            password: passwrodhash,
        });
    }
}

export { CreateUserUseCase };
