function multiplicarString(string, num) {
    let res = ''
    for (let i=0; i < num; i++){
        res += string
    }
    return res
}


function enviar() {
    let mensagem = document.getElementById('msg').value
    let espacoMensagem = document.getElementById('mensagens')
    
    espacoMensagem.innerHTML += `<div class='mensagem' id='user'><p>${mensagem}</p></div>`

    espacoMensagem.scrollTop = espacoMensagem.scrollHeight;
    setTimeout(botenviar, 3000)
}

function botenviar() {
    const num = Math.floor(Math.random() * 3) + 1
    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut eius illo ratione nihil!'
    let espacoMensagem = document.getElementById('mensagens')

    espacoMensagem.innerHTML += `<div class='mensagem' id='bot'><p>${multiplicarString(text, num)}</p></div>`
}
