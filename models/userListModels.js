'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String,
        required: 'Please enter'
    },
    last_name: {
        type: String,
        required: 'Please enter'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', 'UserSchema');