let box = document.querySelector("div"), input = document.querySelector("input");
let $cor= document.querySelectorAll(".mudarCor")
let $borda = document.querySelectorAll(".borda")

$cor.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        let newColor = link.textContent; // Pegue o texto dentro da tag a
        box.style.backgroundColor = newColor;
    });
});

$borda.forEach(linkedin => {
    linkedin.addEventListener("click", (event) =>{
        event.preventDefault()
        let newBorda = linkedin.textContent;
        box.style.borderRadius = newBorda
    })
})



input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
})


