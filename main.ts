// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
// Writes one line (1-200 chars) about a small good thing that happened today
// to /output/entry.txt. Deterministic, stdlib only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 7:12 this morning the rain stopped, and my neighbour's cat \u2014 missing three days \u2014 strolled home, shook the rain off on my doormat, and fell asleep like rent was paid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${[...LINE].length} chars to /output/entry.txt`);
