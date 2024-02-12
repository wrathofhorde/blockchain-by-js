import Blockchain from "../dev/blockchain";

const bitcoin = new Blockchain();

const previousBlockHash = "MEBX0KYPRMR66GNEBUP4NJPALQTSYHJKWSXC9POP5";
const currentBlockData = [
  {
    amount: 43,
    sender: "OJHkZWNWOHRPCEJAGK9J",
    recipient: "63BEFZ42ZMC3EMSQYVNH",
  },
  {
    amount: 5,
    sender: "TULAWHUYHM2RXN82KEDU",
    recipient: "KGNGRETO8XADQWTEGBH7",
  },
  {
    amount: 91,
    sender: "W78S7VIPF9C0ZJL4kVMV",
    recipient: "D71B4VP8UFMYP45BOB7O",
  },
];
console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 79633));
