import elliptic from "elliptic";


const { ec } = elliptic;

export const verifyData = (jsonText) => {

  const data = JSON.parse(jsonText);
  
  const { publicKey } = data.keys;
  const { testHash } = data.hashes;
  const { signedCommitment } = data.commitment;
  const ecCurve = new ec("secp256k1");

  const pk = ecCurve.keyFromPublic(publicKey.hex, "hex");

  const test = pk.verify(testHash, signedCommitment);
  return test;
};

