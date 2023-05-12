const mongoose=require('mongoose')

const things=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide name"]
    },
    done:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        default:"Description"
    }
})

module.exports=mongoose.model("tasks",things)