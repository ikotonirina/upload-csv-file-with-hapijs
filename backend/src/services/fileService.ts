import * as fs from "fs";
import * as path from "path";
import csvParser from "csv-parser";
import archiver from "archiver";

const IS_TEST_ENV = process.env.NODE_ENV === "test";
const BASE_DIR = IS_TEST_ENV
  ? path.join(__dirname, "../../tests/data")
  : path.join(__dirname, "../../data");
const MALE_FILE_NAME = "males.csv";
const FEMALE_FILE_NAME = "females.csv";
const ZIP_FILE_NAME = "output.zip";

const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export const processCSV = async (filePath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    ensureDirectoryExists(BASE_DIR);

    const maleFilePath = path.join(BASE_DIR, MALE_FILE_NAME);
    const femaleFilePath = path.join(BASE_DIR, FEMALE_FILE_NAME);
    const maleStream = fs.createWriteStream(maleFilePath);
    const femaleStream = fs.createWriteStream(femaleFilePath);

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row: any) => {
        const rowData = Object.values(row).join(",") + "\n";
        row.gender === "male"
          ? maleStream.write(rowData)
          : femaleStream.write(rowData);
      })
      .on("end", () => {
        maleStream.end();
        femaleStream.end();
        resolve([maleFilePath, femaleFilePath]);
      })
      .on("error", (error: any) => reject(error));
  });
};

export const compressFiles = async (files: string[]): Promise<string> => {
  ensureDirectoryExists(BASE_DIR);

  const zipPath = path.join(BASE_DIR, ZIP_FILE_NAME);
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  archive.pipe(output);
  files.forEach((file) => archive.file(file, { name: path.basename(file) }));
  await archive.finalize();

  return zipPath;
};
