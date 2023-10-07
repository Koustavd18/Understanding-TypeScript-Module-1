const title = `Unknown Type and Never Type`

console.log(title);

let userInput : unknown;
let userName: string;

userInput = 5;
userInput = 'Something';

if(typeof userInput === 'string'){
    
    userName = userInput;
}

userName = 'David';

console.log(userInput);
console.log(userName);

function generateError ( message:string, code:number): never {
    throw {message:message, ErrorCode:code};
}

generateError('Its an error', 6969);