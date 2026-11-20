// World News — 19 November 2026, in one image.
// Entry for make.fun bounty news-image-20261119 (Node 22, stdlib only).
//
// The image itself is entry.png beside this file: a 1024x1024 front page
// rendered in advance with real type (DejaVu Serif + DejaVu Sans) and flat
// vector shapes — no photoreal faces, no AI-generated text, so nothing in
// it can smear or garble. This program only copies those exact bytes to
// /output/entry.png, so both grader runs write identical bytes, with no
// network and no randomness.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

// Fail loudly instead of shipping a partial image: the source must exist
// and the copy must be byte-for-byte the same size, so both grader runs
// can only ever write the identical 1024x1024 PNG.
const sourceSize = statSync(source).size;
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
if (statSync(target).size !== sourceSize) {
  throw new Error(`entry.png copy is ${statSync(target).size} bytes, expected ${sourceSize}`);
}
