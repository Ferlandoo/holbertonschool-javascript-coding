function countStudents(argPath) {
  const fs = require('fs');
  fs.readFile(argPath, 'utf8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n');
    lines.splice(0, 1);
    console.log(`Number of students: ${lines.length - 1}`);
    const splited = lines.map((word) => word.split(','));
    const subjects = {};
    for (let i = 0; i < splited.length; i++) {
      if (!subjects[splited[i][3]]) {
        subjects[splited[i][3]] = [];
      }
      subjects[splited[i][3]].push(splited[i][0]);
    }
    console.log(`Number of students in ${Object.keys(subjects)[0]}: ${subjects.CS.length}. List: ${subjects.CS.join(', ')}`);
    console.log(`Number of students in ${Object.keys(subjects)[1]}: ${subjects.SWE.length}. List: ${subjects.SWE.join(', ')}`);
  });
}

module.exports = countStudents;
