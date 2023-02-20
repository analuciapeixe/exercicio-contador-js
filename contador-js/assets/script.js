var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function acrescentar() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function retirar() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
