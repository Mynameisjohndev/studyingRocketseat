import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
