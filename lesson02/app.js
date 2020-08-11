function check() {
    let num = document.getElementById('num').value;
    if (num < 0) {
        document.getElementById('result').innerHTML = 'number is negative';
    } else if (num == 0) {
        document.getElementById('result').innerHTML = 'number is zero';
    } else if (num > 0) {
        document.getElementById('result').innerHTML = 'number is positive';
    } else {
        document.getElementById('result').innerHTML = 'not a num';
    }
}

function interval() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let str = '';
    for (let i = num1; i <= num2; i++) {
        str = str + " " + i;
    }
    console.log(str);
    document.getElementById('result2').innerHTML = str.bold();
}


function abc() {
    console.log('yo');
}


document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("btn");
    btn.addEventListener('click', abc());
});
