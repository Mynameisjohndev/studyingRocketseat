import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvaliableCarsController } from "@modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensueredAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import upload from "../../../../config/upload";

const carsRoutes = Router();
const uploadImages = multer(upload.upload("./tmp/cars"));

const createCarController = new CreateCarController()
const listAvaliableCarsController = new ListAvaliableCarsController()
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController()

carsRoutes.post("/", ensueredAuthenticated,ensureAdmin, createCarController.handle)
carsRoutes.get("/avaliable", listAvaliableCarsController.handle)
carsRoutes.post("/specification/:id", ensueredAuthenticated,ensureAdmin, createCarSpecificationController.handle)
carsRoutes.post("/images/:id",ensueredAuthenticated,ensureAdmin,uploadImages.array("images"),uploadCarImagesController.handle)

export { carsRoutes }