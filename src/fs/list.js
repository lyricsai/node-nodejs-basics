import { readdir } from "fs/promises";
import { join } from "path";
import { Error_FS, currDir } from "../libs/helpers/index.js";

const src = join(currDir(import.meta.url), "files");

const list = async () => {
  try {
    const files = await readdir(src);
    console.log(files);
  } catch {
    throw new Error_FS();
  }
};

await list();
