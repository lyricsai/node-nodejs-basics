import { readFile } from "fs/promises";
import { join } from "path";
import { Error_FS, currDir } from "../libs/helpers/index.js";

const fileToRead = "fileToRead.txt";
const src = join(currDir(import.meta.url), "files", fileToRead);

const read = async () => {
  try {
    const content = await readFile(src, { encoding: "utf8" });
    console.log(content);
  } catch {
    throw new Error_FS();
  }
};

await read();
