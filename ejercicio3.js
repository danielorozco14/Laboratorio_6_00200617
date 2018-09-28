var arr = [1, "hola", true, "mundo", "true", true, 45];
function tipoDato(arr) {
    var num = 0, str = 0, bool = 0, obj = 0, funct = 0;
    var flagNum, flagStr, flagBool, flagObj, flagFunct;
    var aux = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            num++;
            flagNum = true;
            aux.push("number");
        }
        else if (typeof arr[i] == "string") {
            str++;
            flagStr = true; aux.push("string");
        }
        else if (typeof arr[i] == "boolean") {
            bool++;
            flagBool = true;aux.push("boolean");
        }
        else if (typeof arr[i] == "object") {
            obj++;
            flagObj = true;aux.push("object");
        }
        else if (typeof arr[i] == "function") {
            funct++;
            flagFunct = true;aux.push("function");
        }
    }
    console.log("Hay " + num + " datos de tipo number, " + str + " datos de tipo string, " + bool + " datos de tipo bool, " + obj + " datos de tipo object y " + funct + " datos de tipo function.")
    return aux;
}