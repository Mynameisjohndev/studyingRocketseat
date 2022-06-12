"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(request, response) {
    CreateCourseService_1.default.execute({
        name: "NODE",
        duration: 10,
        educator: "João"
    });
    CreateCourseService_1.default.execute({
        name: "REACT",
        educator: "João"
    });
    return response.send();
}
exports.CreateCourse = CreateCourse;
