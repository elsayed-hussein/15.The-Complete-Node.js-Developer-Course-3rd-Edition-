const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=b547593da728f465f39132fcafbd67c5&query=New%20York";

request({ url: url, json: true }, (error, response) => {
  console.log("error:", error);
  console.log(response.body.current);
});
