"use strict";
{
    const add = (a, b = 1) => a + b;
    const printOutPut = output => {
        console.log(output);
    };
    console.log(add(30));
    console.log(printOutPut(30));
    const hobbies = ['Sports', 'Cooking'];
    const activeHobbies = ['Hiking'];
    activeHobbies.push(...hobbies);
    const person = {
        name: 'Max',
        age: 30
    };
    const copiedPerson = Object.assign({}, person);
    console.log(copiedPerson);
}
//# sourceMappingURL=app.js.map