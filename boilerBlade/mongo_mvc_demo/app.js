require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express')
var cors = require('cors')
// local module
const {connect} = require('./config/dbConnect');
const Router = require('./router');


const app = express()

const POST = process.env.POST || 5001

app.use(express.static(__dirname + '/build'));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect();

app.use('/', Router);

app.listen(POST, () => console.log("run with mongoo on post " + POST))
