import fs from "fs";
import zlib from "zlib";

const src = fs.createReadStream("./files/fileToCompress.txt");
const dest = fs.createWriteStream("./files/archive.gz");
const compressStream = zlib.createGzip();

const compress = async () => {
  try {
    src.pipe(compressStream).pipe(dest);
  } catch (error) {
    throw new Error(error.message);
  }
};
await compress();
