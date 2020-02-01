/*const lodash = require('lodash')
const greeting = 'hello world';



console.log(lodash.startCase(greeting));
const express = require('express')
const user = require ('./app');

const contacts = require('./contacts')
function readContacts(req,res){
  res.send(contacts);
}



function readUser(req,res) {
  res.send(user);
}*/





/*const app = express()
const port = 3000
app.get('/', (req, res) => res.send('hello world'))
app.get('/', rootpath);
app.get('/contacts',readContacts);
app.get('/contacts/1', (req, res) => {
  res.send(contacts[0])
});
app.get ('/user',readUser);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))*/
//index.js
//index.js
const express = require('express')
const app = express();


const contactsRouter = require('./routes/contacts');
const homeRouter = require('./routes/home');
const student1Router = require('./routes/student1')
const student2Router = require('./routes/student2')

app.use('/contact', contactsRouter);
app.use("/student1", student1Router);
app.use('/home', homeRouter);
app.use('/student2', student2Router);

app.listen(3000, () => {console.log('server started')} )

/*const express = require('express')
//const app = express();
const user = require ('./app');
app.get('/app', readUser);
// app.use('/', homeRouter);
app.get('/app', (req, res) => {
  res.send(bill)
app.listen(3000, () => {console.log('server started')} )*/

//hello world
/*const express = require('express');
const app = express();
const port = 3000
//call back
//app.get ('/',function(request,response){
  //response.send("hello.");

//});
app.get('/', (req, res) => res.send('hello world'))//arrow
app.listen(3000);*/

//ROUTING
//http://localhost:80
/*const express = require ('express');
const app = express ();
app.get("/", function(req,res){
res.send("welcome to expressjs class");


});
app.get("/courses", function(req,res){
res.send("welcome to courses");


});
app.listen(80)*/

/*const express = require ('express');
const app = express ()
const mylogger = function(req,res,next){
  console.log('LOGGED')
  next()
}
app.use(mylogger)
app.get('/', function(req,res){
res.send("welcome to courses")});
app.listen(3000)*/

/*var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.listen(3000);*/

/*var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000);*/
