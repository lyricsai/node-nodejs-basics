import fs from "fs";
import path from "path";
import zlib from "zlib";
import { currDir } from "../libs/helpers/index.js";

const src = path.join(currDir(import.meta.url), "files", "archive.gz");
const dest = path.join(currDir(import.meta.url), "files", "fileToCompress.txt");

const srcStream = fs.createReadStream(src);
const destStream = fs.createWriteStream(dest);
const decompressStream = zlib.createGunzip();

const compress = async () => {
  try {
    srcStream.pipe(decompressStream).pipe(destStream);
  } catch (error) {
    throw new Error(error.message);
  }
};
await compress();
