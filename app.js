require('dotenv').config()
const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const router = require('./routes/form');
const bodyParser = require('body-parser');
// const {engine} = require('express-handlebars')
const nodemailer = require('nodemailer');

const {engine}  = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('./public'))
app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, './public', 'index.html'));
// })

//Trying to server up the expresshandlebars file
app.get('/', (req, res) => {
    res.render('form')
})

app.use('/', router);


const start = async () => {
    try {
        await connectDB(process.env.mongo_uri)
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()