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
    var p_id = req.body.p_id
    var p_name = req.body.p_name
    var p_cost = req.body.p_cost
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else
        {
            let db = conn.db("nodedemo")
            let obj = {"p_name":p_name,"p_cost":p_cost}
            db.collection("products").updateOne({"p_id":p_id},{$set:obj},(err,result)=>{
                if(err)
                    res.json({'update':'failed'})
                else
                {
                    console.log("Data updated")
                    res.json({'update':'success'})
                }
            })
        }
    })
})


//export router
module.exports = router