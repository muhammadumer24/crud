const things=require('../model/schema')

const getAll=async (req,res)=>{
    try {
        let task=await things.find({})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({msg:error})
    }
}
const remove=async (req,res)=>{
    try{
        let task=await things.findOneAndDelete({_id:req.params.id})
        res.status(200).json({task})
    }catch(error){
        res.status(400).json({msg:error})
    }
}
const add=async (req,res)=>{
    try {
        const task=await things.create(req.body)
        res.status(201).json({task}) 
    } catch (error) {
        console.log(req.body)
        res.status(400).json({msg:error})
    }
}
const edit=async (req,res)=>{
    try{
        let p=await things.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({p})
    }catch(error){
        res.status(400).json({msg:error})
    }
}
const getSingle=async (req,res)=>{
    try{
        let p=await things.findOne({_id:req.params.id})
        res.status(200).json({p})
    }catch(error){
        res.status(400).json({msg:error})
    }
}

module.exports={
    getSingle,edit,add,getAll,remove
}