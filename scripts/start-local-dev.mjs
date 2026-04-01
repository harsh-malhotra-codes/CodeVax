import { spawn } from "node:child_process";
import { openSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function start(name, args, logFile) {
  const fd = openSync(path.join(root, logFile), "a");
  const child = spawn(args[0], args.slice(1), {
    cwd: root,
    detached: true,
    stdio: ["ignore", fd, fd],
    shell: true,
  });
  child.unref();
  console.log(`started ${name} pid=${child.pid}`);
}

start("api-server", ["pnpm", "--filter", "@workspace/api-server", "run", "dev"], "api-server.dev.log");
start("codevax", ["pnpm", "--filter", "@workspace/codevax", "run", "dev"], "codevax.dev.log");
