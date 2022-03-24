const router = require("express").Router();
const Livre = require("../models/livre");

router
.get("/supprimer/:id", (req,res) => {
     const { id } = req.params;
     Livre.deleteOne({_id: id})
     .then(() => {
         console.log("Livre Suppimer");
         res.redirect("/");
     })
     .catch((err) => console.log(err));
})
module.exports = router;