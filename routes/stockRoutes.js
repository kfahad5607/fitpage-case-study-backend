const express = require("express");
const router = express.Router();
const { getStocks, getStock } = require("../controllers/stockControllers");

router.route("/").get(getStocks);
router.route("/:id").get(getStock);

module.exports = router;
