// IEEE 754 double precision float 64 bits
// 51 bits for float
console.log(0.1 * 5);
console.log(0.15 * 3);
console.log(0.1 + 0.2);
console.log(Math.pow(2, 53));
console.log(Math.pow(2, 53) + 1);
console.log(Math.pow(2, 53) + 2);
console.log(Math.pow(2, 53) * 2);

console.log(Math.round(((0.1 + 0.2) * 10)) / 10);
console.log(Math.round(((0.15 * 3) * 100)) / 100);

let x = 3 * 0.15;
console.log(x.toFixed(2));

x = 1.005;
console.log(x.toFixed(2));
console.log(Math.round(x * 100) / 100);

Number.prototype.round = function (places) {
    return +(Math.round(this + 'e+' + places) + 'e-' + places);
}
console.log(x.round(2));
console.log('--------------------------\n');

let pln = 1000;
let exchange = 3.69261;
let usd = Math.floor((pln / exchange) * 100) / 100;
let commission = Math.ceil((usd * 0.02) * 100) / 100;
console.log(usd);
console.log(Math.trunc(usd));
console.log(commission);
