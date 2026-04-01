import { spawn } from "node:child_process";
import { openSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fd = openSync(path.join(root, "api-server.dev.log"), "a");

const child = spawn("pnpm", ["--filter", "@workspace/api-server", "run", "dev"], {
  cwd: root,
  detached: true,
  stdio: ["ignore", fd, fd],
  shell: true,
});

child.unref();
console.log(`started api-server pid=${child.pid}`);
