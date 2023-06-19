import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { currDir, Error_FS } from "../libs/helpers/index.js";

const src = path.join(currDir(import.meta.url), "files");
const fileName = "fileToCalculateHashFor.txt";
const filePath = path.resolve(src, fileName);

const calculateHash = async () => {
  try {
    const content = await readFile(filePath);
    const hash = createHash("sha256").update(content);
    const hex = hash.digest("hex");

    console.log(hex);
  } catch (e) {
    throw new Error(e.message);
  }
};

await calculateHash();
