import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  const readStream = fs.createReadStream("fileToCompress.txt");
  const writeStream = fs.createWriteStream("archive.gz");
  const gzip = zlib.createGzip();

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("Done");
    })
    .on("error", (err) => {
      console.error(err);
    });
};

await compress();
