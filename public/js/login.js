window.onload = () => {
    let token = JSON.parse(localStorage.getItem("token"))
    if (token.nome == null) {
        return
    } else {
        return window.location.assign("http://0.0.0.0:3001/index.html")
    }
}

let bt = document.querySelector(".submit_login")

bt.addEventListener("click", async () => {
    if (document.querySelector('#usuarioo').value.length < 3) {
        return alert("usuario tem que ter pelo menos 4 caracteres.")
    }
    if (document.querySelector('#senhaa').value.length < 5) {
        return alert("senha tem que ter pelo menos 5 caracteres.")
    }
    let velhoUsuario = {
        usuario: document.querySelector('#usuarioo').value,
        senha: document.querySelector('#senhaa').value
    }
    console.log("hahahaha");
    await fetch("http://0.0.0.0:3001/api/login", {
        method: "POST",
        body: JSON.stringify(velhoUsuario),
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(async response => {
        let text = await response.json()
        switch (response.status) {
            case 202:
                let usuariologado = {
                    nome: document.querySelector('#usuarioo').value,
                    token: text
                }
                localStorage.setItem("token", JSON.stringify(usuariologado))
                alert("usuario logado")
                window.location.assign("http://0.0.0.0:3001/index.html")
                break;
            case 401:
                alert(text)
                break;
            case 500:
                alert("ocorreu um erro no servidor. tente novamente mais tarde.")
                break;
            default:
                break;
        }
    }).catch(err => {
        alert("ocorreu um erro no servidor. tente novamente mais tarde.")
    })
})