import { ServerRoute } from "@hapi/hapi";
import { uploadFileHandler } from "../controllers/uploadController";

const uploadRoutes: ServerRoute[] = [
  {
    method: "POST",
    path: "/upload",
    options: {
      payload: {
        maxBytes: 2097152000,
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true,
      },
    },
    handler: uploadFileHandler,
  },
];

export default uploadRoutes;
