const btnTema = document.querySelector("#troca-tema");

// Recupera o tema salvo da última visita (ou usa "1" como padrão)
const temaSalvo = localStorage.getItem("tema") || "1";
/*Mesma coisa que:

let temaSalvo = localStorage.getItem("tema");
if (!temaSalvo) {
    temaSalvo = "1";
}
    */ 

btnTema.addEventListener("click", () => {
    const temaAtual = document.documentElement.getAttribute("data-theme") || "1";
    const novoTema = temaAtual === "1" ? "2":"1";
    aplicarTema(novoTema);
});

function aplicarTema(tema){
    if (tema === "2"){
        document.documentElement.setAttribute("data-theme", "2");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("tema",tema);
    atualizarTextoBotao(tema);
}

function atualizarTextoBotao(tema){
    btnTema.textContent = tema ==="1" ? "Tema Vibrante" : "Tema Pastel";
}

