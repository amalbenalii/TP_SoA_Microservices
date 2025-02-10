# TP : Introduction aux APIs RESTful avec OpenWeatherMap, NASA API et RandomUser API

## Objectifs
Les APIs RESTful permettent aux applications de communiquer entre elles de manière efficace et standardisée. Ce projet vise à fournir une compréhension pratique des principes fondamentaux des APIs RESTful et de l'utilisation du format JSON, en explorant différentes bibliothèques de requêtes en JavaScript.

- Comprendre les principes de l'API RESTful
- Utiliser le format de données JSON
- Consommer des API en utilisant différentes bibliothèques (request, fetch, axios)

## Outils Utilisés
- **Node.js**
- **API OpenWeatherMap**
- **API NASA**
- **API RandomUser**
- **Bibliothèques : request, fetch, axios**

---

## 1. Prérequis
Avant d'exécuter le projet, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/)
- npm (installé avec Node.js)

Vérifiez votre installation avec :

**node -v**

**npm -v**


## 2. Installation des Dépendances

**Clone le repository et installe les dépendances avec npm :**

git clone https://url_du_repository.git

cd nom_du_dossier

npm install

**Installer les dépendances :**

npm install request axios


---

## 3. Utilisation des APIs

### a) OpenWeatherMap API
#### Inscription et Clé API
1. Inscrivez-vous sur [OpenWeatherMap](https://openweathermap.org/api)
2. Récupérez votre clé API
3. Modifiez les fichiers \`weatherRequest.js\`, \`weatherFetch.js\` et \`weatherAxios.js\` en remplaçant \`API_KEY\` par votre propre clé

#### Exécuter les scripts :
- Avec **request** :
  
  node weatherRequest.js
 
- Avec **fetch** :
  
  node weatherFetch.js
 
- Avec **axios** :
  
  node weatherAxios.js
  

---

### b) NASA API
#### Inscription et Clé API
1. Inscrivez-vous sur [NASA API](https://api.nasa.gov/)
2. Récupérez votre clé API
3. Modifiez les fichiers \`nasaFetch.js\` et \`nasaAxios.js\` en remplaçant \`NASA_API_KEY\` par votre propre clé

#### Exécuter les scripts :
- Avec **fetch** :
 
  node nasaFetch.js

- Avec **axios** :
 
  node nasaAxios.js
  

---

### c) RandomUser API
#### Exécuter les scripts :
- Avec **request** :

  node randomuserRequest.js

- Avec **fetch** :
  
  node randomuserFetch.js
  
- Avec **axios** :
  
  node randomuserAxios.js
  

---

## 4. Explication des Paramètres OpenWeatherMap
Les scripts retournent les informations suivantes pour la ville de **Sousse** :
- **Description météo**
- **Température (°C)**
- **Humidité (%)**

Les requêtes sont effectuées avec les paramètres suivants :
- **\`units=metric\`** : Conversion des unités en Celsius
- **\`lang=fr\`** : Résultats en français

---

## 5. Contact
**Nom de l'étudiante :** Amal Ben Ali

**Matière :** SoA et Microservices

**Enseignant :** Dr. Salah Gontara

**Année Universitaire :** 2024/2025
