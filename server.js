const express=require("express");
const bodyparser=require("body-parser");
 
const app=express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

//allow body parser to use it
app.use(bodyparser.urlencoded({extended : true}));

app.get("/",function(req,res) {

    //send a messege to your port user
    res.render('index');
    

    
})

app.get("/contact",function (req,res) {

    res.render("contact");
    
})

app.get("/bookrent",function (req,res) {

    res.render("bookrentt");
    
})

app.get("/view",function (req,res) {

    res.render("view");
    
})


 

app.get("/contact",function (req,res) {

    res.send("how are you !! ");
    
})


app.post("/",function (req,res) {

    res.redirect("/");
    
})
 

app.listen(3000,function(){

 
console.log("your server is ready to request");

})