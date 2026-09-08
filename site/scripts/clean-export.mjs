import { readdir, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const outDir = join(root, "out");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
    } else if (entry.name === ".DS_Store") {
      await unlink(path);
      console.log(`Removed ${path.replace(root, "")}`);
    }
  }
}

if (existsSync(outDir)) {
  for (let pass = 0; pass < 8; pass += 1) {
    await walk(outDir);
    await sleep(150);
  }
}
