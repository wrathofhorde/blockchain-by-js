import promptSync from "prompt-sync";

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce,
    previousBlockHash,
    hash,
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

const prompt = promptSync();
let input = prompt("Create bitcoin");
console.log(input);
const bitcoin = new Blockchain();
console.log(bitcoin);

console.log("create noew block");
bitcoin.createNewBlock(100, "2F9GLPJQS4", "UQEQJKNRXE");
console.log(bitcoin);
bitcoin.createNewBlock(200, "UV4I1YNE4G", "EN041ESTRI");
console.log(bitcoin);
bitcoin.createNewBlock(300, "16PMM8IZ3S", "W2TQPLBXSP");
console.log(bitcoin);
