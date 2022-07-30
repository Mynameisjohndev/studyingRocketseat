import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./spacification.routes";
import { usersRoutes } from "./users.routes";
import { carsRoutes } from "./cars.routes";
import { rentalRoutes } from "./rentals.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/spacifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);
router.use(authenticateRoutes);

export { router };
