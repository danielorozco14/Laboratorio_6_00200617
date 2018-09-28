var arr =[1,2,3,4,5,6,7,8,21,45,11,12,13];
function sumaArreglo(arr){    
    if (arr.length%2!=0){
        console.log("Es impar");
        console.log("El largo es: "+arr.length);
        var acum=0;
        var j=arr.length;
        var l=arr.length/2;
        var mitad=  Math.trunc(l);//POSICION DE ENMEDIO DEL ARREGLO
        for(var i =0;i<l;i++){
               acum=arr[i]+arr[j-1];
               console.log(acum);
               j--;
        }      

    }else{
        console.log("Es par");
        console.log("El largo es: "+arr.length);
        var acum=0;
        var j=arr.length;
        for(var i=0;i<arr.length/2;i++){
            acum=arr[i]+arr[j-1];
            console.log(acum);
            j--;
        }
    }
}
