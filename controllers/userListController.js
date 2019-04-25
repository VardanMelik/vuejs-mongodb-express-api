'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.list_all_users = (req, res) => {
    User.find({}, (err, user) => {
        if (err)
            res.send(err);
        res.json(user);
    });
}

exports.create_a_user = (req, res) => {
    let new_user = new User(req.body);
    new_user.save((err, user) => {
        if (err)
            res.send()
    });
}

exports.read_a_users = (req, res) => {

    User.findById({ req.params.userId }, (err, user) => {
        if (err)
            res.send(err);
        res.json(user);
    });
};