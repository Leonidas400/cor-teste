let box = document.querySelector(".caixa-cosmog"), input = document.querySelector(".cosmog");
let $estilo= document.querySelectorAll(".estilo")

input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
})

function mudaCorEBorda(estilizar){
    estilizar.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            let newEstilo = link.textContent; // Pega o texto dentra da tag a
            box.style.backgroundColor = newEstilo;
            box.style.borderRadius = newEstilo;
        });
    });
}

mudaCorEBorda($estilo);

