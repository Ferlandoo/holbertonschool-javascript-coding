#!/usr/bin/node

const https = require('https');
const http = require('http');
const address = process.argv[2];

if (address.startsWith('https')) {
  https.get(address, (response) => {
    console.log(`code: ${response.statusCode}`);
    process.exit();
  });
} else {
  http.get(address, (response) => {
    console.log(`code: ${response.statusCode}`);
    process.exit();
  });
}
