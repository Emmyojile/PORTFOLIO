const express = require('express');
const router = express.Router();
const {submitForm} = require('../controllers/form')

router.route('/submitForm').post(submitForm)


module.exports = router