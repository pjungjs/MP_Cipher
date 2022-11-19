/**
 * cipher()
 * ------------------------------------------
 * To Encrypt or Decrypt a message by shifting Alphabetic order (based on Caesar Cipher plus more features).
 * A function that takes 3 parameters:
 * @param {string} - "encrypt" or "decrypt".
 * @param {string} - a string of a text.
 * @param {number} - a positive or negative interger, to shift the encryption or decryption.
 * @returns {string} - the original text converted to a new encrypted or decrypted message.
 * 
 * EXAMPLE:
 * const command = "encrypt";
 * const msg = "Hello, my name is Jinseok!";
 * const num = 2;
 * cipher(command, msg, num);
 * //> "jgnnq, oa pcog ku lkpugqm!"
*/
//0-25
let alpCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alpLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cipher(command, msg, num) {
    let secretMsg = '';

    //error messages:
    if (command !== "encrypt" && command !== "decrypt") {
        secretMsg = "You must input a proper command!";
    } else if (msg === undefined || msg.length == 0) {
        secretMsg = "You must insert a proper text!";
    } else if (num === undefined || isNaN(num)) {
        secretMsg = "You must insert a proper number!";
    } else if ((msg !== undefined && msg.length > 0) && (num !== undefined && !isNaN(num))) {
        if (command === "encrypt") {
            let lower = msg.toLowerCase();

            //code to encrypt the message:
            if (command === "encrypt") {
                for (let i = 0; i < lower.length; i++) {
                    //assign to the variable "newInd" the value of the index of each letter of the @msg in Alphabet array.
                    let newIndex = alpLow.indexOf(lower[i]) + num;
                    
                    //a loop to check if the shifted letter index exceeds the length of the Alphabet array,
                    while (newIndex >= alpLow.length) {
                        //if it does, reassign the value that it fits in the Alphabet array by subtracting with the length of the Alphabet array.
                        newIndex -= alpLow.length;
                    }
                    
                    //if there's a matching character in the Alphabet array, shift the letter according to the @num provided.
                    if (alpLow.includes(lower[i])) {
                        //adding the letters that has shifted according to the @num provided.
                        secretMsg += alpLow[newIndex];
                    } else {
                        //if there's no matching character in the Alphabet array, add the original character.
                        secretMsg += lower[i];
                    }
                }
        }
        
        
        } else if (command === "decrypt") {
    
        }
    }
    console.log(secretMsg)
}


// *Testing the error messages
cipher(""); //> You must input a proper command!
cipher("command"); //> You must input a proper command!
cipher("encrypt"); //> You must insert a proper text!
cipher("encrypt", ""); //> You must insert a proper text!
cipher("encrypt", "any"); //> You must insert a proper number!
cipher("encrypt", "any", "z"); //> You must insert a proper number!

// *Testing a simple word
cipher("encrypt", "hello", 1); //> ifmmp
// *Testing a simple sentence with non-existent characters
cipher("encrypt", "Hello, my name is Jinseok!", 2); //> jgnnq, oa pcog ku lkpugqm!
// *Testing with number beyond the length of Alphabet array
cipher("encrypt", "zizzi’s zippy zipper zips.", 54); //> bkbbk’u bkrra bkrrgt bkru.

