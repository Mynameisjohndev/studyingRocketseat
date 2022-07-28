import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvaliableCarsController } from "@modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensueredAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController()
const listAvaliableCarsController = new ListAvaliableCarsController()
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post("/", ensueredAuthenticated,ensureAdmin, createCarController.handle)
carsRoutes.get("/avaliable", listAvaliableCarsController.handle)
carsRoutes.post("/specification/:id", ensueredAuthenticated,ensureAdmin, createCarSpecificationController.handle)
export { carsRoutes }