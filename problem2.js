// problem-bigfile.js
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/file', (req, res) => {
  const filePath = './node-problems/bigfile3.txt'; // 100MB file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(data); // Send full content
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


//
// Neeche bali command ko chala ke check kro first and last api ka response time to ise fix karna hai


// for i in {1..100}; do
//  (time curl -s http://localhost:3000/file -o /dev/null) &
// done
// wait


