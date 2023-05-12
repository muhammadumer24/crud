//imports
const express=require('express')
const app=express()
const task=require('./routes/endPoints')
const file=require('./routes/getFiles')
const cntDB=require('./db/connect')
require('dotenv').config()

//middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use('/api',task)
app.use('/',file)

const start=async (url)=>{
try {
    await cntDB(url)
    app.listen(5724,console.log("The app is running in port 5724"))

} catch (error) {
    console.log(error)
}
}

start(process.env.MONGO_URI)