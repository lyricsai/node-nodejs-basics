import fs from "fs";
import path from "path";
import zlib from "zlib";
import { currDir } from "../libs/helpers/index.js";

const src = path.join(currDir(import.meta.url), "files", "fileToCompress.txt");
const dest = path.join(currDir(import.meta.url), "files", "archive.gz");

const srcStream = fs.createReadStream(src);
const destStream = fs.createWriteStream(dest);
const compressStream = zlib.createGzip();

const compress = async () => {
  try {
    srcStream.pipe(compressStream).pipe(destStream);
  } catch (error) {
    throw new Error(error.message);
  }
};
await compress();
