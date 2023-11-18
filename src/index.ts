import express from "express"

const App =express()

App.get("/home",(req,response)=>{
  
   return  response.send('hello world');
})
App.listen(3000)
