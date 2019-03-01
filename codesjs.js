function passrequestouro() {        //Desafio ouro
    const pass1 = "greenfiles";
    const pass2 = "GREENFILES";
    const pass3 = "GreenFiles";
    var password;

    passwordouro = prompt('Insira o codigo:','');

    if((pass1 || pass2 || pass3) == passwordouro){
        window.location="greenfiles.htm";
    }
    else alert('SENHA INCORRETA');
}
function passrequest2() {        //Desafio green files
    const pass1 = "zodiaco";
    const pass2 = "Zodiaco";
    var password;

    password2 = prompt('Insira o codigo:','');

    if(pass1 || pass2==password2){
        window.location="luminus.htm";
    }
    else alert('SENHA INCORRETA');
}
function passrequest1() {        //Desafio Alex Petrov.
    const pass1 = "Alex Petrov.";
    const pass2 = "Alex Petrov";
    var password;

    password = prompt('Insira o codigo:','');

    if(pass1 || pass2==password){
        window.location="brutus.htm";
    }
    else alert('SENHA INCORRETA');
}
function passrequestgato() {        //Desafio Alex Petrov.
    const pass1 = "BERSTUK";
    const pass2 = "berstuk";
    var password;

    password = prompt('Insira o codigo:','');

    if(pass1 || pass2==password){
        window.location="finalparab.htm";
    }
    else alert('SENHA INCORRETA');
}
function passrequestbrutus() {        //Desafio brutus
    const pass1 = "volgogrado";
    const pass2 = "Volgogrado";
    var password;

    password = prompt('Insira o codigo:','');

    if(pass1 || pass2==password){
        window.location="gato.htm";
        setvolume();
    }
    else alert('SENHA INCORRETA');
}
function myLogin() {        
    var x, y;

    var x = document.getElementById("loginn").value;
    var y = document.getElementById("senhaa").value;

    if (x == "perun" && y == "yggdrasil") {
        alert("Login feito com sucesso");
        window.location="d1.htm";
    } else {
        alert("LOGIN INVALIDO, TENTE NOVAMENTE!");
    }

}
var audio = document.getElementById("morse");
function setvolume(){
    audio.volume = 0.3;    
}