const mongoose=require('mongoose')

const cntDB=(url)=>{
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports=cntDB