import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Today's smallest quest: I untangled the GitHub login for h2tran, pushed the token-radar entry and got it submitted as @minh-h-tran — one device code, one push, one acceptance.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
// Write the entry exactly as-is, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
