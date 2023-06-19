import { createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "node:stream/promises";
import { currDir } from "../libs/helpers/index.js";

const fileToWrite = "fileToWrite.txt";
const src = join(currDir(import.meta.url), "files", fileToWrite);

const write = async () => {
  const writableStream = await createWriteStream(src, { flags: "a" });
  await pipeline(process.stdin, writableStream);
};

await write();
