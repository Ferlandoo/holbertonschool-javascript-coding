#!/usr/bin/node

const https = require('https');
const address = process.argv[2];

https.get(address, (result) => {
  console.log(`code: ${result.statusCode}`);
  process.exit();
});
