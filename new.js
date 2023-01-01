const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const uri = "mongodb+srv://surajjbhardwajj:Suraj%40jyotimongo@cluster0.walpukq.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/saveData" method="POST">
      <input type="text" name="name" placeholder="Enter your name">
      <button type="submit">Save</button>
    </form>
  `);
});

app.post('/saveData', (req, res) => {
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }
    const collection = client.db("test").collection("users");
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      res.send('Data saved successfully!');
      client.close();
    });
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));



// {
//     "fields": [
//       {
//         "name": "_id",
//         "path": "_id",
//         "count": 2,
//         "types": [
//           {
//             "name": "ObjectID",
//             "bsonType": "ObjectID",
//             "path": "_id",
//             "count": 2,
//             "values": [
//               "63b16599191dba065bfef026",
//               "6394a7afa81e41cb0d17a3a3"
//             ],
//             "total_count": 0,
//             "probability": 1,
//             "unique": 2,
//             "has_duplicates": false
//           }
//         ],
//         "total_count": 2,
//         "type": "ObjectID",
//         "has_duplicates": false,
//         "probability": 1
//       },
//       {
//         "name": "\"name\"",
//         "path": "\"name\"",
//         "count": 1,
//         "types": [
//           {
//             "name": "String",
//             "bsonType": "String",
//             "path": "\"name\"",
//             "count": 1,
//             "values": [
//               "surajj"
//             ],
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           },
//           {
//             "name": "Undefined",
//             "type": "Undefined",
//             "path": "\"name\"",
//             "count": 1,
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           }
//         ],
//         "total_count": 2,
//         "type": [
//           "String",
//           "Undefined"
//         ],
//         "has_duplicates": false,
//         "probability": 0.5
//       },
//       {
//         "name": "\"roll no\"",
//         "path": "\"roll no\"",
//         "count": 1,
//         "types": [
//           {
//             "name": "String",
//             "bsonType": "String",
//             "path": "\"roll no\"",
//             "count": 1,
//             "values": [
//               "2124404"
//             ],
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           },
//           {
//             "name": "Undefined",
//             "type": "Undefined",
//             "path": "\"roll no\"",
//             "count": 1,
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           }
//         ],
//         "total_count": 2,
//         "type": [
//           "String",
//           "Undefined"
//         ],
//         "has_duplicates": false,
//         "probability": 0.5
//       },
//       {
//         "name": "\"school name\"",
//         "path": "\"school name\"",
//         "count": 1,
//         "types": [
//           {
//             "name": "String",
//             "bsonType": "String",
//             "path": "\"school name\"",
//             "count": 1,
//             "values": [
//               "ptu kapurthala"
//             ],
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           },
//           {
//             "name": "Undefined",
//             "type": "Undefined",
//             "path": "\"school name\"",
//             "count": 1,
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           }
//         ],
//         "total_count": 2,
//         "type": [
//           "String",
//           "Undefined"
//         ],
//         "has_duplicates": false,
//         "probability": 0.5
//       },
//       {
//         "name": "born place",
//         "path": "born place",
//         "count": 1,
//         "types": [
//           {
//             "name": "String",
//             "bsonType": "String",
//             "path": "born place",
//             "count": 1,
//             "values": [
//               "mumbai"
//             ],
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           },
//           {
//             "name": "Undefined",
//             "type": "Undefined",
//             "path": "born place",
//             "count": 1,
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           }
//         ],
//         "total_count": 2,
//         "type": [
//           "String",
//           "Undefined"
//         ],
//         "has_duplicates": false,
//         "probability": 0.5
//       },
//       {
//         "name": "location",
//         "path": "location",
//         "count": 1,
//         "types": [
//           {
//             "name": "String",
//             "bsonType": "String",
//             "path": "location",
//             "count": 1,
//             "values": [
//               "patna"
//             ],
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           },
//           {
//             "name": "Undefined",
//             "type": "Undefined",
//             "path": "location",
//             "count": 1,
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           }
//         ],
//         "total_count": 2,
//         "type": [
//           "String",
//           "Undefined"
//         ],
//         "has_duplicates": false,
//         "probability": 0.5
//       },
//       {
//         "name": "name",
//         "path": "name",
//         "count": 1,
//         "types": [
//           {
//             "name": "String",
//             "bsonType": "String",
//             "path": "name",
//             "count": 1,
//             "values": [
//               "surajj"
//             ],
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           },
//           {
//             "name": "Undefined",
//             "type": "Undefined",
//             "path": "name",
//             "count": 1,
//             "total_count": 0,
//             "probability": 0.5,
//             "unique": 1,
//             "has_duplicates": false
//           }
//         ],
//         "total_count": 2,
//         "type": [
//           "String",
//           "Undefined"
//         ],
//         "has_duplicates": false,
//         "probability": 0.5
//       }
//     ],
//     "count": 2
//   }
