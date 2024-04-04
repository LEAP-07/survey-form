const express = require("express");
const router = express.Router();
const formDataController = require('../controllers/formDataController')
router.route('/')
    .get(formDataController.getFormData)
    .post(formDataController.postFormData);

module.exports = router;