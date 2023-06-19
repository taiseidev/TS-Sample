const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'test',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

// tupleはpushが許可されてしまう
// person.role.push('admin');

let favoriteActivities: [string];

favoriteActivities = ['Camp'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
