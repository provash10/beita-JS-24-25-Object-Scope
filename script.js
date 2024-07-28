###Object
// var car = { name:"Lamborghini", color:"white",model:"Aventador"}

// document.getElementById("demo").innerHTML = {car.name; car.color; car.model;}
// document.getElementById("demo").innerHTML = car.name;
// document.getElementById("demo").innerHTML = car.color;
// document.getElementById("demo").innerHTML = car.model;

// Again

// ###Scope


var a = 5;
var b = 6;

function testFunction(){
    console.log(a*b)
    document.write(a*b);
}

testFunction();
document.write("<br>", a+b);