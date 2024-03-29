window.onload = () => {
    let token = JSON.parse(localStorage.getItem("token"))
    if (token == null) {
        return
    } else {
        let topo = document.querySelector("#cabecalho-menu")
        topo.innerHTML = `<a class="cabecalho-menu-item" href="#">${token.nome}</a>
        <p class="cabecalho-menu-item" id="bt-logout" onclick="logout()" href="#">logout</p>`
    }
}

function logout() {

    localStorage.removeItem("token")
    return window.location.assign("http://0.0.0.0:3001/index.html")

}

document.querySelector(".conteudo-aba-post").addEventListener("click", () => {
    let token = JSON.parse(localStorage.getItem("token"))
    if (token == null) {
        return window.location.assign("http://0.0.0.0:3001/cadastro.html")
    } else {
        return window.location.assign("http://0.0.0.0:3001/new_post.html")
    }
})
