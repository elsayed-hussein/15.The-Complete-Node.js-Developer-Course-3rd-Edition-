const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=b547593da728f465f39132fcafbd67c5&query=New%20York";

request(url, (error, response) => {
  console.log("error:", error);
  console.log("don");
  const data = JSON.parse(response.body);
  console.log(data.current);
});
