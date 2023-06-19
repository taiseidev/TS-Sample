type inputType = number | string;

function combine(input1: inputType, input2: inputType, resultConversion: 'as-number' | 'as-text') {
    let result: inputType;

    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(30, 20, 'as-number');
console.log(combineAges);

const combinedStringAges = combine('30', '20', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
