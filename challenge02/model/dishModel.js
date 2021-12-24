const { Schema, model } = require('mongoose');

var dishSchema = Schema({
    name: {
        type: 'String',
        require: true,
        unique: true,
        trim: true
    },
    price: {
        type: 'Number',
        required: true,
        trim: true
    },
    restaurant:{
        type: 'String',
        required: true,
        trim: true
    }
});

module.exports = model('Dish', dishSchema);