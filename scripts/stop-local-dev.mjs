const pids = [3348, 7440];

for (const pid of pids) {
  try {
    process.kill(pid);
    console.log(`stopped ${pid}`);
  } catch (error) {
    console.log(`skip ${pid}`);
    console.log(error instanceof Error ? error.message : String(error));
  }
}
