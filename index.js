const express = require('express')
const app = express()
const porta = 3001

app.use(express.json())

app.post('/api/cadastro', async (req, res) => {
    let usuariojson = req.body
    console.log('cliclou em cadastro')
    /// url da api
    await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuariojson)
    }).then(async response => {
        let text = await response.json()
        switch (response.status) {
            case 201:
                res.status(201).json(text)
                break;
            case 401:
                res.status(401).json(text)
                break;
            case 500:
                res.status(500).json(text)
                break;
            default:
                break;
        }

    }).catch(err => {
        if (err) {
            res.status(500).json("erro interno")
        }
        
    })
})

app.post('/api/login', async (req, res) => {
    let usuariojson = req.body
    console.log("clicou em login");
    /// url da api
    await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuariojson)
    }).then( async response => {
        let text = await response.json()
        switch (response.status) {
            case 202:
                res.status(202).json(text)
                break;
            case 401:
                res.status(401).json(text)
                break;
            case 500:
                res.status(500).json(text)
                break;
            default:
                break;
        }

    }).catch(err => {
        if (err) {
            console.log(err);
            res.status(500).json("erro interno")
        }
        
    })
})

app.use(express.static('public'))

app.listen(porta, () => {
    console.log('front rodando.');
})