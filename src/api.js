const axios = require("axios");

let input = document.getElementById("ipinput");
let output = document.getElementById("ipinfo");

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    api(input.value);
  }
});

function api(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}
