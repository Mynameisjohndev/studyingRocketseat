import "reflect-metadata";
import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import swagger from "swagger-ui-express";

import { AppError } from "@shared/errors/AppError";

import { router } from "./routes";
import swaggerFile from "../../../swagger.json";

import createConection from "@shared/infra/typeorm";
import "@shared/Container";

const app = express();
createConection();
app.use(express.json());
app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile));
app.use(router);
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "Error",
            message: `Internal server error - ${err}`,
        });
    }
);
app.listen(3333, () => console.log("Server is running"));
