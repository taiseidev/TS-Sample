type inputType = number | string;

function combine(input1: inputType, input2: inputType) {
    let result: inputType;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 20);
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);
