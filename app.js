require('dotenv').config()
const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes/form');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('./public'))
app.use(express.json());

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