var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SchemaMyCpu = new Schema({
    namacpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
})

var myCpu = mongoose.model('data', SchemaMyCpu);

module.exports = myCpu;