//import modules
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
//create rest object
let app = express()
//create port
let port = process.env.PORT || 8080
//set json as MIME type
app.use(bodyparser.json())
//client is not sending form data
app.use(bodyparser.urlencoded({extended:false}))
//enable cors
//CORS -> Cross Origine Resource Sharing
//enable communication among various ports
app.use(cors())
//import fetch, insert, update, delete modules
var fetch = require("./fetch/fetch")
var insert = require("./insert/insert")
var update = require("./update/update")
var remov = require("./delete/delete")
//use above modules
app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remov)
//assign port no
app.listen(port,()=>{
    console.log("Server listening port no 8080")
})
