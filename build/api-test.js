// test env.
process.env.NODE_ENV = 'test';

const Mocha = require('mocha');
const path = require('path');
const glob = require('glob');

// requite the app itself
// using GLOBAL variable, so don't have to load it multiple times (for each version)
global.app = require('../src/server.js');

// test env.
process.env.NODE_ENV = 'test';

// Instantiate a Mocha instance.
const mocha = new Mocha();
const srcDir = path.join(__dirname, '../src');

// get all test files
glob(`${srcDir}/api/**/*.test.js`, (err, files) => {
  files.forEach((file) => {
    mocha.addFile(file); // add file to the list
  });
  // Run the tests.
  mocha.run((failures) => {
    process.on('exit', () => {
      process.exit(failures); // exit with non-zero status if there were failures
    });
  });
});
