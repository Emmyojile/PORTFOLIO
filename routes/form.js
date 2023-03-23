const express = require('express');
const router = express.Router();
const {submitForm,send,backToPortfolio,thankYouPage} = require('../controllers/form')

router.route('/submitForm').get(submitForm)
router.route('/send').post(send)

router.route('/thankYouPage').get(thankYouPage)
router.route('/backToPortfolio').get(backToPortfolio)



module.exports = router