/* ---------------------ENIGMA----------------------*/

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const searchIndex = (alphabet, letter) => {
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) return i;
    }
    return -1;
};

const transformLetter = (origin, outcome, letter) => {
  let letterIndex = searchIndex(origin, letter);
  if (letterIndex > -1) {
    return outcome[letterIndex];
  } else {
    return letter
  };
};

const getEncryptedMessage = () => {
    let message = document.getElementById("plain-text").value;
    let lowerCaseMessage = message.toLowerCase();
    let result = "";
    for (let letter of lowerCaseMessage) {
        result = result + transformLetter(plainAlphabet, encryptedAlphabet, letter);
    }
    return result;
};

const submitEncryptedMessage = (result) => {
  document.getElementById("encrypted-text").innerText = getEncryptedMessage(result);
}

document.getElementById("encrypt-btn").addEventListener("click", submitEncryptedMessage);


const getDecryptedMessage = () => {
    let message = document.getElementById("encrypted-text").value; 
    let lowerCaseMessage = message.toLowerCase();
    let result = "";
    for (let letter of lowerCaseMessage) {
        result = result + transformLetter(encryptedAlphabet, plainAlphabet, letter);
    }
    return result;
};

const submitDecryptedMessage = (result) => {
  document.getElementById("plain-text").innerText = getDecryptedMessage(result);
}

document.getElementById("decrypt-btn").addEventListener("click", submitDecryptedMessage);



/* ---------------------GENERADOR ALEATORIO----------------------*/
const randomPick = (n, min, max) => {
  let randomNumbers=[];
  for (let i = 0; i < n; i++) {
      let num = Math.floor( Math.random() * max) + min;
      if(randomNumbers.includes(num)){
          i=i-1;
      } else if (num <= max) {
          randomNumbers.push(num);
      }
  }
  return randomNumbers;
}

console.log(randomPick(10,1,100));
console.log(randomPick(10,1,100));
console.log(randomPick(10,1,100));
