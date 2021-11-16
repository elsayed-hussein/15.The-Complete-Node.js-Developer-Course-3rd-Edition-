const chalk = require('chalk');
const validator = require("validator");
const getNotes = require("./notes.js");

const msg = getNotes();

console.log(msg);

// console.log(validator.isEmail('you@you.com'));

// console.log(validator.isURL('you.com'));

// console.log(chalk.green('Hello world!'));

// console.log(chalk.bold.bgYellow.red(`Hello!`));