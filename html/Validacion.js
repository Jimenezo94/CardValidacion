function obtenerDatos(){
    
    var dato = document.getElementById("number").value;
    //alert(dato); 
    var enmascarado = "#".repeat(String(dato).length-4) + String(dato).slice(-4);
    var nrever = String(dato).split("").reverse().join(""); //el dato se vuelve array cuando se aplica split y deja de serlo con join
    
    var sumatoria=0;
    //for(p = 12; p<=15; p++){
        //enmascarado= enmascarado + nrever[p]
        
    alert(enmascarado);

    for (indice = 0; indice< String(dato).length; indice++){

    if (indice % 2 == 1) {

        if (parseInt(nrever[indice])*2>=10){
            sumatoria = sumatoria + (parseInt(nrever[indice])*2)-9;
        }
    
        else{
            sumatoria = sumatoria + parseInt(nrever[indice])*2;
        }
    }
    else{
        sumatoria = sumatoria + parseInt(nrever[indice]);
        }
        //una vez ejecutdo el código, al "indice" se le aplica el incremento y valida en la segunda aconsicion del for 
}
if (sumatoria%10==0){
    alert(sumatoria);
    alert ("válida");
}
else{
     alert(sumatoria);
     alert ("inválida");
}
    
 //var posicion =
 //for (posicion = 0; posicion < inverso.legth;posicion++)
    //if (posicion % 2 );
//console.log ();}
}