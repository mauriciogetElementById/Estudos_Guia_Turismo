var hora = prompt ("Digite o horario");

if (hora > 0 && hora < 6){
    alert("Agora é de madrugada"+" "+hora);
}
    else if (hora < 12){
        alert("Agora é de manhã"+" "+hora);
    }
        else if (hora < 18){
            alert("Agora é tarde"+" "+hora);
        }
        else 
            alert("Agora é noite"+" "+hora);



document.getElementsByClassName("btn_adicionar")[0].innerHTML = "ADD";


function verde() {
    document.querySelector("#teste").classList.remove('vermelho');
    document.querySelector("#teste").classList.remove('azul');
    document.querySelector("#teste").classList.add('verde');
}

function azul() {
    document.querySelector("#teste").classList.remove('vermelho');
    document.querySelector("#teste").classList.remove('verde');
    document.querySelector("#teste").classList.add('azul');
}

function vermelho() {
    document.querySelector("#teste").classList.remove('verde');
    document.querySelector("#teste").classList.remove('azul');
    document.querySelector("#teste").classList.add('vermelho');
}