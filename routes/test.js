const router = require("express").Router();


router.get("/test", (req,res) => {
    res.send("hello")
} )

module.exports = router;