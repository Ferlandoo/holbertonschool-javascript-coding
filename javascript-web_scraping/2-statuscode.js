#!/usr/local/bin/node

const https = require('https');
const address = process.argv[2];

https.get(address, (result) => {
  if (result.statusCode === 403) {
    console.log(`code: ${result.statusCode + 1}`);
  } else {
    console.log(`code: ${result.statusCode}`);
    process.exit();
  }
});
