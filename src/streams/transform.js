import { Transform } from "stream";

const transform = async () => {
  try {
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        const reversed = chunk.toString().split("").reverse().join("");
        callback(null, reversed);
      },
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await transform();
