const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () => {
    console.log("cliquei no robo")
})

function dizOi(nome){
    console.log("oi", nome)
    console.log("Bem vindo ao Robotron 2000")
}

dizOi("pedro")