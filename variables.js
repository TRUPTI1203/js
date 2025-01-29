const accountId = 144553 //const is used for constants
let accountEmail = "hitesh@google.com" //let is same as var
var accountPassword = "12345"
accountCity = "Jaipur" //variable
let accountState;
//accountId = 2 //not allowed
accountEmail = "trupti@gmail.com"
accountPassword = "2121"
accountCity = "berhampur"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/* 
prefer not to use var 
because of issue in block scope and functiional scope
*/