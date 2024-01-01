function calcular(operacion){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(num1) && isNaN(num2)){
        document.getElementById('resultado').innerText = 'Ingresa números validos';

    }else{
        var resultado;

        switch(operacion){
            case 'suma':
                resultado = num1 + num2;
                break;

            case 'resta':
                resultado = num1 - num2;
                break;
        
            case 'producto':
                resultado = num1 * num2;
                break;

            case 'dividir':
                if(num2 !== 0){
                    resultado = num1 / num2;  
                }else{
                    document.getElementById('resultado').innerText = 'No es posible dividir por cero';
                    return;
                }
                break;

            default:
                document.getElementById('resultado').innerText = 'Operación no válida';
                return;
                       
        }
        document.getElementById('resultado').innerText = resultado.toLocaleString();
    }
}