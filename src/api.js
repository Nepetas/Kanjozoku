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
    continent(input.value);
    continentCode(input.value);
    country(input.value);
    countryCode(input.value);
    region(input.value);
    regionName(input.value);
    city(input.value);
    district(input.value);
    zip(input.value);
    lat(input.value);
    lon(input.value);
    timezone(input.value);
    offset(input.value);
    currency(input.value);
    isp(input.value);
    org(input.value);
    as(input.value);
    asname(input.value);
    reverse(input.value);
    mobile(input.value);
    proxy(input.value);
    hosting(input.value);
    query(input.value);
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

function country(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=country`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function continent(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=continent`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function continentCode(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=continentCode`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function country(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=country`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function countryCode(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=countryCode`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function region(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=region`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function regionName(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=regionName`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function city(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=city`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function district(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=district`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function zip(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=zip`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function lat(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=lat`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function lon(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=lon`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function timezone(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=timezone`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function offset(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=offset`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function currency(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=currency`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function isp(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=isp`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function org(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=org`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function as(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=as`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function asname(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=asname`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function reverse(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=reverse`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function mobile(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=mobile`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function proxy(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=proxy`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function hosting(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=hosting`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

function query(ip) {
  axios({
    method: "get",
    url: `http://ip-api.com/json/${ip}?fields=query`,
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
    console.log(JSON.stringify(response));
    output.value = JSON.stringify(response).status;
  });
}

