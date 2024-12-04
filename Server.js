const express=require("express");
const app=express();
const db=require("./db");
const Person=require("./models/person");
const menuItem=require("./models/menu")
const bodyParser=require("body-parser");
app.use(bodyParser.json());//req.body
const personRoutes=require("./routes/personRoutes");
const menuRoutes=require("./routes/menuRoutes");
require('dotenv').config();



// app.get("/",function(req,res){
//     res.send("Welcome to my hotel..How Can I help you?We have list of Menus")
// })

// app.post("/person",async(req,res)=>{

//     try{
//         const data=req.body;
//         const newPerson=new Person(data);
//         const response=await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"Internal server error"});
//     }
// })
app.post("/menu",async(req,res)=>{

    try{
        const data=req.body;
        const newMenuItem=new menuItem(data);
        const response=await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})

    // 
    // 
    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //         console.log("Error",error);
    //         res.status(500).json({error:'Internal server error'})
    //     }
    //     else{
    //         console.log("data saved sucessfully");
    //         res.status(200).json(savedPerson);
    //     }
    // })

//   app.get("/person",async(req,res)=>{

//         try{
//             const data=Person.find();
           
//             console.log('data saved');
//             res.status(200).json(data);
//         }
//         catch(err){
//             console.log(err);
//             res.status(500).json({error:"Internal server error"});
//         }

// })
// app.get("/menu",async(req,res)=>{

//     try{
//         const data=Person.find();
       
//         console.log('data saved');
//         res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"Internal server error"});
//     }

// })

app.use("/person",personRoutes);
app.use("/menu",menuRoutes);

// app.get("/person/:workType",async(req,res)=>{
//     try{
//         const workType=req.params.workType;
//         if(workType == "chef" ||workType == "manager"||workType == "waiter"){
//             const response=await Person.find({work:workType});
//             console.log('data saved');
//             res.status(200).json(response);



//         }
//         else{
//             res.status(404).json({error:"Invalid work type"});
//         }
        


//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"Internal server error"});
//     }
   
// })

const PORT=process.env.PORT || 5000;
app.listen(5000,()=>{
    console.log("Server is running")
})