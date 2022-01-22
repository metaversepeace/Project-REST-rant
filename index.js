require('dotenv').config();

//Require epress to start using it.
const express = require('express');

//Initializing the express app.
const app = express();

//Express Settings; Middleware; Defining the view engine we'll be using
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Making the controllers
app.use('/places', require('./controllers/places'));
app.use(express.urlencoded({ extended: true }));

//Making the homepage route
app.get('/',(req,res) => {
    console.log('We did it!')
    res.render('HOME')
});

//Making a wildcard route
app.get('*', (req, res) => {
    res.render('error404')
});

//Opening the server to listen for connections
app.listen(process.env.PORT, function(){
    console.log('This port works')
});


