const express = require("express");
const bodyparser = require("body-parser");
// const Users=require('./config');

//for mongo
const MongoClient = require('mongodb').MongoClient;

// const mongoose = require("mongoose");

const uri = "mongodb+srv://surajjbhardwajj:<password>@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";


// mongoose.connect("mongodb://127.0.1:27017/admin", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// });

// const Schema=mongoose.Schema;

// const contactSchema = new Schema({
//   name: String,
//   email: String,
//   subject: String,
//   messege: String,
// }); 

// const Contact = mongoose.model("Contact", contactSchema);



const app = express();
let alert = require('alert'); 


//important uri
// const uri ="mongodb+srv://surajjbhardwajj:Suraj@jyotimongo@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });


app.set("view engine", "ejs");

app.use(express.static("public"));

//allow body parser to use it
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //send a messege to your port user
  res.render("home");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.post("/contact", function (req, res) {
   var contact = {
    name : req.body.name,
    email : req.body.email,
    subject : req.body.subject,
    messege : req.body.messege
   };

  // if(contact.name === "" || contact.messege === "") {
  //   res.send("please fill the data properly");
  // }

  console.log(contact);
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }
    const collection = client.db("test").collection("CONTACT");
    collection.insertOne(contact, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      alert('thank you we will contact you very soon');
       res.redirect("/");
      client.close();

    });
// app.post('/saveData', (req, res) => {
 
//     });
  
});
   
  // contact.save(function (err) {
  //   if (err) {
  //       console.log("error is found");
  //       res.redirect("/contact");
  //   } else {
  //       res.redirect("/");
  //   }
});

  // res.redirect("/");

// });
  // new Collection('clusterO').insert(data,(res,err)=>{
  //     if(err){
  //         console.log("error found")
  //     }else{
  //         res.send("thank you")
  //         console.log("thankss");
  //     }
  // })

  
// //mongo connection
//  client.connect((err) => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object

//     var dbo = db.db("mydb");

//     dbo.collection("cluster0").insertOne(data, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
  
//     console.log("database connected successfully");
//     client.close();
//   });
//   res.redirect("/");


// app.post("/contact", async(req,res) => {

//     const data=req.body;
//     await Users.add(data)
//     res.send({msg: "added data"});

// })

app.get("/bookrentt", function (req, res) {
  res.render("bookrentt");
});

app.get("/view", function (req, res) {
  res.render("view");
});

// app.get("/contact", function (req, res) {
//   res.send("how are you !! ");
// });

app.post("/", function (req, res) {
  res.redirect("/");
});

app.listen(5000, function () {
  console.log("your server is ready to request at 5000 ");
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://surajjbhardwajj:<password>@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// }); 

//const uri = "mongodb+srv://surajjbhardwajj:Suraj@jyotimongo@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";


// db.Collection.insertOne({
//   name: "suraj",
//   email: "pandeyyysuraj@gmail.com",
//   subject: "for create a database using mongo",
//   messege: "yes..! I'll do it definately",
// });
