

{
    // const name = 'Max';
    // let age = 30;
    // age = 29;

    // console.log(name + age);

    // function add(a: number, b: number) {
    //     var result;
    //     result = a + b;
    //     return result;
    // }

    // console.log(add(30, 30));

    // if (age >= 20) {
    //     var isAdult = true;
    // }

    const add = (a: number, b: number = 1) => a + b;

    const printOutPut : (output: string | number) => void = output => {
        console.log(output);
    }


    console.log(add(30));
    console.log(printOutPut(30));

    const hobbies = ['Sports', 'Cooking'];
    const activeHobbies = ['Hiking'];

    activeHobbies.push(...hobbies);

    const person = {
        name: 'Max',
        age: 30
    }

    const copiedPerson = {...person};

    console.log(copiedPerson);
}
