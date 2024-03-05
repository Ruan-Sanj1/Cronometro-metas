const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
//Constantes que envolvem tudo pelo documento (HTML) que 
//tenha aquela determinada classe.
const tempoObjetivo1 = new Date("2024-12-05T00:00:00");
const tempoObjetivo2 = new Date("2029-12-28T00:00:00");
const tempoObjetivo3 = new Date("2027-10-05T00:00:00");
const tempoObjetivo4 = new Date("2044-01-15T00:00:00");
//Constante que vai ter a data final de cada objetivo.

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        //Tira a classe "ativo" quando não está sendo usada.
        }     
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
        //Adiciona a classe "ativo" ao que for clicado.
    }
}



function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    //A linha lá de cima vem pra cá, pra mudar em 
    //tempo real.
    let tempoFinal = tempoObjetivo - tempoAtual;
    //Calcula o tempo que falta.
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    //Divide o tempo pra nossa métrica, e não milésimos.
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    //Retira o resto das divisões, deixando só 
    //o número inteiro.

    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + 
        "minutos " + segundos + " segundos";
        //Volta quanto tempo falta
        } else {
        return "Prazo Finalizado";
        //Funçãozinha que se o tempo for menor que 0, retorna que o 
        //Prazo acabou.    
    }
}

comecaCronometro();
//Chama a função que começa o cronômetro

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
    //Chama a função que vai atualizar o cronômetro 
    //e diz que vai rodas a cada 1000 milésimos.
}

function atualizaCronometro(){
    contadores[0].textContent = calculaTempo(tempoObjetivo1);
    contadores[1].textContent = calculaTempo(tempoObjetivo2);
    contadores[2].textContent = calculaTempo(tempoObjetivo3);
    contadores[3].textContent = calculaTempo(tempoObjetivo4);
    //cria o contador como texto e chama uma função que vai 
    //calcular o tempo que falta para o Objetivo
}