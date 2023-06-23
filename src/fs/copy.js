import path from "path";
import { cp } from "fs/promises";
import { Error_FS, currDir } from "../libs/helpers/index.js";

const src = path.join(currDir(import.meta.url), "files");
const dest = path.join(currDir(import.meta.url), "files_copy");

console.log(src, dest);
const copy = async () => {
  try {
    cp(src, dest, { recursive: true }, (err) => {
      if (err) throw new Error_FS();
    });
  } catch {
    throw new Error_FS();
  }
};

await copy();
