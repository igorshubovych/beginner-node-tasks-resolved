'use strict';

const fs = require('fs');
const faker = require('faker');

const bigFileName = 'big-text-file.txt';

let fileStream = generateBigFile(bigFileName);
fileStream.on('finish', () => {
  printFileSize(bigFileName);
});

function generateBigFile(fileName) {
  const paragraphs = 100;
  const maxTimes = 10000;

  let file = fs.createWriteStream(fileName);

  const textBlock = faker.lorem.paragraphs(paragraphs);
  for (let i = 0; i < maxTimes; i++) {
    file.write(textBlock);
  }
  file.end();
  return file;
}

function printFileSize(fileName) {
  const kilo = 1000;
  let stats = fs.statSync(fileName);
  let mb = stats.size / kilo / kilo;
  console.log(`File ${bigFileName} is generated. Size - ${mb} Mb`);
}
