const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const alert = require("alert-node");
const path = require("path");
const { log } = require("console");
const url = "mongodb+srv://khizarali:khizar24@cluster0.hod0c.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(express.json());
app.use(cors());

(async function database() {
  const con = await mongodb.MongoClient.connect(url);
  const db = await con.db("user");
  app.post("/registerdone", (req, res) => {
    const { name, user, email, password } = req.body;
    const data = { name, user, email, password };
    const data1 = { email };
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
    
  });
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "build")));
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });

  app.listen(3000);
})();
