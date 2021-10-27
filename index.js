const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const ValidColors = require("./the-balloon-shop");
const pg = require("pg");
const Pool = pg.Pool;

// which db connection to use
const connectionString =
	process.env.DATABASE_URL ||
	"postgres://gxuzezafscjmpi:bf8b1f842ea13c82b90c38d31def3957b829880bf6be04de37474e760a330337@ec2-3-213-41-172.compute-1.amazonaws.com:5432/dcqibuj671bvip"
	const pool = new Pool({
	connectionString,
	ssl: { rejectUnauthorized: false},
});

const app = express();
const validColors = ValidColors(pool);

// app.use(express.static("public"));
app.use(express.static("views"));

const handlebarSetup = exphbs({
	partialsDir: "./views/partials",
	viewPath: "./views",
	layoutsDir: "./views/layouts",
});
app.engine("handlebars", handlebarSetup);
app.set("view engine", "handlebars");

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

app.get("/", (req, res)=>{
	res.render('index')}
);
app.post("/balloons", );

const PORT = process.env.PORT || 2020;
app.listen(PORT, ()=>{ 
    console.log('This app is now listening on PORT: ', PORT)
})