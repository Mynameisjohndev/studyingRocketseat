import { Router } from "express";

import { ensueredAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensueredAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
