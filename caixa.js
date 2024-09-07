let box = document.querySelector(".caixa-cosmog");
let inputCor = document.querySelector(".cosmogCor");
let inputPalheta = document.querySelector(".cosmogPalheta");
let inputBorda = document.querySelector(".cosmogBorda");
let $estilo= document.querySelectorAll(".estilo")

function inputaCorEBorda(Cor, Borda, palheta){

    let mudaEstilo = box.style;

    palheta.addEventListener("input", ()=>{
        mudaEstilo.background = palheta.value
    })

    Cor.addEventListener("input", () => {
        mudaEstilo.background = Cor.value;
    });

    Borda.addEventListener("input", () => {
        mudaEstilo.borderRadius = Borda.value;
    });  
}

inputaCorEBorda(inputCor, inputBorda, inputPalheta);



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
