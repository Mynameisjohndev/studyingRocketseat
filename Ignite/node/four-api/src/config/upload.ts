import multer from "multer";
import { resolve } from "path";

const upload = multer({
    dest: "avatar",
});

export default {
    upload(folder: string) {},
};
