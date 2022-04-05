const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

// Origins
const whiteList = ['http://localhost:3000', 'http://localhost:3001'];

// proxy
// app.use(cors());  // enable cors for all origins
app.use(cors({
    origin: whiteList
}));

//settings
app.set('port', process.env.PORT || 5000);

//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/Persons', require('./src/routes/Persons'));

//starting the server
app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});