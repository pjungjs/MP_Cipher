/**
 * cipher() - Alphabet assigned in an Array
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
 * cipher(msg, num);
 * //> "jgnnq, oa pcog ku lkpugqm!"
*/
//0-25 (26 letters)
let alpCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alpLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cipher(msg, num) {
    //the varible with shifted message.
    let secretMsg = '';

    //error messages:
    if (msg === undefined || msg.length == 0) {
        secretMsg = "You must insert a proper text!";
    } else if (num === undefined || isNaN(num)) {
        secretMsg = "You must insert a proper number!";
    } 
    
    if ((msg !== undefined && msg.length > 0) && (num !== undefined && !isNaN(num))) {
        //make all letters in lower case.
        let lower = msg.toLowerCase();

        //loop to check each character.
        for (let i = 0; i < lower.length; i++) {
            //if there's no matching character in the Alphabet array, add the original character to the "secretMsg"
            if (!alpLow.includes(lower[i])) {
                secretMsg += lower[i];
            } else { //if there's a matching character in the Alphabet array,
                //find the index number in "alpLow" the letter from "lower" and add the "num", then assign it to the "newIndex"
                let newIndex = alpLow.indexOf(lower[i]) + num;

                //if "newIndex" is a positive number
                if (newIndex > 0) {
                    //a loop to check if the shifted letter index exceeds the length of the Alphabet array,
                    while (newIndex >= alpLow.length) {
                        //reassign the value that it fits in the Alphabet array by subtracting with the length of the Alphabet array.
                        newIndex -= alpLow.length;
                    }
                } else if (newIndex < 0) { //if "newIndex" is a negative number                    
                    //a loop to check if the shifted letter index cannot be found in the Alphabet array,
                    while (alpLow[newIndex] === undefined) {
                        //keep subtracting until it reaches a index number that can be found in the Alphabet array.
                        newIndex = alpLow.length + newIndex;
                    }
                }
                //check first if the character is UPPER or lower case from the original "msg",
                //then assign the UPPER or lower case accordindly.
                if (msg[i] === msg[i].toUpperCase()) {
                    secretMsg += alpCap[newIndex];
                } else if (msg[i] === msg[i].toLowerCase()) {
                    secretMsg += alpLow[newIndex];
                }
            }
        }
    }
    console.log(secretMsg);
}

// *Testing the error messages
cipher(); //> You must insert a proper text!
cipher(""); //> You must insert a proper text!
cipher("any"); //> You must insert a proper number!
cipher("any", "z"); //> You must insert a proper number!

// *Testing a simple word and shifting number
cipher("hello", 0); //> hello
cipher("hello", 1); //> ifmmp
//since Alphabet has 26 letters, if I shift 26 letters or multiple of it, it will come back to the same letter:
cipher("hi", 26); //> hi
cipher("hello", 78); //> hello
//same goes to the negative numbers:
cipher("bye", -52); //> bye
cipher("goodbye", -104); //> goodbye

// *Testing a simple sentence with non-existent characters
cipher("Hello, my name is Jinseok!", 2); //> Jgnnq, oa pcog ku Lkpugqm!
// *Testing with number beyond the length of Alphabet array
cipher("zizzi’s zippy zipper zips.", 54); //> bkbbk’u bkrra bkrrgt bkru.
// *Testing with a negative number
cipher("Can an active actor always actually act accurately?", -30); //> Ywj wj wypera wypkn whswuo wypqwhhu wyp wyyqnwpahu?
// *Testing with absurd numbers
cipher("Peter Piper picked a peck of pickled peppers", 500); //> Vkzkx Vovkx voiqkj g vkiq ul voiqrkj vkvvkxy
cipher("Vkzkx Vovkx voiqkj g vkiq ul voiqrkj vkvvkxy", -500); //> Peter Piper picked a peck of pickled peppers

// *Testing if matches the letter cases (UPPER or lower case)
cipher("ShE sElLs SeAsHeLlS bY tHe SeAsHoRe", 5); // XmJ xJqQx XjFxMjQqX gD yMj XjFxMtWj
cipher("xMj XjQqX xJfXmJqQx Gd YmJ xJfXmTwJ", -5); // sHe SeLlS sEaShElLs By ThE sEaShOrE