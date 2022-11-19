/**
 * cipher2() - Alphabet assigned in an Object
 * ------------------------------------------
 * To Encrypt or Decrypt a message by shifting Alphabetic order (based on Caesar Cipher plus more features).
 * A function that takes 2 parameters:
 * @param {string} - a string of a text.
 * @param {number} - a positive or negative interger, to shift the encryption or decryption.
 * @returns {string} - the original text converted to a new encrypted or decrypted message.
 * 
 * EXAMPLE:
 * const msg = "Hello, my name is Jinseok!";
 * const num = 2;
 * cipher2(msg, num);
 * //> "jgnnq, oa pcog ku lkpugqm!"
*/
//0-25 (26 letters)
// let alpCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let alpLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cipher2(msg, num) {}

// // *Testing the error messages
// cipher2(); //> You must insert a proper text!
// cipher2(""); //> You must insert a proper text!
// cipher2("any"); //> You must insert a proper number!
// cipher2("any", "z"); //> You must insert a proper number!

// // *Testing a simple word and shifting number
// cipher2("hello", 0); //> hello
// cipher2("hello", 1); //> ifmmp
// //since Alphabet has 26 letters, if I shift 26 letters or multiple of it, it will come back to the same letter:
// cipher2("hello", 26); //> hello
// cipher2("hello", 78); //> hello
// //same goes to the negative numbers:
// cipher2("hello", -52); //> hello
// cipher2("hello", -104); //> hello

// // *Testing a simple sentence with non-existent characters
// cipher2("Hello, my name is Jinseok!", 2); //> jgnnq, oa pcog ku lkpugqm!
// // *Testing with number beyond the length of Alphabet array
// cipher2("zizzi’s zippy zipper zips.", 54); //> bkbbk’u bkrra bkrrgt bkru.
// // *Testing with a negative number.
// cipher2("Can an active actor always actually act accurately?", -30); //> ywj wj wypera wypkn whswuo wypqwhhu wyp wyyqnwpahu?
// // *Testing absurd numbers
// cipher2("Peter Piper picked a peck of pickled peppers", 500); //> vkzkx vovkx voiqkj g vkiq ul voiqrkj vkvvkxy
// cipher2("vkzkx vovkx voiqkj g vkiq ul voiqrkj vkvvkxy", -500); //> peter piper picked a peck of pickled peppers
