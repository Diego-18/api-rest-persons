const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

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