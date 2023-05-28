const express=require("express")
const routes=express.Router()
const Auth=require("../App/Middleware/Auth")
const Usercontroller=require("../App/Controller/UserController")


routes.post("/user/login",Usercontroller.login)
routes.get("/users",Usercontroller.list)

routes.post("/user/register", Auth.register,Usercontroller.register)
routes.get("/user/:role",Usercontroller.findbyrole)





module.exports=routes