const path=require('path')
const indexFile=(req,res)=>{
    res.status(200).sendFile(path.resolve("./public/html/index.html"))
}
const task=(req,res)=>{
    res.status(200).sendFile(path.resolve('./public/html/task.html'))
}
module.exports={indexFile,task}