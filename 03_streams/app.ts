import { Buffer } from "buffer";
import fs from "fs/promises";

async function main() {
    const fileHandler = await fs.open(
        "/Users/rajatverma/Desktop/personal/test/nodeJS-advanced/03_streams/test-file.txt",
        "w"
    );

    const writerStream = fileHandler.createWriteStream();

    console.time("writeStream");
    for (let i = 0; i < 10_00_000_0; i++) {
        const buf = Buffer.from(` ${i} `);

        writerStream.write(buf);

        // await fileHandler.write(buf);
    }
    console.timeEnd("writeStream");
}

main();
