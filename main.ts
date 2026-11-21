import * as fs from "node:fs";

const JOKE =
  "I asked the agent to fix a typo; it refactored the module, gave the typo an interface, and promoted it to a private field.";

// The gate requires 1-280 characters, counted as Unicode code points,
// a single line, and not only white space. Fail loudly instead of
// writing an entry the gate would refuse.
const length = [...JOKE].length;
if (length < 1 || length > 280) {
  throw new Error(`joke must be 1-280 characters, got ${length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only white space");
}
if (/\r|\n/.test(JOKE)) {
  throw new Error("joke must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
