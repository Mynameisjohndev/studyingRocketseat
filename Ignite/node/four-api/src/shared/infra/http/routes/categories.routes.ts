import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategory/ListCategoriesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensueredAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();
const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/",ensueredAuthenticated,ensureAdmin, createCategoryController.handle);

categoriesRoutes.get("/", ensueredAuthenticated,ensureAdmin,listCategoriesController.handle);

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);
export { categoriesRoutes };
