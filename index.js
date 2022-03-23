const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/hello', (req, res) => {
    if(req.query && req.query.nome) { 
        res.send('<h1>Hello' + req.query.nome +'!</h1>')
    }
    else {
        res.send('<h1>Hello Anonymous!</h1>');
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
