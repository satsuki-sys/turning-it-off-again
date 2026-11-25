// Have You Tried Turning It Off? — one funny line from a hopeless tech support agent.
// Revision: cut the hedging middle, keep the escalation ladder, land on the
// biggest possible reboot. The agent stays cheerful; the customer is never the butt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Have you tried turning it off and on again? Lovely — now do the router, the monitor, and the building. We'll work our way up to the sun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
