const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")
const isNumber=require("validator/lib/isNumeric")
const Schema=mongoose.Schema
const userDB=new Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"],
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "please enter proper email format"
            }
        }

    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    role:{
        type:String,
        required:[true,"role is required"]
    },
    address:{
        type :String,
        required:[true,"address is required"]
    },
    city:{
        type:String,
        required:[true,"city is required"]
        },
    state:{
        type:String,
        required:[true,"state is required"]
    },
     zipcode :{
        type:String,
        validate:{
            validator:function(value){
              return isNumber(value)
            },
            message:function(){
                return "Zip code must be a number"
            }
        },
        required:[true,"zipcode is required"]
    }
})
const user=mongoose.model("user",userDB)

module.exports=user