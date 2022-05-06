let express = require('express');
let app = express();

console.log('Hello World');

// Add test middleware to print method, path and ip
app.use(function(req, res, next) {
  console.log(req.method.toUpperCase() + ' ' + req.path + ' - ' + req.ip);
  next();
})

// app.get('/', function(req, res) {
//   res.send('Hello Express');
// })

// Serve index file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
})

// Serve static assests like css js etc
app.use('/public', express.static(__dirname + '/public'))

// Serve Json from REST API request
app.use('/json', function(req, res) {
  var response = 'Hello json';
  if(process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": response.toUpperCase()}); 
  } else {
    res.json({"message": response});
  }
})



































 module.exports = app;
