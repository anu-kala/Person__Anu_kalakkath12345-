const mongoose=require("mongoose");
require('dotenv').config();


//Define the MongoDB connection URL

// const mongoURL="mongodb://127.0.0.1:27017/hotels"

const mongoURL=process.env.MONGO_URL;




//set up MongoDb connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection


const db=mongoose.connection;

//Define event listerners for database connection

db.on('connected',()=>{
  console.log("Connected to MongoDB server");
})

db.on('error',(err)=>{
    console.log("Connected error",err);
  })
  
db.on('disconnected',()=>{
    console.log("MongoDB disconnected");
  });


//Export database connection
module.exports=db;
