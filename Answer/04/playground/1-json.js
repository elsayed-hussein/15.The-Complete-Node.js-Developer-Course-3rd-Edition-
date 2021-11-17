const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);

// const book = {
//   title: "My life story",
//   author: "elsayed hussen",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author);
