const express=require("express");
const bodyparser=require("body-parser");
const app=express();

app.use(express.static("public"));

//allow body parser to use it
app.use(bodyparser.urlencoded({extended : true}));

app.get("/",function(req,res) {

    //send a messege to your port user
     res.sendFile(__dirname+"/index.html");
    
})


app.get("/contact.html",function (req,res) {

    res.sendFile(__dirname+"/contact.html")
    
})


 

app.get("/contact",function (req,res) {

    res.send("how are you !! ");
    
})

 

app.listen(3000,function(){

 
console.log("your server is ready to request");

})