const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivado = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivado) {
        imagemBotaoTrocaDeTema.setAttribute("src", "/assents/img/sun.png");

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "/assents/img/moon.png");
        
    };
});