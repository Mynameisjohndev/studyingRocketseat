import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecification = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    createSpecification
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
