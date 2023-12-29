function sumar() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Ingresa números válidos';
    } else {
        var suma = num1 + num2;
        document.getElementById('resultado').innerText = suma.toLocaleString();
    }
}

function resta(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        document.getElementById('resultado').innerText = 'Asegúrese de utilizar números positivos';
    } else {
        var resta = num1 - num2;
        document.getElementById('resultado').innerText = resta.toLocaleString();
    }
}

function producto(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        document.getElementById('resultado').innerText = 'Asegúrese de utilizar números positivos';
    } else {
        var producto = num1 * num2;
        document.getElementById('resultado').innerText = producto.toLocaleString();
    }
}

function dividir(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);


    if (isNaN(num1) || isNaN(num2)){
        document.getElementById('resultado').innerText = 'Asegúrese de utilizar números positivos';
    } else {
        var division = num1 / num2;
        document.getElementById('resultado').innerText = division.toLocaleString();
    }
}

