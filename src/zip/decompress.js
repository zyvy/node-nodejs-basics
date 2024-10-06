import fs from "fs";
import zlib from "zlib";
const decompress = async () => {
  const readStream = fs.createReadStream("archive.gz");
  const writeStream = fs.createWriteStream("fileToCompress.txt");
  const gunzip = zlib.createGunzip();

  readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("Done");
    })
    .on("error", (err) => {
      console.error(err);
    });
};

await decompress();
