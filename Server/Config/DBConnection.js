const mongoose=require("mongoose")
const Connect=()=>{

    mongoose.connect("mongodb://0.0.0.0:27017/ShoppingCart")
                .then(()=>{
                    console.log("Connected to database")
                })
                .catch(()=>{
                    console.log("not Connected to database")
                })
}
module.exports=Connect