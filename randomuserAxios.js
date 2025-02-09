const axios = require("axios");

function getRandomUserWithAxios(callback) {
  axios.get("https://randomuser.me/api/")
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error, null);
    });
}

getRandomUserWithAxios(function (error, userData) {
  if (error) {
    console.log("Erreur : ", error);
  } else {
    const user = userData.results[0];
    console.log("Nom : " + user.name.first + " " + user.name.last);
    console.log("Email : " + user.email);
    console.log("Adresse : " + user.location.city + ", " + user.location.country);
  }
});
