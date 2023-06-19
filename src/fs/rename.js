import { rename as renameFile } from "fs/promises";
import { join } from "path";
import { Error_FS } from "../libs/helpers/index.js";

const src = join("files", "wrongFilename.txt");
const dest = join("files", "properFilename.md");

const rename = async () => {
  try {
    await renameFile(src, dest);
  } catch {
    throw new Error_FS();
  }
};

await rename();
