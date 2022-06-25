import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensueredAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(
            token,
            "a51de9d943b155ed65e9dfdf3fcf8307"
        ) as IPayload;
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id);
        console.log(user);
        if (!user) {
            throw new Error("User does not exists!");
        }
        next();
    } catch (error) {
        throw new Error("Invalid token");
    }
}
