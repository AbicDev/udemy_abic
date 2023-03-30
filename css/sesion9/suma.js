function suma(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n;
    });

    return resultado;

}
console.log(suma(1, 7, 13, 6));
console.log("");
const arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);
const arr3 = [...arr1, ...arr2];
console.log("");
console.log(arr3);
console.log("");
const arr4 = [...arr3, ...arr1, ...arr2];
console.log(arr4, "fuckoff");
