const request = require("request");

const BASE_URL = "https://randomuser.me/api/";

function getRandomUser(callback) {
  request(BASE_URL, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const userData = JSON.parse(body);
      callback(null, userData);
    }
  });
}

getRandomUser(function (error, userData) {
  if (error) {
    console.log("Erreur : ", error);
  } else {
    const user = userData.results[0];
    console.log("Nom : " + user.name.first + " " + user.name.last);
    console.log("Email : " + user.email);
    console.log("Adresse : " + user.location.city + ", " + user.location.country);
  }
});
