// undefined
var a;
console.log(typeof a)

// number
var b = 10;
console.log(typeof b)

// string
var c = "Sravanthi";
console.log(typeof c)

// boolean
var d = true;
console.log(typeof d)

// BigInt
var e = BigInt(12345678911121134411);
console.log(typeof e, e)

// symbol
const f = Symbol("Sravanthi");
console.log(typeof f, f)

var obj = {
    name : "value",
    age : 28,
    isQualified : true
}
console.log(typeof obj)

function func_name (){
    return; 
}
console.log(typeof func_name)