/*npm init
 npm i express
 http://localhost:3000/perfil*/


const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.post("/clientes", (req,res) =>{
    const cliente=req.body
    //abrir arquivo
   try{
    const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
    //adicionar o cliente
    bd.push(cliente)
    //salvar o arquivo
    fs.writeFileSync("bd.json",JSON.stringify(bd), "utf8")
    //resposta
    res.status(201).json({resposta: "Cliente Cadastrado!!!!!!!"})
   }catch (erro){
    res.status(500).json({erro: erro.message})
   } 
})

app.get("/ola", (req, res)=>{
    res.json({resposta:"olá mundo"})
})

app.get("/perfil", (req, res)=>{ 
   res.json({nome:"Ariel Gregorio Kramek",
            idade: "16 anos"
})
})

app.listen(port, ()=>{
    console.log("API executando na porta "+ port)
})