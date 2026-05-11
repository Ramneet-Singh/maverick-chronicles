import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

function toArrayBuffer(buffer: Buffer<ArrayBufferLike>) {
  return Uint8Array.from(buffer).buffer;
}

async function loadLocalFont(
  fileName: string,
  weight: number
): Promise<{ name: string; data: ArrayBuffer; weight: number; style: string }> {
  const data = await readFile(
    resolve(process.cwd(), "public", "fonts", fileName)
  );

  return {
    name: "IBM Plex Mono",
    data: toArrayBuffer(data),
    weight,
    style: "normal",
  };
}

async function loadGoogleFonts() {
  return Promise.all([
    loadLocalFont("ibm-plex-mono-latin-400-normal.woff", 400),
    loadLocalFont("ibm-plex-mono-latin-700-normal.woff", 700),
  ]);
}

export default loadGoogleFonts;
