window.onload = () => {
    let token = JSON.parse(localStorage.getItem("token"))
    if (token.nome == null) {
        return
    } else {
        return window.location.assign("http://0.0.0.0:3001/index.html")
    }
}

let bt = document.querySelector("#submit_cadastro")

bt.addEventListener("click", async () => {
    if (document.querySelector('#usuarioo').value.length < 3) {
        return alert("usuario tem que ter pelo menos 4 caracteres.")
    }
    // fazer uma verificação básica do email.
    if (document.querySelector('#emaill').value.length < 1) {
        return alert("sem email.")
    }
    if (document.querySelector('#senhaa').value.length < 5) {
        return alert("senha tem que ter pelo menos 5 caracteres.")
    }
    let novoUsuario = {
        usuario: document.querySelector('#usuarioo').value,
        email: document.querySelector('#emaill').value,
        senha: document.querySelector('#senhaa').value
    }
    await fetch("http://0.0.0.0:3001/api/cadastro", {
        method: "POST",
        body: JSON.stringify(novoUsuario),
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(async response => {
        let text = await response.json()
        switch (response.status) {
            case 201:
                alert(text)
                break;
            case 401:
                alert(text)
                break;
            case 500:
                alert(text)
                break;
            default:
                break;
        }
    }).catch(err => {
        alert("ocorreu um erro no servidor. tente novamente mais tarde.")
    })
})