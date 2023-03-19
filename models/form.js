const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name : {
        type : 'string'
    },
    email : {
        type : 'string'
    },
    message : {
        type : 'string'
    },
    createdAt : { 
        type : Date, 
        default: Date.now }
})

module.exports = mongoose.model('Form', formSchema)


