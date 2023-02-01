const express = require('express')
const app = express()
const porta = 3001

app.use(express.json())

app.post('/api/cadastro', (req, res) => {
    console.log(req.body)
    let usuariojson = req.body

    /// url da api
    fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuariojson)
    }).then(response => {
        console.log(response)
        res.send("usuario cadastrado")

    }).catch(err => {
        if (err) {
            res.send("erro")
        }
        
    })
})

app.use(express.static('public'))

app.listen(porta, () => {
    console.log('front rodando.');
})