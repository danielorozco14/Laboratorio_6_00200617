var arr=[1,3,4,23,24,2,3,4,2,3,4,123,2,9]
function ocurrenciasEnArreglo(num,arreglo){
    var acum=0;
        for(let i=0; i<arr.length;i++){
           if (num==arr[i]){
               acum++;
           }
        }
        console.log("Aparece el numero " + num + ", "+ acum +" veces dentro del arreglo");
}