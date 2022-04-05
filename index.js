const express = require('express');
/* premet de créer un fichier .env */
require('dotenv').config();
/* On récupere le fichier .env */
const port = process.env.PORT 
/* App utilise express */
const app = express();
/* on appelle la route meteo */
const meteo = require('./routes/meteo');

/* express converti au format json */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* A present express utilise meteo comme route */
app.use('/meteo', meteo);


app.listen(port, () => {
    console.log(`serveur lancé sur le port : ${port}`)
})
