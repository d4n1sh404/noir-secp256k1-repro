import {generateTestData} from './generateData.js';
import {formatProver, formatTest} from './format.js';
import {verifyData} from './verify.js';
import {createProverOutput, createTestOutput} from './outputHandlers.js';

const init = () => {

let data = generateTestData();
let isVerified = verifyData(data);


if(!isVerified){
console.log(`Data verify after stringify failed!!`)
return;
}

let proverData = formatProver(data); 
createProverOutput(proverData);

let testData = formatTest(data);
createTestOutput(testData);
 

}


init();
