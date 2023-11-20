console.log('rodando aula-1')

import url from 'url'
import http from "http";
const porta:number =3000;
const host:string="127.0.0.1";

const serve =http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    if(req.url=="/user"){
        const user =[
            {
            name:"joao",
            emeio:"joao@gmail.com"
            },
            {
            name:"jose",
            emeio:"jose@gmail.com"
            }
        ]
        return res.write(JSON.stringify(user))
    }
    if(req.url){
      
        const parametro = url.parse(req.url,true).query
        res.write("<h1>"+parametro.name+"</h1>")

    }
})
serve.listen(porta,host,()=>{console.log("servidor rodando ")})


