import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const srcDir = "files";
  const destDir = "files_copy";
  try {
    await fs.access(srcDir);
    await fs.access(destDir);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
    await fs.mkdir(destDir, { recursive: true });

    const files = await fs.readdir(srcDir);
    for (const file of files) {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, file);
      await fs.copyFile(srcPath, destPath);
    }
  }
};

await copy();
