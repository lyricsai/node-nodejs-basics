import path from "path";
import { rm } from "fs/promises";
import { Error_FS, currDir } from "../libs/helpers/index.js";

const src = path.join(currDir(import.meta.url), "files");
const fileToDelete = "fileToRemove.txt";

const remove = async () => {
  try {
    await rm(path.join(src, fileToDelete));
  } catch {
    throw new Error_FS();
  }
};

await remove();
