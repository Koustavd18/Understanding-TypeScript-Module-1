// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// }= {
//     name: 'Manush',
//     age: 20,
//     hobbies: ['Sports', 'biking'],
//     role: [1, 'admin']
// };

enum Role{ ADMIN = 'admisnistrator' , AUTHOR=100, READ_ONLY_USER = 'read-only-user' } //enum

const person= {
    name: 'Manush',
    age: 20,
    hobbies: ['Sports', 'biking'],
    role: Role.ADMIN,
};

let favoriteActivities: string[];
 favoriteActivities = [...person.hobbies];

let someArray: [number,string] = [1,'helo'] //tuple

console.log(person.name.toLowerCase());

for( const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};

if(person.role == Role.ADMIN){
    console.log('Milche re Milche');
} else{
    console.log("milche na");
}