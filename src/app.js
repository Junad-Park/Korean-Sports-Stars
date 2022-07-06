const express = require('express');

const app = express()
const port = app.listen(process.env.PORT || 5050);

app.use(express.static(`${__dirname}`));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/search.html");

})

app.listen(port, function () {
  console.log('start! express server');
  console.log(__dirname);
})
