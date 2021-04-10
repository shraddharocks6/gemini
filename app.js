const express =require('express')

const app =express()


app.get('/', (req, res)=>{
  res.send("Hello,,, Its Home");
})

app.listen(3000, ()=>{
  console.log("Server is on Fire !!")
})