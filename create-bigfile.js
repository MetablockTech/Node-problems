const fs = require("fs");

const filePath = __dirname + "/node-problems/bigfile.txt";

// 200 MB ka file banayenge
const sizeInMB = 200;
const chunk = "A".repeat(1024 * 1024); // 1 MB ka data

console.log(`Creating ${sizeInMB}MB file...`);
for (let i = 0; i < sizeInMB; i++) {
  fs.appendFileSync(filePath, chunk);
}

console.log("✅ File created at:", filePath);
