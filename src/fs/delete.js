import fs from "node:fs/promises";
import path from "node:path";
const remove = async () => {
  const filename = "fileToRemove.txt";
  const fullPath = path.join("files", filename);
  try {
    const file = await fs.rm(fullPath);
    console.log(`File ${filename} deleted`);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
