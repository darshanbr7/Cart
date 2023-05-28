const express=require("express");
const Connect = require("./Config/DBConnection");
const routes=require("./Config/Routes")

const app=express()
app.use(express.json())
const port=3090;
Connect()
app.use("/api",routes)

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})