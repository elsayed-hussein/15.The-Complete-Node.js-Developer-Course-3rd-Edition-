// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);

    // // #################* find *#################
    // db.collection("users")
    //   .find({ age: 24 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       console.log("can't find users");
    //     }
    //     console.log(users);
    //   });
    // //   find the count
    // db.collection("users")
    //   .find({ age: 24 })
    //   .count((error, count) => {
    //     if (error) {
    //       console.log("can't find users");
    //     }
    //     console.log(count);
    //   });
    // // #################* findOne by id *#################
    // db.collection("users").findOne(
    //   { _id: new ObjectId("619be80e559b7291498bb222") },
    //   (error, user) => {
    //     if (error) {
    //       console.log("can't find user");
    //     }
    //     console.log(user);
    //   }
    // );
    // // #################* findOne *#################
    // db.collection("users").findOne({ name: "elsayed" }, (error, user) => {
    //   if (error) {
    //     console.log("can't find user");
    //   }
    //   console.log(user);
    // });

    // // #################* insertMany *#################
    // db.collection("users").insertMany(
    //   [
    //     { name: "amr", age: 23 },
    //     { name: "Andrew", age: 24 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert data");
    //     }
    //     console.log(result);
    //   }
    // );

    // //  #################* insertOne *#################
    //     db.collection("users").insertOne(
    //       {
    //         name: "elsayed",
    //         age: 34,
    //       },
    //       (error, result) => {
    //         if (error) {
    //           return console.log("Unable to insert into database");
    //         }
    //         console.log(result);
    //       }
    //     );
  }
);
