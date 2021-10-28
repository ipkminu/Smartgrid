const path = require('path')

const express = require('express')
const app = express()

//const routes = require("./routes")
app.use(function (req, res, next) {
    console.log('requête reçue');
    next();
})

app.use("/", express.static(path.join('./build')))

app.get("/", function (req, res) {
    res.redirect(200, '/index.html')
})
//app.use('/', routes)



module.exports = app;
