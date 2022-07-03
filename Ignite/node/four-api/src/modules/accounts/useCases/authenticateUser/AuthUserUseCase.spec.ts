import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthUserUseCase } from "./AuthUserUseCase";

let authenticateUserUseCase: AuthUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });
    it("Should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "sdasad",
            email: "JOAO@GAIL.COM",
            name: "sdasadasd",
            password: "ADCQ2",
        };
        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });
    it("Should be able to authenticate an not exists user", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "adcadsadasd",
                password: "09a8sd0asd08as",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
    it("Should be able to authenticate with incorrect password", async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "232321",
                email: "sse3@GAIL.COM",
                name: "joao",
                password: "1223",
            };
            createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "1233",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
