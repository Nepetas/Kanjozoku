const axios = require("axios");

let input = document.getElementById("ipinput");

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    api(input.value, "");
  }
});

function api(ip, values) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
  });
}
