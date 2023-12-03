let promedio;
let suma = 0;
let cantidad = 0;
let valores;
do{
   
     valores = parseInt(prompt('Ingresa los valores que quieras finalizalo (introduciendo el 0): '));

    if(valores != 0){

        suma = suma = valores;
        cantidad = cantidad + 1;
       
    }
}while(valores !=0);

if(cantidad != 0){
    promedio = suma / cantidad;
    alert('Promedio de los valores ingresados: '+promedio);
}else{
    alert('No se digitaron valores');
}