const express=require("express")
const { getSingle,edit,add,getAll,remove } = require("../controller/functions")
const router=express.Router()

router.route('/').get(getAll).post(add)
router.route('/:id').patch(edit).delete(remove).get(getSingle)

module.exports=router