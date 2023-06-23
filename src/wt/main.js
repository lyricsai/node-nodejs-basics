import { cpus } from "os";
import path from "path";
import { Worker } from "worker_threads";
import { currDir } from "../libs/helpers/index.js";

const startNumber = 10;
const threads = cpus().length;
const threadsPromises = [];
const workerPath = path.resolve(currDir(import.meta.url), "worker.js");

const performCalculations = async () => {
  const calculateFibonacci = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData });

      worker.on(
        "mesage",
        resolve({
          status: "resolved",
          data: workerData,
        })
      );

      worker.on(
        "error",
        reject({
          status: "error",
          data: null,
        })
      );
    });
  };

  for (let i = 0; i < threads; i++) {
    threadsPromises.push(calculateFibonacci(startNumber + i));
  }

  const result = await Promise.all(threadsPromises);
  console.log(result);
};

await performCalculations();
