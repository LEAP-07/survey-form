const express = require("express");
const router = express.Router();
const formDataController = require('../controllers/formDataController')
router.route('/')
    .get(formDataController.postFormData)
    .post(formDataController.getFormData);

module.exports = router;