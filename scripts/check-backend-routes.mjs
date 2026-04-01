const urls = [
  "http://localhost:5000/health",
  "http://localhost:5000/healthz",
  "http://localhost:5000/api/healthz",
];

for (const url of urls) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log(`${url} -> ${res.status}`);
    console.log(text.slice(0, 160).replace(/\s+/g, " ").trim());
  } catch (error) {
    console.log(`${url} -> ERR`);
    console.log(error instanceof Error ? error.message : String(error));
  }
}
