"use strict";
{
    let add;
    add = (n1, n2) => {
        return n1 + n2;
    };
    add(1, 2);
}
class Person {
    constructor(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user1;
user1 = new Person();
user1.greet('Hello');
//# sourceMappingURL=app.js.map