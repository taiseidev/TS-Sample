const person = {
    name: 'test',
    age: 26,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: [string];

favoriteActivities = ['Camp'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
