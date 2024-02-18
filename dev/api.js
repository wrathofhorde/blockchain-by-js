import { v4 as uuid } from "uuid";
import express from "express";
import bodyParser from "body-parser";
import Blockchain from "./blockchain";

const bitcoin = new Blockchain();
const nodeAddress = uuid().split("-").join("");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, Bitcoin!");
});

app.get("/blockchain", (req, res) => {
  res.send(bitcoin);
});

app.get("/mine", (req, res) => {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock["hash"];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock["index"] + 1,
  };

  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  bitcoin.createNewTransaction(12.5, "00", nodeAddress);

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  const note = "New block mined successfully";

  res.json({
    note,
    block: newBlock,
  });
});

app.post("/transaction", (req, res) => {
  const { amount, sender, recipient } = req.body;
  // console.log(amount, sender, recipient);
  const blockIndex = bitcoin.createNewTransaction(amount, sender, recipient);
  const note = `Transaction will be added in block ${blockIndex}.`;
  res.json({ note });
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}...`);
});
