const express = require("express");
const bodyParser = require("body-parser");
const JSAlert = require("js-alert");

const app = express();

let emails=[];
let passwords=[];
let firstNames=[];
let lastNames=[];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

 app.get("/", function (req,res) {
 	res.sendFile(__dirname + "/home.html");
 });


app.get("/login.html",function (req,res) {
	res.sendFile(__dirname + "/login.html");
});

app.get("/signup.html",function (req,res) {
	res.sendFile(__dirname + "/signup.html");
});

app.post("/signup.html",function (req,res) {

	var a = req.body.password;
	var b= req.body.password2;

	if (a==b) {

	emails.push(req.body.email);
	passwords.push(req.body.password);
	firstNames.push(req.body.fName);
	lastNames.push(req.body.lName);
} else {
	JSAlert.alert("Please check your input details");
}

	res.redirect("/profile.html");
})

app.get("/guide.pdf",function (req,res) {
	res.sendFile(__dirname + "/guide.pdf");
});

app.get("/About.html",function (req,res) {
	res.sendFile(__dirname + "/About.html");
});

app.get("/Catalog2.html",function (req,res) {
	res.sendFile(__dirname + "/Catalog2.html");
});

app.get("/About.html",function (req,res) {
	res.sendFile(__dirname + "/About.html");
});

app.get("/Contact_Us.html",function (req,res) {
	res.sendFile(__dirname + "/Contact_Us.html");
});

app.get("/assistant.html",function (req,res) {
	res.sendFile(__dirname + "/assistant.html");
});

app.get("/profile.html",function (req,res) {
	res.render("login", {name: firstNames + lastNames, email: emails,})
});


 app.listen(3000,function () {
 	console.log("server online");
 })