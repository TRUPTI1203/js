let value = 3;
let negValue = -value;
//console.log(negValue);
/*
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 2);
console.log(2 % 2);
*/

let str1 = "trupti";
let str2 = "mayee";

let str3 = str1 + str2;

//console.log(str3);

/*console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
*/

console.log(+true); //+ converts the boolean value into num 1
//true+ not posssible
console.log(+""); // 0

let num1, num2, num3;

let gameCounter = 100;
++gameCounter; //prefix preceedence(value changed before usage)
console.log(gameCounter);
gameCounter++; //suffix precedence(value changed after usage)
console.log(gameCounter);
