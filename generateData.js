import elliptic from "elliptic";
import crypto from "crypto";
import fs from "fs";

const { ec } = elliptic;

const joinAndPadSignature = (r, s) => {
  const rBuffer = r.toArrayLike(Buffer, "be", 32);
  const sBuffer = s.toArrayLike(Buffer, "be", 32);
  const signature64Bytes = Buffer.concat([rBuffer, sBuffer]).toString("hex");
  return signature64Bytes;
};

export const generateTestData = () => {
  const ecCurve = new ec("secp256k1");
  const keyPair = ecCurve.genKeyPair();

  const privateKeyHex = keyPair.getPrivate("hex");
  const publicKeyHex = keyPair.getPublic("hex");

  const testString = "test";
  const testHash = crypto.createHash("sha256").update(testString).digest("hex");

  const privateKey = ecCurve.keyFromPrivate(privateKeyHex, "hex");
  const publicKey = ecCurve.keyFromPrivate(publicKeyHex, "hex");

  const signedCommitment = privateKey.sign(testHash, { canonical: true });
  const signedCommitmentHex = joinAndPadSignature(
    signedCommitment.r,
    signedCommitment.s
  );

  let data = {
    hashes: {
      testHash: testHash,
    },
    keys: {
      publicKey: { key: keyPair.getPublic(), hex: publicKeyHex },
      privateKey: { key: keyPair.getPrivate(), hex: privateKeyHex },
    },
    commitment: {
      signedCommitment,
      signedCommitmentHex,
    },
  };

  return JSON.stringify(
    data,
    (key, value) => {
      return typeof value === "bigint" ? value.toString() : value;
    },
    4
  );
};

