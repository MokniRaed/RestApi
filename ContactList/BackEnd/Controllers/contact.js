const contactSchema = require("../Models/contact")

exports.welcome = (req,res)=>{
    try{
        res.send("Welcome home ! 🏡")
    }catch(err){
        console.log(err);
    }

}

exports.addContact = async (req,res)=>{
    try{
        const newContact = new contactSchema(req.body)
        await newContact.save();
        res.status(200).send({msg:"the new cotact has been added successfully",newContact})
    }catch(err){
        res.status(500).send("there is a problem in adding ")
        console.log(err);
    }

}

exports.getAllContacts = async (req,res) =>{
    try{
        const contacts = await contactSchema.find()
        res.status(200).send(contacts)

    }catch(err){
        res.status(5000).send("error in get all")
        console.log(err);
    }
}