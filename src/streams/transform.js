import { pipeline, Transform } from "stream";

process.stdin.pipe(reverseTransform()).pipe(process.stdout);

const transform = async () => {
  try {
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        const reversed = chunk.toString().split("").reverse().join("");
        callback(null, reversed);
      },
    });
    pipeline(process.stdin, transformStream, process.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await transform();
