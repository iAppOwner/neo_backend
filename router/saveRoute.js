const save = require("../controller/saveController")
const router = require("express").Router()

router.route("/save").post(save.saveData)

module.exports = router;