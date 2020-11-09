//modules
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const {db} = require('./db');

//app
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../public'))); //static path

//MiddleWare
app.use(morgan('dev')); //logging
app.use(bodyParser.json()); //req.body parsing
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use('/api', require('./api'))


//serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public'));
})

//Error Handlers
//500
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})


//listen for requests
const PORT = process.env.PORT || 1337; // this can be very useful if you deploy to Heroku!

const startServer = async () =>{
  try{
    await db.sync();
    app.listen(PORT, () => {
      console.log('beep, beep, beep');
      console.log(`server set to recieve on port ${PORT}`);
    });
  } catch (err) {
    console.log('Uh oh. Something done happened during server start up', err);
  }
}

startServer();