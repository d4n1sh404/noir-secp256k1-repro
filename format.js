const toHexString = (decimal) => {
  let hexString = BigInt(decimal).toString(16);
 
  if (hexString.length % 2 !== 0) {
    hexString = "0" + hexString;
  }
 
  return `"0x${hexString}"`;
};
const arrayToHexString =array => array.map(toHexString);



const splitTwo = (string) => string.match(/.{1,2}/g); 
const toDecimal = (array) => array.map(item => parseInt(item, 16));
const formatString = (string) => toDecimal(splitTwo(string));

const formatToDecimalBytes = (jsonText) => {
const json = JSON.parse(jsonText);
const {hashes, keys, commitment} = json;

const {testHash} = hashes;
const [publicKeyX, publicKeyY] = keys.publicKey.key;
const {signedCommitmentHex} = commitment;


const formatted = {
    publicKeyX: formatString(publicKeyX),
    publicKeyY: formatString(publicKeyY),
    signature: formatString(signedCommitmentHex) ,
    message: formatString(testHash),
}

return formatted;

} 

export const formatProver = (jsonText) => {

let formattedObject = formatToDecimalBytes(jsonText);

let formatText = "";

Object.keys(formattedObject).map(key => {
let value = formattedObject[key];

formatText += `${key} = [${value}]\n`;

})
  
return formatText;
}

export const formatTest = (jsonText) => {

 
 let formattedObject = formatToDecimalBytes(jsonText);

let formatText = "";

Object.keys(formattedObject).map(key => {
let value = formattedObject[key];

formatText += `[${value}],\n`;
})

 return formatText;
}



