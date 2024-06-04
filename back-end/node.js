const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const alert = require("alert-node");
const url = "mongodb://localhost:27017/user";
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());

(async function database() {
  const con = await mongodb.MongoClient.connect(url);
  const db = await con.db("user");
  app.post("/registerdone", (req, res) => {
    const { name, user, email, password } = req.body;
    const data = { name, user, email, password };
    const data1 = { email };
    let check1 = 0;
    const find = db.collection("data").find(data1);
    find.toArray().then((results) => {
      if (results.length === 0) {
        const insertion = db.collection("data").insertOne(data);
        alert("user registration done!!!");
      } else {
        alert("user already existing !!!");
      }
    });
  });

  app.post("/logindone", (req, res) => {
    const { email, password } = req.body;
    const data = { email, password };
    const login = db.collection("data").find(data);

    let x = login.forEach(
      (doc = (result) => {
        if (result) {
          alert("successfull !!!");
        }
      })
    );
    login.toArray().then((results) => {
      if (results.length === 0) {
        alert("Login failed !!!");
      }
    });
  });

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "front-end", "build")));
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
  });

  app.listen(3000);
})();
