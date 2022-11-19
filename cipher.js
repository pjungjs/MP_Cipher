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
                //assign to the variable "newIndex" the index of each letter of the @msg in Alphabet array.
                let newIndex = alpLow.indexOf(lower[i]) + num;

                //if "newIndex" is a positive number
                if (newIndex > 0) {
                    //a loop to check if the shifted letter index exceeds the length of the Alphabet array,
                    while (newIndex >= alpLow.length) {
                        //reassign the value that it fits in the Alphabet array by subtracting with the length of the Alphabet array.
                        newIndex -= alpLow.length;
                    }
                } else if (newIndex < 0) { //if "newIndex" is a negative number
                    newIndex = alpLow.length + newIndex;
                    
                    //a loop to check if the shifted letter index cannot be found in the Alphabet array,
                    while (alpLow[newIndex] === undefined) {
                        //keep subtracting until it reaches a index number that can be found in the Alphabet array.
                        newIndex = alpLow.length + newIndex;
                    }
                }

                //add the letters that has shifted according to the @num provided.
                secretMsg += alpLow[newIndex];
            }
        }
    }
    console.log(secretMsg)
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
cipher("hello", 26); //> hello
cipher("hello", 78); //> hello
//same goes to the negative numbers:
cipher("hello", -52); //> hello
cipher("hello", -104); //> hello

// *Testing a simple sentence with non-existent characters
cipher("Hello, my name is Jinseok!", 2); //> jgnnq, oa pcog ku lkpugqm!
// *Testing with number beyond the length of Alphabet array
cipher("zizzi’s zippy zipper zips.", 54); //> bkbbk’u bkrra bkrrgt bkru.
// *Testing with a negative number.
cipher("Can an active actor always actually act accurately?", -30); //> ywj wj wypera wypkn whswuo wypqwhhu wyp wyyqnwpahu?
// *Testing absurd numbers
cipher("Peter Piper picked a peck of pickled peppers", 500); //> vkzkx vovkx voiqkj g vkiq ul voiqrkj vkvvkxy
cipher("vkzkx vovkx voiqkj g vkiq ul voiqrkj vkvvkxy", -500); //> peter piper picked a peck of pickled peppers
