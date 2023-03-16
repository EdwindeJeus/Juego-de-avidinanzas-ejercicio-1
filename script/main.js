let aleatorio = Math.floor(Math.random()*100) + 1;
const num_ingresados = document.querySelector('.num_ingresados');
const ultimoResult =  document.querySelector('.ultimoResult');
const pistas = document.querySelector('.pistas');
const btn_probar_num = document.querySelector('.btn_probar_num');
const campo_num = document.querySelector('.campo_num');
let contador_num = 1;
let btnReset;


function ValidarNumeroIngresado(){
const numeroIngresado = Number(campo_num.value);
num_ingresados.textContent += numeroIngresado +'|';

if (contador_num === 1){
    num_ingresados.textContent = 'Numero ingresados previamente:';
}


 if(numeroIngresado ===aleatorio){
    ultimoResult.textContent = 'Felicidades lo has Logrado';
    ultimoResult.style.backgroundColor = 'seasprite';
    pistas.textContent ='';
    reiniciar();
 }else if (contador_num === 10){
    ultimoResult.textContent = 'AGOTASTES EL NUMERO DE INTENTOS';
    pistas.textContent = '';
    reiniciar();
 }else{
    ultimoResult.textContent = 'EQUIVOCADO';
    ultimoResult.style.backgroundColor = 'black';
    if(numeroIngresado < aleatorio){
        pistas.textContent = 'EL NUMERO ES MAS GRANDE';
    }
    if(numeroIngresado > aleatorio){
        pistas.textContent = 'EL NUMERO ES MAS CHICO';
    }
 }
 document.getElementById("display-resultado").innerHTML = `ESTE ES TU INENTO: ${contador_num} DE 10.` 
 contador_num++;
 campo_num.value ='';
 campo_num.focus();

 prueba.textContent = aleatorio;
}


btn_probar_num.addEventListener('click', ValidarNumeroIngresado);

function reiniciar(){
    campo_num.disabled = true;
    btn_probar_num.disabled = true;
    btnReset = document.createElement('button');
    btnReset.textContent = 'REINICIAR JUEGAR';
    document.body.appendChild(btnReset);
    btnReset.addEventListener('click',reiniciar_juego);
}

function reiniciar_juego(){
    contador_num = 1;
    const reiniciar_componentes = document.querySelectorAll('.div_result p');
    for (const resetParams of reiniciar_componentes){
        resetParams.textContent ='';
    }
    btnReset.parentNode.removeChild(btnReset);
    campo_num.disabled = false;
    btn_probar_num.disabled = false;
    campo_num.value ='';
    campo_num.focus();
    ultimoResult.style.backgroundColor = 'white';
    aleatorio = Math.floor(Math.random() * 100) + 1;
}
