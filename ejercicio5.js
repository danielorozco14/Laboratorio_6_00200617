var arr = [1, "hola", true, "mundo", "true", true, 45];

function elementoEspecifico(tipo,arreglo){
    var aux=[];
    for(var i=0;i<arreglo.length;i++){
        if(typeof arreglo[i]==tipo){
            aux.push(typeof arreglo[i]);
        }
    }
    console.log("La cantidad de datos con el mismo tipo son "+aux.length);
    return aux;
}