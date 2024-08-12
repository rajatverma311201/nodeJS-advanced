import { Buffer } from "buffer";

const memoryContainer = Buffer.alloc(4); // 4 bytes = 32 bits
console.log({ memoryContainer });

console.log({
    "memoryContainer[0]": memoryContainer[0],
});

memoryContainer[0] = 0xf4;

console.log({
    "memoryContainer[0]": memoryContainer[0],
});

console.log({ memoryContainer });
