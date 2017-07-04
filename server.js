const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();
const port  =process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine',  'hbs');

 app.use((req, res, next)  => {
   var now = new Date().toString();
   var log = `${now}: ${req.method}  ${req.url}` ;
   console.log(log);
   fs.appendFile('server.log',  log + '\n' , (error)=>{
     if (error){
     cosnole.log('Unable to fetch data');
   }
   });
   next();
 });
  //  app.use((req, res, next) => {
  //    res.render('maintenance.hbs');
  //  });
app.use(express.static(__dirname + '/public'));

app.get('/',  (req, res) => {
res.render('home.hbs', {
  pageTitle: 'Home Page of Home',
    welcome: 'WelCome to my site'
  });
   });
app.get('/about',  (req, res)  => {
  res.render('about.hbs', {
  pageTitle: 'Home Page of About',
    welcome: 'WelCome to my site About'
  });
  });

   hbs.registerHelper('getCurrentYear',  () => {
      return new Date().getFullYear();
   });
   hbs.registerHelper('screamit', ( ) => {
     return text.toUpperCase();
   });
app.get('/bad', (req, res) => {
  res.send({
    errorMessgae: 'Unable to handle request'
  });
});
app.listen(port, () => {
  console.log(`Server is strated on ${port}`);
} );
