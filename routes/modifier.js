const router = require("express").Router();
const Livre = require("../models/livre");

router
.get("/modifier/:id", async (req,res) => {
    const { id } = req.params;

    const getData = await Livre.findOne({_id : id});
    res.render("Modifier", { livre : getData })
})

.post("/modifier/:id", (req,res) => {
    const { id } = req.params;
    const { Titre , Auteur , Desc , Contenu , Categorie , MaisonEdition } = req.body;

    Livre.updateOne({ _id : id} , { Titre , Auteur , Desc , Contenu , Categorie , MaisonEdition })
    .then(()=> {
        console.log("Mise a jour reussi");
        res.redirect("/");
    })
    .catch((err) => console.log("erreur modification"))
})
module.exports = router;
