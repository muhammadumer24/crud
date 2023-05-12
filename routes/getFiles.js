const {indexFile,task}=require('../controller/html')
const express=require('express')
const router=express.Router()

router.get('/',indexFile)
router.get('/task',task)

module.exports=router