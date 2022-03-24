const router = require("express").Router();
const Livre = require("../models/livre");

router
.get("/ajouter", (req,res) => {
    res.render("Ajouter");
})
.post("/ajouter", (req,res) => {
    const {Titre, Auteur, Contenu, Desc, Categorie, MaisonEdition} = req.body;

    // verifions Les Champs vident

    if (!Titre || !Auteur || !Desc || !Contenu || !MaisonEdition || !Categorie)
      return res.send("Remplissez tous les champs svp");

    const newLivre = new Livre({Titre, Auteur, Contenu, Desc, Categorie, MaisonEdition})
    //Enregistrez le Livre dans la base de donnees
    newLivre
    .save()
    .then(() => {
        console.log("Blog Enregistrer")
        res.redirect("/")
    }
    )
    .catch((err) => console.log(err))
})

module.exports = router