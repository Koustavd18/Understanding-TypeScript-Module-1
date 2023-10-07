var title = "Unknown Type and Never Type";
console.log(title);
var userInput;
var userName;
userInput = 5;
userInput = 'Something';
if (typeof userInput === 'string') {
    userName = userInput;
}
userName = 'David';
console.log(userInput);
console.log(userName);
function generateError(message, code) {
    throw { message: message, ErrorCode: code };
}
generateError('Its an error', 6969);
