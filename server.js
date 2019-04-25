const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userListModels');
const bodyParser = require('bodyparser');
const routes = require('./routes/userListRoutes');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Usersdb');

app.use(bodyParser.urlencode({ extends: true }));
app.use(bodyParser.json());

routes(app);


const app = express();
const port = process.env.port || 3000;



app.listen(port, () => {
    console.log("Server is running on port: " + port);
});