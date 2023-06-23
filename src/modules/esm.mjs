import path from "path";
import url from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";

const random = Math.random();
let unknownObject;

if (random > 0.5) {
  unknownObject = (await import("./files/a.json", { assert: { type: "json" } }))
    .default;
} else {
  unknownObject = (await import("./files/b.json", { assert: { type: "json" } }))
    .default;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);
console.log(unknownObject);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
