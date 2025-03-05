import { processCSV, compressFiles } from "../src/services/fileService";
import * as fs from "fs";
import * as path from "path";

const testDir = path.join(__dirname, "data");
const testFilePath = path.join(testDir, "test.csv");
const malesFilePath = path.join(testDir, "males.csv");
const femalesFilePath = path.join(testDir, "females.csv");
const zipFilePath = path.join(testDir, "output.zip");

beforeAll(() => {
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true });
  }
});

afterAll(() => {
  fs.rmSync(testDir, { recursive: true, force: true });
});

test("processCSV should create two separate CSV files", async () => {
  fs.writeFileSync(testFilePath, "name,gender\nJohn,male\nAlice,female\n");

  let outputFiles = await processCSV(testFilePath);

  outputFiles = outputFiles.map((file) => path.resolve(file));

  expect(outputFiles).toContain(path.resolve(malesFilePath));
  expect(outputFiles).toContain(path.resolve(femalesFilePath));
  expect(fs.existsSync(malesFilePath)).toBe(true);
  expect(fs.existsSync(femalesFilePath)).toBe(true);
});

test("compressFiles should create a zip archive", async () => {
  const testFiles = [malesFilePath, femalesFilePath];
  const zipPath = await compressFiles(testFiles);

  expect(fs.existsSync(zipPath)).toBe(true);
});
