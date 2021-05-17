//function to convert fahrenheit to celsius
function convertFahrToCelsius (fahr) {
    //variable declaration
    let celsius;
    let result;
    let errorArgs = JSON.stringify(fahr);
    
    //checks and conditions for errors
    if (isNaN(fahr) || typeof (fahr) === 'boolean' || (Array.isArray(fahr))) {
       if (Array.isArray(fahr)) {
        return `${errorArgs} is not a valid number but an array`;
       } else if (typeof (fahr) === 'object' || typeof (fahr) === 'undefined' || typeof (fahr) === 'boolean'){
           return `${errorArgs} is not a valid number but an ${typeof fahr}`;
       }
    //calculations if checks above are false
    } else {
        celsius = (fahr - 32) * (5/9);
        result = celsius.toFixed(4);
        return result;
    }
    
}

//tests
let temp = convertFahrToCelsius(0);
let temp1 = convertFahrToCelsius("0");
let temp2 = convertFahrToCelsius([]);
let temp3 = convertFahrToCelsius({});
console.log(temp);
console.log(temp1);
console.log(temp2);
console.log(temp3);
