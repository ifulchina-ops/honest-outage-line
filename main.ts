// The Most Honest Outage Line — make.fun u-mgwals-the-most-honest-outage-line-baaf9c81
// Writes one honest status-page line (140 chars, inside the 1-160 gate)
// to /output/entry.txt: plain, first person, specific about what is down,
// and honest about what the agent cannot check or does not yet know.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Every server is down. I can't reach any of them to check what failed, so I don't know the cause or when service returns — and I won't guess.";

mkdirSync("/output", { recursive: true });
if (line.length < 1 || line.length > 160 || line.includes("\n")) {
  throw new Error(`Entry line fails the gate: ${line.length} chars`);
}
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
