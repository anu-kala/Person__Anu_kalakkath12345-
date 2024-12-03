const express=require("express");
const router=express.Router();
const menuItem=require("../models/menu");


router.post("/",async(req,res)=>{

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


router.get("/",async(req,res)=>{

    try{
        const data=await menuItem.find();
       
        console.log('data saved');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }

})
module.exports=router;