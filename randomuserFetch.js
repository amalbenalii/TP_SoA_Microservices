function getRandomUserWithFetch(callback) {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(userData => {
        callback(null, userData);
      })
      .catch(error => {
        callback(error, null);
      });
  }
  
  getRandomUserWithFetch(function (error, userData) {
    if (error) {
      console.log("Erreur : ", error);
    } else {
      const user = userData.results[0];
      console.log("Nom : " + user.name.first + " " + user.name.last);
      console.log("Email : " + user.email);
      console.log("Adresse : " + user.location.city + ", " + user.location.country);
    }
  });
  