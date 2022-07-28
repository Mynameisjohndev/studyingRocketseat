import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvaliableCarsController } from "@modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensueredAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController()
const listAvaliableCarsController = new ListAvaliableCarsController()

carsRoutes.post("/", ensueredAuthenticated,ensureAdmin, createCarController.handle)
carsRoutes.get("/avaliable", listAvaliableCarsController.handle)
export { carsRoutes }