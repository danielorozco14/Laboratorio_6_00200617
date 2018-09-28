function claveMurcielago(cad){
    var palabra=cad.toLowerCase();
    var aux=[];
    var encrypt=[];
    
    for(let i=0;i<palabra.length;i++){
        aux.push(palabra[i]);
    }
    for(let i=0;i<aux.length;i++){
        if(aux[i]=="m"){
            encrypt.push(0);
        }
        else if(aux[i]=="u"){
            encrypt.push(1);
        }
        else if(aux[i]=="r"){
            encrypt.push(2);
        }
        else if(aux[i]=="c"){
            encrypt.push(3);
        }
        else if(aux[i]=="i"){
            encrypt.push(4);
        }
        else if(aux[i]=="e"){
            encrypt.push(5);
        }
        else if(aux[i]=="l"){
            encrypt.push(6);
        }
        else if(aux[i]=="a"){
            encrypt.push(7);
        }
        else if(aux[i]=="g"){
            encrypt.push(8);
        }
        else if(aux[i]=="o"){
            encrypt.push(9);
        }
        else{
            encrypt.push(aux[i]);
        }
    }
    return encrypt.join("");
}