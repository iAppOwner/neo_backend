const mongoose = require("mongoose");


//Verify Connection
const connection = mongoose.connection;

connection.on("connected",()=>{
console.log("MODAL CONNECTED")
  });

connection.on("error",()=>{
console.log("MODAL CONNECTION ERROR")
});

const postSchema =  new mongoose.Schema({
  "userId": {
    "type" : Number,
  },
"id": {
  "type" : Number,
},
"title": {
    "type" : String,
  },
  "body" : {
    "type" : String,
  }
});

const blogModal = mongoose.model("post",postSchema);

module.exports = blogModal;
