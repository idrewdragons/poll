const express =require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(5000, () => console.log("Server Running..."));

const pollData = require('./data.jason');
app.get("/poll", function (rep, res){
    res.send(pollData);
});

app.post("/poll", function (req, res){
    if (req.body) {
        fs.writeFileSync("data.jason", JSON.stringify(req.body));
        res.send({
            message: "Data Saved",
        });
    } else {
        res.status(400).send({
            message: "Error No Data"
        });
    }
});