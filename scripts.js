let numeroCartas = 0;
let listaCartas = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]
let largura = 0;

function perguntarNumeroCartas () {    

    while (numeroCartas%2 !== 0 || numeroCartas < 4 || numeroCartas > 14) {
        numeroCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));                  
    }

    inserirCartas()
}

perguntarNumeroCartas()

function inserirCartas () {

    listaCartas.sort(comparador);
     
    const lista = document.querySelector(".lista"); 
    const listaCartasSelecionadas = [];

    for (let i = 0; i < numeroCartas/2 ; i++) {       
        listaCartasSelecionadas.push(listaCartas[i]); 
        listaCartasSelecionadas.push(listaCartas[i]);           
    }

    listaCartasSelecionadas.sort(comparador);
      

    for (let i = 0; i < numeroCartas ; i++) {            
        lista.innerHTML += `<li onclick="virar(this)"><img src="imagens/front.png"><img src="imagens/${listaCartasSelecionadas[i]}.gif" class="escondido"></li>`               
    } 
    
    mudaLargura();
        
}

function mudaLargura () {

    if (numeroCartas == 4){
        largura = 300;
    } if (numeroCartas == 6){
        largura = 450;
    } if (numeroCartas == 8){
        largura = 650;
    } if (numeroCartas == 10){
        largura = 750;
    } if (numeroCartas == 12){
        largura = 900;
    } if (numeroCartas == 14){
        largura = 1050;
    }
    document.getElementById("listaCartas").style.width = `${largura}px`;    
}



function comparador() { 
	return Math.random() - 0.5; 
}

function virar (elemento) {  
    elemento.classList.toggle("virada");
    const parrotimg = elemento.children [0]; 
    const parrotgif = elemento.children [1];
    parrotimg.classList.toggle("escondido");
    parrotgif.classList.toggle("escondido");
    clique += 1;
    
    if (clique == 1) {
        temporizador();
    }   
}

let contador = 0;
let timer;
let clique = 0;

function temporizador () {
    timer = setInterval(atualizarTemporizador, 1000);
}

function atualizarTemporizador () {   
    const cronometro = document.querySelector(".cronometro")
    cronometro.innerHTML = `${contador}s` 
    contador++;
    console.log(contador)
}

