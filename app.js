const PORT = process.env.PORT || 3000;

const path = require('path');
const express = require('express');
const ejsMate = require('ejs-mate');
const app = express();
const bodyParser = require('body-parser');
const formDataRoutes = require('./routes/formDataRoutes')
//app configs
app.engine('ejs' , ejsMate);
app.set('views' , path.join(__dirname, 'views'))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname , 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/', formDataRoutes);


app.listen(PORT , ()=>{
    console.log("Application ready at port :", PORT)
})