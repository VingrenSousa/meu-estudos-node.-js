//Modularizando as rotas do App Node.JS 
import  Express from "express";
import  Router  from "./Modularizando/router";

const app=Express()
const porta = process.env.PORT||3000

app.use("/",Router)

app.get("*",(req,res)=>{
    res.send('banco vingren')
})
app.listen(porta)