interface AddFn {
    (a: number, b: number): number;
}


{
    let add: AddFn;
    
    add = (n1: number, n2: number) => {
        return n1 + n2;
    }
add(1, 2);
}
interface Named {
    name?: string;
    outputName?: string;
}

interface Greetable  extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }
    greet(phrase: string): void {
        console.log(phrase);
    }
}

let user1: Person;
user1 = new Person();


user1.greet('Hello');
