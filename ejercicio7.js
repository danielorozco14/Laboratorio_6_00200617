arr = [];
acum = 0;
cont = 0;
do {
    var n = prompt("Ingrese medidas (Ingrese -1 para finalizar): ")
    parseInt(n);
    if (n != -1) {
        arr[cont] = n;
    }
    cont++;    
} while (n != -1)

function promIncerteza(arr) {
    var len=arr.length;
    var suma = 0;
    var prom;
    var delta;
    //Calculando promedio
    for (let i=0;i<len;i++){
        suma+=arr[i];
    }
    prom=suma/len;
    //Calculando incerteza
   for(let i=0;i<len;i++){
       var sumatoria=  Math.pow((arr[i]-prom),2);
       delta=Math.sqrt((1/len-1)*sumatoria);
   }
   alert("El promedio con incerteza es: " + delta);
}