import { rename as renameFile } from "fs/promises";
import { join } from "path";
import { Error_FS, currDir } from "../libs/helpers/index.js";

currDir(import.meta.url), "files";
const src = join(currDir(import.meta.url), "files", "wrongFilename.txt");
const dest = join(currDir(import.meta.url), "files", "properFilename.md");

const rename = async () => {
  try {
    await renameFile(src, dest);
  } catch {
    throw new Error_FS();
  }
};

await rename();
