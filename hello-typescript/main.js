var minhaLet = 'Minha Variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 26;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());


var n1 = 'teste';
var n2 = 'teste';
n2 = 4;
var n3 = 4;
