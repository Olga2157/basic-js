const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    if (reverse === true) {
      this.reverse = true;
    } else {
      this.reverse = false;
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Err");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptShifr = [];
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (keyIndex == key.length) {
        keyIndex = 0;
      }
      if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
        encryptShifr.push(message[i]);
      } else {
        let messageChar = message.charCodeAt(i) - 65;
        let keyChar = key.charCodeAt(keyIndex) - 65;
        let encryptShifrCode = (messageChar + keyChar) % 26;
        encryptShifr.push(String.fromCharCode(encryptShifrCode + 65));
        keyIndex++;
      }
    }
    if (this.reverse) {
      return encryptShifr.reverse().join("");
    } else {
      // передаем из массива в строку
      return encryptShifr.join("");
    }
  }
  decrypt(encryptedMessage, key) {
    {
      if (!encryptedMessage || !key) {
        throw new Error("Err");
      }
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      let decryptShifr = [];
      let keyIndex = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (keyIndex == key.length) {
          keyIndex = 0;
        }
        if (
          encryptedMessage.charCodeAt(i) > 90 ||
          encryptedMessage.charCodeAt(i) < 65
        ) {
          decryptShifr.push(encryptedMessage[i]);
        } else {
          let messageChar = encryptedMessage.charCodeAt(i) - 65;
          let keyChar = key.charCodeAt(keyIndex) - 65;
          let decryptShifrCode = (messageChar - keyChar + 26) % 26;
          decryptShifr.push(String.fromCharCode(decryptShifrCode + 65));
          keyIndex++;
        }
      }
      if (this.reverse) {
        return decryptShifr.reverse().join("");
      } else {
        return decryptShifr.join("");
      }
    }
  }
}

// Encryption
// The plaintext(P) and key(K) are added modulo 26.
// Ei = (Pi + Ki) mod 26

// Decryption
// Di = (Ei - Ki + 26) mod 26

module.exports = VigenereCipheringMachine;

// Our machine will have 2 modifications: direct and reverse
// (the type of machine is determined at the moment of creation).
// The direct machine simply encodes and decodes the string that was transmitted to it,
// and the reverse machine returns an inverted string after encoding and decoding.

// Your task is to implement the class VigenereCipheringMachine.
// constructor of this class accepts true (or nothing)
// to create direct machine and false to create reverse machine.
// Each instance of VigenereCipheringMachine must have 2 methods: encrypt and decrypt.

// encrypt method accepts 2 parameters:
// message (string to encode) and key (string-keyword).

// decrypt method accepts 2 parameters:
// encryptedMessage (string to decode) and key (string-keyword).

// These parameters for both methods are mandatory.
// If at least one of them has not been given, an Error must be thrown.
// The text returned by these methods must be uppercase.
// Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).

// You don't need to validate value sent to constructor and to encrypt
// and decrypt methods (except throwing an Error on absence of argument for these methods).
