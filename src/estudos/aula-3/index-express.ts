console.log('rodando aula-3')
import http from 'http'
import express from 'express'

const porta= process.env.PORTA




//servido pura http node
// const servido = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"})
//     res.end('servidor node puro')

// })
// servido.listen(porta||3000,()=>{console.log('servidor rodando')})

// servidor express

const app = express()
app.get('/home',(req,res)=>{
    res.send('servido express')
})
app.get('/home/json',(req,res)=>{
    res.json({servido:"express"})
})

app.listen(porta||3000,()=>{console.log('servidor rodando')})
