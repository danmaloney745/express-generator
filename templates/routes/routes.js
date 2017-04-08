const express = require('express');
const router = express.Router();
const indexController = require("../controllers/pageController");

router.get("/", indexController.showPage);

module.exports = router;