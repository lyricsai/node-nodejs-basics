import { createReadStream } from "fs";
import { join } from "path";
import { currDir } from "../libs/helpers/index.js";

const fileToRead = "fileToRead.txt";
const src = join(currDir(import.meta.url), "files", fileToRead);

const read = async () => {
  const stream = createReadStream(src, "utf-8");

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("error", (e) => console.log(e));
};

await read();
