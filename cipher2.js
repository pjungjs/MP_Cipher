/**
 * cipher2() - shift inputted specift letter with number provided
 * -------------------------------------------
 * To Encrypt or Decrypt a message by shifting Alphabetic letter order based on user's input.
 * A function that takes 3 parameters:
 * @param {string} - a string or a variable of a text.
 * @param {array} - an array of string(s) of letter(s) desired to be shifted for the secret message.
 * @param {number} - a positive or negative interger, to shift the encryption or decryption.
 * @returns {string} - the original text converted to a new encrypted or decrypted message.
 * 
 * EXAMPLE:
 * const msg = "the Baker Betty Botter Bought some Butter, But she said \"this Butter is Bitter, Bitter Butter is Bad for Batter.\"";
 * const arr = ["a", "b", "e", "o", "t"];
 * const num = 2;
 * cipher(msg, arr, num);
 * //> ""
*/
//0-25 (26 letters)
let alpLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cipher2(msg, arr, num) {}