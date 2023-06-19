import path from "path";
import url from "url";

export class Error_FS extends Error {
  constructor() {
    super();
    this.message = "FS operation failed";
    console.log(this.message);
  }
}

export function currDir(fileUrl) {
  const __filename = url.fileURLToPath(fileUrl);
  return path.dirname(__filename);
}
