import fs from "fs";
import zlib from "zlib";

const src = fs.createReadStream("./files/archive.gz");
const dest = fs.createWriteStream("./files/fileToCompress2.txt");
const decompressStream = zlib.createGunzip();

const compress = async () => {
  try {
    src.pipe(decompressStream).pipe(dest);
  } catch (error) {
    throw new Error(error.message);
  }
};
await compress();
