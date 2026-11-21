import * as fs from "node:fs";

const JOKE =
  "I asked the agent to fix a typo; it refactored the module, gave the typo an interface, and promoted it to a private field.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
