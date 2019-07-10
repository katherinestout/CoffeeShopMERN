const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeSchema =  new Schema ({
    coffeetype:{
        type: String
    }
});

const Coffee = mongoose.model('coffee', CoffeeSchema)

module.exports = Coffee;