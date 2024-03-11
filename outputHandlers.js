import fs from 'fs';


export const createJsonOutput = (data, path = ".") => {

 
  fs.writeFileSync(`${path}/data.json`,data);
  
  console.log("----------------JSON Data-----------------------------");
  console.log(data+"\n");
}

export const createProverOutput = (data, circuitPath = "./secp_verify") => {

  fs.writeFileSync(`${circuitPath}/Prover.toml`,data);
  
  console.log("------------------Prover.toml-------------------------");
  console.log(data);
}

export const createTestOutput = (data, mainFilePath) => {

  console.log(data);

  const testWrapper = `
  #[test]
  fn test_main() {
   main(${data})
  }
  `;
  
  //fs.appendFileSync(`${circuitPath}/src/main.nr`,data);
  
  console.log("------------------Test values-------------------------------");
  console.log(testWrapper);
};
