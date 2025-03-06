import { Request, ResponseToolkit } from "@hapi/hapi";
import { processCSV, compressFiles } from "../services/fileService";
import * as fs from "fs";
import * as path from "path";
import * as util from "util";
import { pipeline } from "stream";

export const uploadFileHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  try {
    const { file } = request.payload as { file: NodeJS.ReadableStream };
    const outputDir = path.join(__dirname, "../../data");
    const filePath = path.join(outputDir, "upload.csv");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const pipelineAsync = util.promisify(pipeline);
    await pipelineAsync(file, fs.createWriteStream(filePath));

    const outputFiles = await processCSV(filePath);
    const zipPath = await compressFiles(outputFiles);
    return h.file(zipPath);
  } catch (err: any) {
    console.log(`Error: ${err}`);
    return h.response({ error: err.message }).code(500);
  }
};
