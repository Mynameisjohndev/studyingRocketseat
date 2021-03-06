import { UsersRepository } from "@modules/accounts/infra/typorm/repositories/UsersRepository";
import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../../../errors/AppError";

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
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(
            token,
            "a51de9d943b155ed65e9dfdf3fcf8307"
        ) as IPayload;
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id);
        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        request.user = {
            id: user.id,
        };

        next();
    } catch (error) {
        throw new AppError("Invalid token", 401);
    }
}
