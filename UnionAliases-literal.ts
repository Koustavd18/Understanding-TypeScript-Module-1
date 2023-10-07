console.log('Union Types && Literal Types');

type Combinable = number | string;

type ConversionDesc = 'as-number' | 'as-text';

function combine( input1 : Combinable, input2 : Combinable, conversion: ConversionDesc ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' && conversion === 'as-number'){
        result = +input1 + +input2;
    }else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineNumAges = combine(10,25, 'as-number');

console.log(combineNumAges);
console.log(typeof combineNumAges);

const combineAges = combine(10,25, 'as-text');

console.log(combineAges);
console.log(typeof combineAges);

const combineNames = combine('Koustav', 'Das', 'as-text');

console.log(combineNames);

type User = {name: string; age: number}

const Manush:User  ={name:'Shaheb', age:40}

function greet(user:User){
    console.log(user.name);
}

function checkAge(user:User, age){
    return user.age> age;
}

greet(Manush);

console.log(checkAge(Manush,40));

enum Role{ read, write, dance=300}

type myobj = {name:string; age:number; lastName: string};

const MyUser: myobj = { name:'type', age:30, lastName:'disco'}