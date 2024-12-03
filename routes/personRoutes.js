const express=require("express");
const router=express.Router();
const Person=require("../models/person");

router.post("/",async(req,res)=>{

    try{
        const data=req.body;
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})
router.get("/",async(req,res)=>{

    try{
        const data=await Person.find();
       
        console.log('data saved');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }

})
router.get("/:workType",async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType == "chef" ||workType == "manager"||workType == "waiter"){
            const response=await Person.find({work:workType});
            console.log('data saved');
            res.status(200).json(response);



        }
        else{
            res.status(404).json({error:"Invalid work type"});
        }
        


    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
   
})

router.put("/:id",async(req,res)=>{

    const personID=req.params.id;
    const updatedPersonData=req.body;

    try {
      const response=  await Person.findByIdAndUpdate(personID,updatedPersonData, {
        new:true,//Return the updated document
        runValidators:true,//Run Mongoose validation
        });
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
       
        console.log('data updated');
        res.status(200).json(response)

   } 
   catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"});
}
});
   
router.delete('/:id', async (req, res) => {
    const personID=req.params.id;
    try {
        const response=  await Person.findByIdAndDelete(personID);
            if(!response){
                return res.status(404).json({error:'Person not found'})
            }
          
         
        
         
          console.log('data deleted');
          res.status(200).json({message:"Data Deleted"})
  
     } 
     catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
  
     }

});


module.exports=router;