const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const app = express();
require('dotenv').config({ path: './config.env' })
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 5000; 

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

// app.use(cors({
//     origin:`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fa0df23622c79d30ff89e570705e63b0`,
//     credentials: true,
//     optionSuccessStatus: 20
// }))

app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partial_path)

app.use(express.static(static_path)) ;
  
app.get("/" , (req , res) => {
    res.render('index')
} );

app.get("/about" , (req , res) => {
    res.render("about")
} );
app.get("/weather" , (req , res) => {
    res.render("weather")
} );

app.get("*" , (req , res) => {
    res.render('404err' ,{
        errmsg : 'Opps, 404 error occurred'
    });
});

app.listen(port , () => {
    console.log(`port is running at ${port}`);
});