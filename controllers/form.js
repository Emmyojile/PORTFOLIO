const form = require('../models/form')
const nodemailer = require('nodemailer')

exports.submitForm = async (req,res) => {
    res.render('form')
}

exports.thankYouPage = async (req, res) => {
    res.render('send')
}

exports.send = async (req, res) => {
    // const output = `
    //     <p>You have a new contact request</p>
    //     <h3>Contact Details</h3>
    //     <ul>
    //         <li>Name: ${req.body.name}</li>
    //         <li>Name: ${req.body.email}</li>
    //     </ul>
    //     <h3>Message</h3>
    //     <p>${req.body.message}}</p>
    // `;

     const transport = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : process.env.email,
            pass : process.env.password
        }
    })

    const mailoptions = {
        from : req.body.email,
        to : 'emmaojile99@gmail.com',
        subject : 'Portfolio Contact',
        html : `<p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`
    }

    transport.sendMail(mailoptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        console.log(info)
    })
    res.render('send', {msg: 'Email has been sent'})
}

exports.backToPortfolio = (req, res) => {
    try {
        return res.render('form')
    } catch (error) {
        console.log(error);
    }
}
