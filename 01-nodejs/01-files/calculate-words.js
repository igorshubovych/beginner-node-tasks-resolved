'use strict';

const fs = require('fs');

const bigFileName = 'big-text-file.txt';

var readStream = fs.createReadStream(bigFileName, { encoding: 'utf8' });

let totalWordsCount = 0;

readStream.on('data', (chunk) => {
  totalWordsCount += getWordsCount(chunk);
});

readStream.on('end', () => {
  console.log('==================');
  console.log(`Total words count: ${totalWordsCount}`);
});

function getWordsCount(text) {
  return text.split(/\W+/).length;
}
