// Opgave til CPHB - Andengradslining


andengradsligning(1,5,-6);




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

    console.log(d);
    return d;
}