function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result;
    // }
    return result;
}
var combineAges = combine(30, 20, 'as-number');
console.log(combineAges);
var combinedStringAges = combine('30', '20', 'as-number');
console.log(combinedStringAges);
var combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
