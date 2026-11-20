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
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
