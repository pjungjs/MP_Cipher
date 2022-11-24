/**
 * cipherObj() - Alphabet assigned in an Object
 * ---------------------------------------------
 * To Encrypt or Decrypt a message by shifting Alphabetic order (based on Caesar Cipher plus more features).
 * A function that takes 2 parameters:
 * @param {string} - a string of a text.
 * @param {number} - a positive or negative interger, to shift the encryption or decryption.
 * @returns {string} - the original text converted to a new encrypted or decrypted message.
 * 
 * EXAMPLE:
 * const msg = "Hello, my name is Jinseok!";
 * const num = 2;
 * cipherObj(msg, num);
 * //> "jgnnq, oa pcog ku lkpugqm!"
*/
//0-25 (26 letters)
const alpLow = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'};

function cipherObj(msg, num) {
    let secretMsg = '';
    
    if ((msg !== undefined && msg.length > 0) && (num !== undefined && !isNaN(num))) {
        const lower = msg.toLowerCase();
        for (let i = 0; i < lower.length; i++) {
            let indLetter = Number(Object.keys(alpLow).find(key => alpLow[key] === lower[i]));

            if (!alpLow[indLetter]) {
                secretMsg += lower[i];
            } else {
                let newIndex = indLetter + num;

                if (newIndex > 0) {
                    while (newIndex >= Object.keys(alpLow).length) {
                        newIndex -= Object.keys(alpLow).length;
                    }
                } else if (newIndex <= 0) {                 
                    while (alpLow[newIndex] === undefined) {
                        newIndex = Object.keys(alpLow).length + newIndex;
                    }
                }
                if (newIndex === 0) {
                    newIndex = Object.keys(alpLow).length;
                }

                if (msg[i] === msg[i].toUpperCase()) {
                    secretMsg += alpLow[newIndex].toUpperCase();
                } else if (msg[i] === msg[i].toLowerCase()) {
                    secretMsg += alpLow[newIndex].toLowerCase();
                }
            }
        }
    }
    console.log(secretMsg);
}

// *There are no error messages logging to the console in this function
// *Testing a simple word and shifting number
cipherObj("hello", 0); //> hello
cipherObj("hello", 1); //> ifmmp

// *Testing a simple sentence with non-existent characters
cipherObj("Hello, my name is Jinseok!", 2); //> Jgnnq, oa pcog ku Lkpugqm!
// *Testing with number beyond the length of Alphabet array
cipherObj("zizzi’s zippy zipper zips.", 54); //> bkbbk’u bkrra bkrrgt bkru.
// *Testing with a negative number.
cipherObj("Can an active actor always actually act accurately?", -30); //> Ywj wj wypera wypkn whswuo wypqwhhu wyp wyyqnwpahu?
// *Testing absurd numbers
cipherObj("abcdefghijklmnopqrstuvwxyz", 500); //> ghijklmnopqrstuvwxyzabcdef
cipherObj("ghijklmnopqrstuvwxyzabcdef", -500) //> abcdefghijklmnopqrstuvwxyz
