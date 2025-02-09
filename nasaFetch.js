const NASA_API_KEY = "pjfADO5uShrqoU50DcHcJWKrnsEAkA0BibbD1yZY";  

const NASA_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

function getNASADataFetch() {
    fetch(NASA_URL)
        .then(response => response.json())
        .then(data => {
            console.log(`Titre: ${data.title}`);
            console.log(`Date: ${data.date}`);
            console.log(`Description: ${data.explanation}`);
            console.log(`URL de l'image: ${data.url}`);
        })
        .catch(error => console.log("Erreur: ", error));
}

getNASADataFetch();