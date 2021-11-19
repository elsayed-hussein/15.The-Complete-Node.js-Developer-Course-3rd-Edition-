const request = require("postman-request");
const mapURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Abu%20Hammad.json?access_token=pk.eyJ1IjoiZWxzYXllZC1odXNzZW4iLCJhIjoiY2t3NmhiNDlnMHFlazJ1bGpoZDg5ZGpkNyJ9.yNLi2gCpu4vGzk4fsokzZg&limit=1";

  request({ url: mapURL , json: true }, (error, response) => {
    console.log("error:", error);
    const data = JSON.parse(response)
    console.log(data.body.features.place_name);
    // console.log(response.body.features.center);
  });


// const url =
//   "http://api.weatherstack.com/current?access_key=b547593da728f465f39132fcafbd67c5&query=30.533428,%2031.672311";

// request({ url: url, json: true }, (error, response) => {
//   console.log("error:", error);
//   // console.log(response.body.current);
//   console.log(
//     `It is currently ${response.body.current.temperature} Celsius out there and the weather feels like ${response.body.current.feelslike} Celsius `
//   );
// });
