const subject: string = 'Return Types'

console.log(subject);

function add (n1:number, n2:number) {
    return n1+n2;
}

function printResult(num:number):undefined{
    console.log('Result is :' +num);
}

printResult(add(5,10));

let combineValues:(a:number, b:number) => number = add;

console.log(combineValues(23,3));

function addAndHandle(n1:number,n2:number, callback:(num:number)=> void ){
    const result = n1+n2;
    callback(result);
}

addAndHandle(2,4, result => {console.log(result)});