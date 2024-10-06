import fs from "node:fs/promises";

const list = async () => {
  const srcDir = "files";
  try {
    await fs.access(srcDir);
    const files = await fs.readdir(srcDir);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
