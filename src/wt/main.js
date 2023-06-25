import { cpus } from "os";
import path from "path";
import { Worker, workerData } from "worker_threads";
import { currDir } from "../libs/helpers/index.js";

const startNumber = 10;
const threads = cpus().length;
const threadsPromises = [];
const workerPath = path.resolve(currDir(import.meta.url), "worker.js");

const performCalculations = async () => {
  const calculateFibonacci = (data) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: data });

      worker.once("message", (data) =>
        resolve({
          status: "resolved",
          data,
        })
      );
      worker.once("error", () => resolve({ status: "rejected" }));
    });
  };

  for (let i = 0; i < threads; i++) {
    const a = calculateFibonacci(startNumber + i);
    threadsPromises.push(a);
  }

  const result = await Promise.all(threadsPromises);
  console.log(result);
};

await performCalculations();
