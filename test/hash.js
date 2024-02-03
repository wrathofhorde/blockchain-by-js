import Blockchain from "../dev/blockchain";

const bitcoin = new Blockchain();

const previousBlockHash =
  "50bf6eda0acd3d1e67d7437449ef192537edd0c12e05d17add7a3b13bd4ccd1f";
const currentBlockData1 = [
  {
    amount: 10, //👈
    sender: "32ef23a385e90d34c19b40f0d619e7f6",
    recipient: "3415e661d075f676336b7b9bc26470f5",
  },
  {
    amount: 17,
    sender: "leef23a385e90d34c19b40f0d619e7f6",
    recipient: "zp15e661d075f676336b7b9bc26470f5",
  },
];
const currentBlockData2 = [
  {
    amount: 1, //👈
    sender: "32ef23a385e90d34c19b40f0d619e7f6",
    recipient: "3415e661d075f676336b7b9bc26470f5",
  },
  {
    amount: 17,
    sender: "leef23a385e90d34c19b40f0d619e7f6",
    recipient: "zp15e661d075f676336b7b9bc26470f5",
  },
];
const nonce = 100;

const hash1 = bitcoin.hashBlock(previousBlockHash, currentBlockData1, nonce);
const hash2 = bitcoin.hashBlock(previousBlockHash, currentBlockData2, nonce);
const hash3 = bitcoin.hashBlock(previousBlockHash, currentBlockData1, nonce);

console.log(`data1: ${hash1}`);
console.log(`data2: ${hash2}`);
console.log(`data3: ${hash3}`);
