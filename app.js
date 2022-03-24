express = require('express');
mongoose = require('mongoose');
const router = require("express").Router();
const Livre = require("../models/livre");
app = express();

const newLocal = "mongodb://127.0.0.1/Livre";
//Mongodb
mongoose.connect(newLocal),
{
    useNewUrlParser: true, useUnifiedTopology: true,
},
() => { 
    console.log("Connection Reussie")
}

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Les routes
app.use(require("./routes/index"))
app.use(require("./routes/ajouter"))
app.use(require("./routes/modifier"))
app.use(require("./routes/supprimer"))
app.use(require("./routes/voirlivre"))





//Activer le Server
app.listen(4000, () => console.log("Serveur actif"));