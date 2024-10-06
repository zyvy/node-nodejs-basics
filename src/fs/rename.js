import fs from "node:fs/promises";
import path from "node:path";

const rename = async () => {
  const wrongName = "wrongFilename.txt";
  const newName = "properFilename.md";
  const srcPath = path.join("files", wrongName);
  const destPath = path.join("files", newName);

  try {
    await fs.access(srcPath);
    try {
      await fs.access(destPath);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
    await fs.rename(srcPath, destPath);
    console.log(`File renamed to ${newName}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
