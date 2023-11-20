console.log('rodando aula-2')
import http from 'http'
import fs from 'fs'



const porta = process.env.PORT
const serve= http.createServer((req,res)=>{
    // fs.readFile farar a leitura do arquivo
    fs.readFile("front/index.html",(error,date)=>{
        res.writeHead(200,{"Content-Type":"text/html"})
        error
        ?console.log('error:'+ error)
        :res.write(date)
        res.end()
    })

})
serve.listen(porta || 3000,()=>{console.log("servidor rodando")})