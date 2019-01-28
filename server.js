var express = require('express')
var app = express();
var mongoRoute = require('./router/router')

app.use(mongoRoute)

app.get('/', (req, res)=>{
    res.send('<h1>Tes Express & Mongoose</h1>')
})

app.listen(1234, ()=>{
    console.log('server aktif di port 1234')
})