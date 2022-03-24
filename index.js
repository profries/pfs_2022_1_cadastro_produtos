const express = require('express')
const app = express()
const port = 3000

let listaProdutos = [
    {id:1, nome:"Pastel", preco:7}
];
let idAutoIncrement = 2;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/api/produtos', (req, res) => {
    res.json(listaProdutos);
})

app.get('/api/produtos/:id', (req, res) => {
    const id = req.params.id;

    const produto = listaProdutos.find(
        (produto) => produto.id == id
    );

    if(!produto){
        res.status(404).json({erro:"Produto não encontrado!"});        
    }
    else {
        res.json(produto);
    }
})

app.post("/api/produtos", (req, res) => {
    const produto = req.body;
    if(produto && produto.nome && produto.preco){
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
        res.status(201).json(produto);
    }
    else {
        res.status(400).json({erro:"Falta parametros de produto"})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
