const axios = require("axios");

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e);
}

function api(ip, values) {
    axios({
        method: "get",
        url: `http://ip-api.com/json/${ip}`,
        responseType: "stream",
    }).then(function(response) {
        console.log(response);
    });
}

function test() {
    axios({
        method: "get",
        url: "http://ip-api.com/json/1.1.1.1",
        responseType: "stream",
    }).then(function(response) {
        console.log(response);
    });
}

function exit() {
    console.log("Closing...");
    const { app, app } = require("electron");

    app.quit();
}