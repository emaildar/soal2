var router = require("express").Router();
var os = require("os");
var mongoose = require("mongoose");
var myCpu = require("../models/myCpu");

var url = 'mongodb://darlyn:1234@localhost:27017/dataCPU'

mongoose.connect(url, { useNewUrlParser: true }, () => {
    console.log("Mongoose Terhubung!");
});
 

router.post("/data", (req, res) => {
    new myCpu({
        namacpu: os.hostname(),
        tipe: os.type(),
        platform: os.platform(),
        rilis: os.release(),
        ramSisa: os.freemem(),
        ramTotal: os.totalmem()
    }).save().then((x) => {
        console.log(x);
        res.send("Data Terkirim"); //kirim dengan POSTMAN tanpa data
        console.log("Data Terkirim");
    });
});

router.get("/data", (req, res) => {
    myCpu.find((err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.send(data);
            console.log(data);
        }
    })
});

module.exports = router;