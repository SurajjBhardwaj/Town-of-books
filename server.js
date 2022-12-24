const express=require("express");
const bodyparser=require("body-parser");
// const Users=require('./config');


//for mongo
const { MongoClient, ServerApiVersion } = require('mongodb');
//const User = require("./config");
 
 
const app=express();


//important uri
const uri = "mongodb+srv://surajjbhardwajj:Suraj@jyotimongo@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//mongo connection
client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      console.log("connected successfully");
      client.close();
    });

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

// app.post("/contact", async(req,res) => {

//     const data=req.body;
//     await Users.add(data)
//     res.send({msg: "added data"});

    
// })

app.get("/bookrentt",function (req,res) {

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
 

app.listen(5000,function(){

 
console.log("your server is ready to request");

})



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://surajjbhardwajj:<password>@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




//const uri = "mongodb+srv://surajjbhardwajj:Suraj@jyotimongo@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";