#!/usr/local/bin/node

const request = require('request');

request(process.argv[2], (error, data) => {
  if (error) {
    console.log(error);
  } else {
    const info = JSON.parse(data.body);
    const taskList = {};
    for (const element in info) {
      if (info[element].completed === true) {
        if (taskList[info[element].userId] === undefined) {
          taskList[info[element].userId] = 1;
        } else {
          taskList[info[element].userId] += 1;
        }
      }
    }
    console.log(taskList);
  }
});
