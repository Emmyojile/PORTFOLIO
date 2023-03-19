const form = require('../models/form')

exports.submitForm = async (req,res) => {
    try {
        const formMessage = await form.create({...req.body})
        return res.status(200).render({msg : "I have received your message "})

    } catch (error) {
        return res.status(400)
    }
}



// controllers/contactController.js

// const express = require('express');
// const router = express.Router();
// const emailModel = require('../models/emailModel');

// router.get('/', (req, res) => {
//   res.render('contactForm');
// });

// router.post('/', (req, res) => {
//   const data = {
//     email: req.body.email,
//     message: req.body.message
//   };
//   emailModel.send(data);
//   res.render('contactForm', { success: true });
// });

// module.exports = router;
