let numeroCartas = 0;


function perguntarNumeroCartas () {
    numeroCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));   

    while (numeroCartas%2 !== 0) {
        perguntarNumeroCartas()        
    }

    inserirCartas()
}

perguntarNumeroCartas()

function inserirCartas () {
    
    const lista = document.querySelector(".lista"); 

    for (let i = 0; i < numeroCartas; i++) {        
        lista.innerHTML = `<li><img src="imagens/front.png"></li>`           
    }
   
}




