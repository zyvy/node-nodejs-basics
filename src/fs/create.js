import fs from "node:fs/promises";
import path from "node:path";
const create = async () => {
  const filename = "fresh.txt";
  const content = "I am fresh and young";
  const fullPath = path.join("files", filename);
  try {
    const file = await fs.open(fullPath, "wx");
    await file.writeFile(content);
    console.log(`File ${filename} created`);
    await file.close();
  } catch (err) {
    if (err.code === "EEXIST") {
      console.error("FS operation failed");
    }
  }
};

await create();
