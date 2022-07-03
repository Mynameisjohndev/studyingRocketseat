import { Router } from "express";

import { AuthUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthUserController";

const authenticateRoutes = Router();

const authUserController = new AuthUserController();

authenticateRoutes.post("/sessions", authUserController.handle);

export { authenticateRoutes };
