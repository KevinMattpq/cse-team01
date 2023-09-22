var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

const router = express.Router();

app.use('/', require('./routes/server.js'));

app.listen(8080, () =>{
    console.log(`Server is running on port ${port}`);
})