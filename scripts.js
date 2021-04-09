let numeroCartas = 0;
let listaCartas = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]
let largura = 0;
let listaCartasSelecionadas = [];
let ultimaCartaClicada = null;

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

    for (let i = 0; i < numeroCartas/2 ; i++) {       
        listaCartasSelecionadas.push(listaCartas[i]); 
        listaCartasSelecionadas.push(listaCartas[i]);           
    }

    listaCartasSelecionadas.sort(comparador);
      

    for (let i = 0; i < numeroCartas ; i++) {            
        lista.innerHTML += `<li id="${listaCartasSelecionadas[i]}" onclick="virar(this)"><img src="imagens/front.png"><img src="imagens/${listaCartasSelecionadas[i]}.gif" class="escondido"></li>`               
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

function virar (primeiraCartaClicada) {  
    primeiraCartaClicada.classList.toggle("virada");
    const parrotimg = primeiraCartaClicada.children [0]; 
    const parrotgif = primeiraCartaClicada.children [1];
    parrotimg.classList.toggle("escondido");
    parrotgif.classList.toggle("escondido");    

    clique += 1;
    
    if (clique == 1) {
        temporizador();
    } 
   
    if (ultimaCartaClicada == null) {            
        ultimaCartaClicada = primeiraCartaClicada; 
        clique++;       
    } else {
        if (primeiraCartaClicada.id !== ultimaCartaClicada.id) {
            desvirarCarta(primeiraCartaClicada)
            desvirarCarta(ultimaCartaClicada)
            clique++; 
        }

        ultimaCartaClicada = null;
        
    }

    terminarJogo()
    
}

function terminarJogo () {  
    if (document.querySelectorAll(".virada").length == numeroCartas) {
        alert (`Você ganhou em ${clique} jogadas!`) 
    }     
}



function desvirarCartaNovamente (primeiraCartaClicada) {     // minha primeiraCartaClicada é uma array q recebe duas imagens?
     primeiraCartaClicada.classList.remove("virada");   
     const parrotimg = primeiraCartaClicada.children [0]; 
     const parrotgif = primeiraCartaClicada.children [1];
     parrotimg.classList.toggle("escondido");
     parrotgif.classList.toggle("escondido");
}


function desvirarCarta (primeiraCartaClicada) {
    setTimeout(desvirarCartaNovamente, 1000, primeiraCartaClicada)    
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
}
