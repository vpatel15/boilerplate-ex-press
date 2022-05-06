let express = require('express');
let app = express();

console.log('Hello World');

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
  if(process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": "HELLO JSON"}); 
  } else {
    res.json({"message": "Hello json"});
  }
})



































 module.exports = app;
