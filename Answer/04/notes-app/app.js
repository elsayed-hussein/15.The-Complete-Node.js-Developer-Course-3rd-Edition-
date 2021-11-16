const chalk = require("chalk");
const yargs = require("yargs");
// const validator = require("validator");
const getNotes = require("./notes.js");

console.log(process.argv);
console.log(yargs.argv);

// const command = process.argv[2]

// if (command ==='add') {
//     console.log('Adding Note!');
// }else if (command ==='remove'){
//     console.log('Removing Note!');
// }

// const msg = getNotes();

// console.log(msg);

// console.log(process.argv[2]);

// console.log(validator.isEmail('you@you.com'));

// console.log(validator.isURL('you.com'));

// console.log(chalk.green('Hello world!'));

// console.log(chalk.bold.bgYellow.red(`Hello!`));
