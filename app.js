// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'test',
//     age: 26,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }
// tupleはpushが許可されてしまう
// person.role.push('admin');
// let favoriteActivities: [string];
// favoriteActivities = ['Camp'];
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'test',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザです');
}
