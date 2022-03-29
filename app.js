const express = require("express");
const mongoose = require("mongoose");

const app = express();

// mongodb
mongoose.connect(
    "",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("La connexion à la base de données mongodb a réussi !");
    },
    () => {
      console.log("Connexion à la base de données mongodb");
    }
);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/ajouter"));
app.use(require("./routes/modifier"));
app.use(require("./routes/supprimer"));
app.use(require("./routes/voirlivre"));

// server
app.listen(4000, () => console.log("Le serveur a commencé à écouter sur le port : 4000"));