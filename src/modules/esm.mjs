import path from "path";
import url from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import("./files/c");

const random = Math.random();

if (random > 0.5) {
  const unknownObject = await import("./files/a.json");
} else {
  const unknownObject = await import("./files/b.json");
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

exports = {
  unknownObject,
  myServer,
};
