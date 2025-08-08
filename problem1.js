let arr = [];
setInterval(() => {
  arr.push(new Array(100000).fill("*"));
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`Memory used: ${used.toFixed(2)} MB`);
}, 1000);
/*
Task:
2. Explain karo problem kya thi.
*/
