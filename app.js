const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

const app = express()
const port = app.listen(process.env.PORT || 5050);

app.use(express.static(`${__dirname}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.set('views', './views');
app.set('view engine', 'ejs');


const home = require("./routes/index");

app.post("/snippets", home);
app.post("/search", home);
// app.post("/db", home);

app.get('/', function (req, res) {
  res.render(__dirname + "/views/home");

})



app.listen(port, function () {
  console.log('start! express server');
  console.log(__dirname);
})
