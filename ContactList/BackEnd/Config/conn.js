const mongoose = require("mongoose");

//connection to database
const conndb = async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://raed:raed@cluster0.xzobaav.mongodb.net/?retryWrites=true&w=majority"
          );
          console.log("We are connected to the world");
    }catch(err){
        console.log(err);
    }
 
};

module.exports = conndb
