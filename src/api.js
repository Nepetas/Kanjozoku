const axios = require("axios");

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
    const { app } = require("electron");

    app.quit();
}