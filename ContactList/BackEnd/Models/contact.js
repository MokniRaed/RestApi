const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    }

})

module.exports = mongoose.model("contact",contactSchema);