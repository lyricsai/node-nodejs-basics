import path from "path";
import { spawn } from "child_process";
import { currDir } from "../libs/helpers/index.js";

const src = path.join(currDir(import.meta.url), "files", "script.js");

const spawnChildProcess = async (args) => {
  const child = spawn("node", [src].concat(args), {
    stdio: ["pipe", "pipe", process.stderr, "ipc"],
  });

  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });

  child.on("end", () => {
    child.stdin.end();
  });

  child.on("exit", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2"]);
