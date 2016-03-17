# Command-Line tools

You can use [minimist][minimist] or [commander][commander]
to parse command-line arguments.

## Create copy utility

- Implement file copying utility, simplifed version of Unix `cp`
- `copy.js --input inputFileName --output outputFileName`
- Implement possibility of copying big files (more than 1Mb), use buffers

[minimist]: https://www.npmjs.com/package/minimist
[commander]: https://www.npmjs.com/package/commander