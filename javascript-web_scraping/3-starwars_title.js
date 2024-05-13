#!/usr/bin/node

const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request(url, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    const info = JSON.parse(data.body);
    console.log(info.title);
  }
});
