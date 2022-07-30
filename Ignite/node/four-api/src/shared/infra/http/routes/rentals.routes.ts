import { CreateRentalsController } from "@modules/rentals/useCases/createRentals/CreateRentalsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensueredAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalsController = new CreateRentalsController();

rentalRoutes.post("/", ensueredAuthenticated, createRentalsController.handle);

export { rentalRoutes };