// PRE_DEFINED FUNCTIONS
var d = new Date();
document.querySelector('.date').innerHTML= d;

// USER_DEFINED FUNCTIONS

function sample() {
    document.write('Hello JS');
}

var x = function(a,b) {
    console.log(a*b)
}

x(7,15)

// ARROW FUNCTIONS

var y=(s,r) => console.log(s*r);
y(7,15)

var a = 7;
{
    var a = 15;
    console.log(a)
}
console.log(a)


let b = 7;
{
    let b = 15;
    console.log(b)
}
console.log(b)
