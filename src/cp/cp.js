import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["script.js"].concat(args), {
    stdio: "inherit",
    ipc: true,
  });

  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2"]);
