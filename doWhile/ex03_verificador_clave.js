let intentos = 0;
let clave;

do{
    clave = prompt('Ingresa la contraseña: ');
    intentos++

    if(clave != "abc1234"){
        console.log('Contraseña incorrecta!');        
    }
}while(intentos < 3 && clave != "abc1234");

if(clave == "abc1234"){
    console.log('Contraseña correcta!')
}else{
    console.log('Se acabaron los intentos')
}