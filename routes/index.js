const router = require("express").Router();
const Livre = require("../models/livre");

router.get("/", async (req, res) => {
  const allLivres = await Livre.find();
  res.render("index", { livres : allLivres });
});

module.exports = router;
