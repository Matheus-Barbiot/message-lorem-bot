function enviar() {
    let mensagem = document.getElementById('msg').value
    let espacoMensagem = document.getElementById('mensagens')
    
    espacoMensagem.innerHTML += `<div><p>${mensagem}</p></div>`
}