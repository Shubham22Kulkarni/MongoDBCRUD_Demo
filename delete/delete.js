//import modules
const express = require("express")
let mongodb = require("mongodb")
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//import url
let url = require("../url")
//create rest api
router.post("/",(req,res)=>{
    var p_name = req.body.p_name
    var obj = {"p_name":p_name}
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else
        {
            let db = conn.db("nodedemo")
            db.collection("products").deleteOne(obj,(err,result)=>{
                if(err)
                    res.json({'delete':'failed'})
                else
                {
                    console.log("Data deleted")
                    res.json({'delete':'success'})
                }
            })
        }
    })
})


//export router
module.exports = router