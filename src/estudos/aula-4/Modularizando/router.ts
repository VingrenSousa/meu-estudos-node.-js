import  Express  from "express";


const Router = Express.Router()
// explo de banco de dado em memoria ""
const info=[
    { "name":'joao',"dataDeNacimento":"16/04"},
    {"name":'jose',"dataDeNacimento":"11/07"},
    {"name":'susane',"dataDeNacimento":"05/04"},
    {"name":'maria ',"dataDeNacimento":"07/01"},
    {"name":'sitia',"dataDeNacimento":"10/08"},

]

Router.get("/",(req,res)=>{
    res.json('seja bem vindo ')
})

Router.get("/:user",(req,res)=>{
    const user = req.params.user
    const my = info.find((i)=>i.name==user)
    if(!my){
        res.status(404).json({error:"usuario nao encontrado!",user:user})
    }else{
        res.status(200).json(my)
    }
    
})
export default Router