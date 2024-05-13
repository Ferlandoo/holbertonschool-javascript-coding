#!/usr/bin/node

const request = require('request');
const url = `${process.argv[2]}`;

request(url, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    const info = JSON.parse(data.body);
    let count = 0;
    for (const result in info.results) {
      const characters = info.results[result].characters;
      for (const character in characters) {
        if (characters[character].endsWith('18/')) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
});
