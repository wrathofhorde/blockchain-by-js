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

  this.chain.push(newBlock);
  this.pendingTransactions = [];

  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount,
    sender,
    recipient,
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()["index"] + 1;
};

const bitcoin = new Blockchain();
bitcoin.createNewBlock(100, "2F9GLPJQS4", "UQEQJKNRXE");
bitcoin.createNewTransaction(
  50,
  "16PMM8IZ3SUV4I1YNE4G",
  "W2TQPLBXSPEN041ESTRI"
);
// bitcoin.createNewTransaction(
//   100,
//   "W2TQPLBXSPEN041ESTRI",
//   "16PMM8IZ3SUV4I1YNE4G"
// );
// bitcoin.createNewTransaction(
//   200,
//   "9PMM8IZ398UV4I1YNE4G",
//   "Q2TWPACXSPEN041E9TRI"
// );
console.log(bitcoin);
bitcoin.createNewBlock(200, "UV4I1YNE4G", "EN041ESTRI");
console.log(bitcoin);
console.log("-------------------------------------------------");
console.log(bitcoin.getLastBlock());
console.log("-------------------------------------------------");
