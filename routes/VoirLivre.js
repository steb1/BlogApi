const router = require("express").Router();
const Livre = require("../models/livre");

router
.get("/voirlivre/:id", async (req,res) => {
    const { id } = req.params;
    const getLivre = await Livre.findOne({_id: id});

    res.render("VoirLivre" , { livres : getLivre});
})

module.exports = router;