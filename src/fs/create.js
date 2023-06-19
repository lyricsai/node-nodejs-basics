import path from "path";
import { writeFile } from "fs/promises";

import { Error_FS, currDir } from "../libs/helpers/index.js";

const src = path.join(currDir(import.meta.url), "files");
const fileName = "fresh.txt";
const content = "I am fresh and young";
const filePath = path.resolve(src, fileName);

const create = async () => {
  try {
    await writeFile(filePath, content, { flag: "wx" });
  } catch {
    throw new Error_FS();
  }
};

await create();
