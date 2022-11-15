const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
const mongoose = require('mongoose'); // import mongoose

const users = require('./models/users');
const plates = require('./models/plate');

const app = express();
mongoose.connect('mongodb://localhost:27017/DingoDB'); // connect with mongoose
// Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

app.post("/plat", (req, res) => {
  const x = new plates({
    plateName : req.body.plateName,
    price : req.body.price,
    description : req.body.description,
  });
  x.save();

  res.status(200).json({
    ok: "Plate Added",
  });

});

app.get("/plat",(req,res)=>{
  plates.findOne({_id: req.params.id}).then((foundObject)=>{
    if(foundObject){
      res.status(200).json({
        plates : foundObject,
      })
    }
  })
  // plates.find((err,docs)=>{
  //   if(err){
  //     console.log(err);
  //   }else{
  //     res.status(200).json({
  //       plates: docs,
  //     })
  //   }
  // })
})

app.delete("/plat/:id", (req, res) => {
  plates.deleteOne({_id:req.params.id}).then((data)=>{
    res.status(200).json({message:"deleted"})
  })
})

app.put("/plat/:id", (req, res) => {
  const plat = {
    _id: req.body._id,
    plateName : req.body.plateName,
    price : req.body.price,
    description : req.body.description,
  };
  plates.updateOne({_id:req.params.id},plat).then(()=>{
    res.status(200).json({
      message : "updated"
    })
  })
})

app.post("/chef", (req, res) => {
  console.log("posting from add-chef", req.body.firstName);
  console.log("posting from add-chef", req.body.lastName);
  res.status(200).json({
    ok: "request arrived and returned successfully",
  });
});

module.exports = app;
