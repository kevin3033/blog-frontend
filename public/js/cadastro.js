let botao = document.querySelector("#submit_cadastro")

botao.addEventListener("click", async () => {
    let email = document.querySelector('#emaill').value
    let senha = document.querySelector('#senhaa').value

    let usuario = {
        nome: email,
        senha: senha
    }
    let usuarioj = JSON.stringify(usuario)
    console.log(usuarioj)
    await fetch("http://localhost:3001/api/cadastro", {
        method: "POST",
        body: usuarioj,
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(response => {
        console.log(response);
        if (response.ok) {
            alert('usuario cadastrado')
        } else {
            alert("usuario não cadastrado")
        }
        

    }).catch(err => {
        alert("erro")
        console.log("não funcionou k, ", err)
    })
})