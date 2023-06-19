// n should be received from main thread
import { workerData, parentNode } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentNode.postMessage(nthFibonacci(workerData));
};

sendResult();
