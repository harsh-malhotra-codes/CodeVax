const checks = [
  ["backend-health", "http://localhost:5000/health"],
  ["frontend-home", "http://localhost:5173/"],
];

for (const [label, url] of checks) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log(`${label}: ${res.status} ${res.statusText}`);
    console.log(text.slice(0, 200).replace(/\s+/g, " ").trim());
  } catch (error) {
    console.log(`${label}: ERROR`);
    console.log(error instanceof Error ? error.message : String(error));
  }
}
