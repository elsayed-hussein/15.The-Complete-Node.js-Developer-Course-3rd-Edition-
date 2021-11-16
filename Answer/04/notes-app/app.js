const chalk = require("chalk");
const yargs = require("yargs");
// const validator = require("validator");
const getNotes = require("./notes.js");

// customize yargs version
// yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note ",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
    // console.log("adding a new note!",argv);
  },
});
// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note ",
  handler: function () {
    console.log("removing the note!");
  },
});
// create list command
yargs.command({
  command: "list",
  describe: "list the notes ",
  handler: function () {
    console.log("listing the notes!");
  },
});
// create read command
yargs.command({
  command: "read",
  describe: "read the note ",
  handler: function () {
    console.log("reading the note!");
  },
});
yargs.parse();
// console.log(yargs.argv);
// console.log(process.argv);

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
