'use strict';

const fs = require('fs');

const bigFileName = 'big-text-file.txt';
const outputFileName = 'big-text-file-copy.txt';

function copyFile(sourceFilename, destFilename) {
  let input = fs.createReadStream(sourceFilename);
  let output = fs.createWriteStream(destFilename);
  input.on('data', (chunk) => {
    output.write(chunk);
  });
  input.on('end', () => {
    output.close();
    input.close();
  });
}

copyFile(bigFileName, outputFileName);
