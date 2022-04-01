function sum (number1, number2) {
    return number1 + number2
}

function multi (number1, number2) {
    return number1 * number2
}

this.sum = sum 
//ou modules.export {sum, multi}
this.multi = multi