const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http").createServer(app);

//router middlewares
const location = require("./routes/sendMail.js");

// app.set("view engine", "ejs");
// app.use(require("express").static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

///////////
app.use("/api", location);

app.get("/", (req, res) => {
   res.send('Hello world !')
})

const port = process.env.PORT || 4000;
http.listen(port, () => {
   console.log("server ready on 4000");
});