//with fs/promises cp method doesn't call custom error
import { cp } from "fs/promises";
import { Error_FS } from "../libs/helpers/index.js";

const src = "./files";
const dest = "./files_copy";

const copy = async () => {
  try {
    cp(
      src,
      dest,
      { recursive: true, errorOnExist: true }
      //   , (err) => {
      //   if (err) throw new Error_FS();
      // }
    );
  } catch  {
    throw new Error_FS();
  }
};

await copy();
