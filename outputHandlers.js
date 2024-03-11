import fs from 'fs';

export const createProverOutput = (data, circuitPath = "./secp_verify") => {

  fs.writeFileSync(`${circuitPath}/Prover.toml`,data);
  
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
  
  console.log(testWrapper);
};
