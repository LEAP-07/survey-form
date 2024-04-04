require('dotenv').config()
const PORT = process.env.PORT;
const path = require('path');
const express = require('express');
const ejsMate = require('ejs-mate');
const app = express();
const bodyParser = require('body-parser');
const formDataRoutes = require('./routes/formDataRoutes')
const homeDataRoutes = require('./routes/homeDataRoutes')
const ExpressError = require('./utils/ExpressError')
//app configs
app.engine('ejs' , ejsMate);
app.set('views' , path.join(__dirname, 'views'))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname , 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/survey', formDataRoutes);
app.use('/' , homeDataRoutes);

//404 route
app.all('*', (req,res,next)=>{
    next(new ExpressError("Page not found", 404))
})

app.use( (err,req,res,next)=>{
    const {statusCode = 500} = err;
    if(!err.message) err.message = "Oh no, something went wrong";
    res.status(statusCode).render('error/error' , {err});
})

app.listen(PORT , ()=>{
    console.log("Application ready at port :", PORT)
})