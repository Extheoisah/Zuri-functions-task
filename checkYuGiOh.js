//checkYuGiOh function
function checkYuGiOh (n) {
    //variable declaration
    let arr = [];
    errorArgs = JSON.stringify(n);

    //checks and conditions for errors
    if (isNaN(n) || Array.isArray(n) || typeof (n) === 'object' || typeof (n) === 'undefined' || typeof (n) === 'boolean') {
        return `invalid parameter: ${errorArgs}`
    }
    
    //iterates through the array "arr"
    for (let i = 1; i <= n; i++) {

        //checks for multiples of 2, 3, 5 and
        //assigns them to "yu", "gi", "oh" respectively
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr.push("yu-gi-oh");
        } else if ((i % 2 === 0) && (i % 3 === 0)) {
            arr.push("yu-gi");
        } else if (i % 2 === 0 && i % 5 === 0) {
            arr.push("yu-oh");
        } else if (i % 3 === 0 && i % 5 === 0) {
            arr.push("gi-oh");
        }

        else if ((i % 2 === 0)) {
            arr.push("yu");
        } else if ( i % 3 === 0) {
            arr.push("gi");
        } else if (i % 5 === 0) {
            arr.push("oh");
        } else {
            arr.push(i);
        }
    }
    return arr;
}

//tests
let number = checkYuGiOh(5);
let number1 = checkYuGiOh(10);
let number2 = checkYuGiOh(30);
let number3 = checkYuGiOh("Fissbuzz is meh");
console.log(number);
console.log(number1);
console.log(number2);
console.log(number3);