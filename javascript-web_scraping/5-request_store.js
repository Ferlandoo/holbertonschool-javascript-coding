#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const fileName = `${process.argv[3]}`;

request(process.argv[2], 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    const info = data.body;
    fs.writeFile(fileName, info, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
