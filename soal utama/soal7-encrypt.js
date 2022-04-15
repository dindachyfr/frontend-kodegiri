import sha256 from 'crypto-js/sha256.js';

const encryptText = (textToEncrypt) => {
    if (textToEncrypt !== '') {
        let encrypted = sha256(textToEncrypt).toString();
        return encrypted
    }
    else
        return 'Please fill in variable textToEncrypt with string'
}

console.log(encryptText("15042022dindapriaifabula"));
