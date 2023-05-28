const user=require("../Model/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const Usercontroller={}
Usercontroller.sayHi=(req,res)=>{
    res.json(" hello user")
}
Usercontroller.register=(req,res)=>{
    const body=req.user
    new user(body).save()
                    .then((data)=>{
                       res.json(data)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
                   
}
Usercontroller.list=(req,res)=>{
    user.find()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })

}
Usercontroller.login=(req,res)=>{
    const body=req.body
    user.findOne({email:body.email})
                .then((user)=>{
                    bcrypt.compare(body.password,user.password)
                            .then((response)=>{
                                if(response){
                                    const token={
                                        _id:user._id,
                                        name:user.name,
                                        email:user.email,
                                    }
                                   const gentoken= jwt.sign(token,"darshan123",{expiresIn:"5d"})
                                   res.json({
                                    "token":gentoken
                                   })
                                }else{
                                    res.status(401).json("Email/Password not missmatch")
                                }
                            })
                            .catch((err)=>{
                                res.json(err)
                            })
                })
                .catch((err)=>{
                    res.json(err)
                })
    

}
Usercontroller.findbyrole=(req,res)=>{
    const name=req.params.role
    user.find({role:name}).then((data)=>{
        res.json(data)
    })
                            .catch((err)=>{
                                res.json(err)
                            })
   
   
                
}


module.exports=Usercontroller