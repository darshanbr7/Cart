const bcrypt=require("bcrypt")
const Auth={}
Auth.register=(req,res,next)=>{
    const body=req.body
    bcrypt.genSalt()
           .then((salt)=>{
            bcrypt.hash(body.password,salt)
                    .then((encrypt)=>{
                        body.password=encrypt
                        req.user=body
                        next()
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
           })
           .catch((err)=>{
            res.json(err)
           })
}


module.exports=Auth