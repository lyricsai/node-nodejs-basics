import { cpus } from "os";
import path from "path";
import { currDir } from "../libs/helpers.index.js";

const cores = 4;
const src = currDir(import.meta.url);
const workerPath = path.resolve(src, "./worker.js");

const performCalculations = async () => {
  const calculateFibonacci = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData });
      worker.on(
        "error",
        resolve((error) => {
          {
            status: "error";
          }
          throw new Error(error);
        })
      );
      worker.on(
        "mesage",
        resolve((data) => ({
          status: "resolved",
          data,
        }))
      );
    });
  };

  const calc = new Array(cpus).length;
  calc.fill(null).map((cpu, index));
  const data = new Promise.all(calc);
};
await performCalculations();
