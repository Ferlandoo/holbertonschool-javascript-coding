#!/usr/bin/node

const fs = require('fs');
const textArg = process.argv[3];
const fileName = process.argv[2];

fs.writeFile(fileName, textArg, 'utf-8', (error) => {
  if (error) {
    console.log(error);
  }
});
