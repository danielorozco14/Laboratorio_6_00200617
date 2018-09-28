var arr=[1,3,4,23,24,2,3,4,2,3,4,123,2,9]
function promedioElementosArreglo(arreglo){
    var acum=0;
        for(let i=0; i<arr.length;i++){
           acum+=arr[i];
        }
        var prom=acum/arreglo.length;
        console.log("La suma de los elementos es " + acum +" y el promedio es: "+prom);
}