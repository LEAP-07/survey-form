const express = require("express");
const router = express.Router();
const homeDataController= require('../controllers/homeDataController')
router.route('/')
    .get(homeDataController.index)

module.exports = router;