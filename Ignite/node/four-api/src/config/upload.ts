import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

const upload = multer({
    dest: "avatar",
});

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callbadk) => {
                    const filehash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${filehash}-${file.originalname}`;

                    return callbadk(null, fileName);
                },
            }),
        };
    },
};
