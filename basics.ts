console.log('Hello Im TypeScript!');

function Add (n1: number, n2: number, showResult: boolean, phrase: string){
    const result  = n1 + n2;
    if (showResult) {
        console.log( phrase + result);
    }else {
        return result;
    }
    
}

const num1 = 2;
const num2 = 10;
const  printResult = true; 
const phrase = 'Result is : '

Add(num1, num2, printResult, phrase);


