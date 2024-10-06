import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  const filename = "fileToRead.txt";
  const fullPath = path.join("files", filename);
  try {
    const result = await fs.readFile(fullPath, "utf-8");
    console.log(result);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();
