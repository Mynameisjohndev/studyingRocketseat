import { Response, Request } from "express";
import { container } from "tsyringe";

import { AuthUserUseCase } from "./AuthUserUseCase";

class AuthUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;

        const authenticateUserUseCase = container.resolve(AuthUserUseCase);

        const token = await authenticateUserUseCase.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

export { AuthUserController };
