do{
    let num = parseInt(prompt('Ingresa un número (0 al 999'));

    if (num >= 0 && num <= 9){
        alert('El número introducido tiene un digito!');
    }else{
        if(num >= 10 && num <= 99){
            alert('El número ingresado tiene dos digitos');
        }else{
            alert('El número ingresado contiene tres digitos');
        }
    }
}while(num != 0);