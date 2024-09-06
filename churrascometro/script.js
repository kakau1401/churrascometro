//carne-400gr por pessoa + de 6horas-650
//cerveja-1200ml por pessoa + 6 horas 1500ml

//crinaças valem por 0,5

const inputAdultos = document.getElementByld("adultos");
const inputCrianças = document.getElementByld("crianças");
const inputDuração = documetn.getElementByld("duração");

const resultado = document.getElementById("resultado");

function carnePP(duracao) {

    if(duracao >=6) {
        return 650;
       }else{
        return 400;
    }
}

function cervejaPP(duracao) {

    if(duracao >=6) {
        return 2000;
    }else{
        return 400;
    }
}

function bebidasPP(duracao) {

    if(duracao >=6) {
        return 1500;
    }else{
        return 1000;
    }
}

function calcular () {
    const adultos = inputAdultos.value;
    const criancas = inputCrianças.value;
    const duracao = inputDuração.value;

    const qdtTotalCarne = carnePP(duracao)* adultos + (carnePP(duracao)/2* criancas);
    const qdtTotalCerveja = cervejaPP(duracao)* adultos;
    const qdtBebidas = bebidasPP(duracao)* adultos + (bebidasPP(duracao)/2* criancas);

    //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
    resultado.innerHTML = `<h2 class= "result-info> Você vai precisa de:</h2>`
    resultado.innerHTML +=`
    </div class= "result-block"/>
    <img src="./assets/carne.svg"/> 
    <p>${qdtTotalCarne/1000} kg de carne </p>
    </div>
    `
    resultado.innerHTML +=`
    <div class="result-block">
    <img src="./assets/cerveja.svg"/>
    <p>${Math,ceil(qdttotalcerveja/355)} latas de cerveja</p>
    </div>
    `
    resultado.innerHTML +=`
    <div class="result-block">
    <img src="./assetsrefri.svg"/>
    <p>${math.ceil(qdttotalbebidas/2000)} garrafas de bebidas </p>
    </div>
    </br>
    </br>
    </br>
    </br>
    </br>
    
`
}