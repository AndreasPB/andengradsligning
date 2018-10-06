// Opgave til CPHB - Andengradslining

// Funktionen bliver kaldt og bruger dataen fra opgaven som test og retunerer d = 49. x1 = 1, x2 = -6
andengradsligning(1, 5, -6);

// Her er vores input til a, b og c
var a = prompt("Her skal du indsætte a: ");
var b = prompt("Her skal du indsætte b: ");
var c = prompt("Her skal du indsætte c: ");

// Funktionen bliver kaldt og bruger dataen fra inputtet
andengradsligning(a, b, c);


function andengradsligning(a, b, c) {
    var x1;
    var x2;
    var d = diskriminant(a, b, c)

    x1 = (-b + Math.sqrt(d)) / 2*a;
    x2 = (-b - Math.sqrt(d)) / 2*a;

    console.log("x1 = ", x1, "x2 = ", x2)
}



function diskriminant(a, b, c) {

    d = Math.pow(b, 2) - 4 * a * c;

    console.log("Diskriminanten er: " + d);
    return d;
}