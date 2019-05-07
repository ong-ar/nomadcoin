const CryptoJS = require("crypto-js");

// new Block(1, 0, 0, 420490124, 'hello') 모든 값을 해시로 만듬
// 이전 블록 해시를 현재 블록에 넣음으로써 체인이 이뤄진다.
class Block {
  constructor(index, hash, previousHash, timestamp, data) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

// https://passwordsgenerator.net/sha256-hash-generator/ 에서 해시값 생성
// input: 01557221620026첫번째 블록!!
const genesisBlock = new Block(
  0,
  "B802CBCCCDC8217BCC406D94AFB4CC3F98CD83FB0270D6F784BFBB773B09A8C5",
  null,
  1557221620026,
  "첫번째 블록!!"
);

let blockchain = [genesisBlock];

// console.log(blockchain);
// node src/blockchain.js

// 마지막 블록 정보
const getLastBlock = () => blockchain[blockchain.length - 1];

// 현재 타임 가져오기
const getTimeStamp = () => new Date().getTime();

// 블록 해시 만들기
const createHash = (index, previousHash, timestamp, data) =>
  CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

// 블록 생성
const createNewBlock = data => {
  // 마지막 블록 정보
  const previousBlock = getLastBlock();
  // 마지막 블록 index + 1
  const newBlockIndex = previousBlock.index + 1;
  // 현재 시간
  const newTimestamp = getTimeStamp();
  // 현재 블록 해시 생성
  const newHash = createHash(
    newBlockIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock = new Block(
    newBlockIndex,
    newHash,
    previousBlock.hash,
    newTimestamp,
    data
  );
  return newBlock;
};

const getBlocksHash = block =>
  createHash(block.index, block.previousBlock, block.timestamp, block.data);

const isNewBlockValid = (candidateBlock, latestBlock) => {
  if (latestBlock.index + 1 !== candidateBlock.index) {
    console.log("The candidate block doesn't have a valid index");
    return false;
  } else if (latestBlock.hash !== candidateBlock.previousHash) {
    console.log(
      "The previousHash of candidate block is not the hash of the latest block"
    );
    return false;
  } else if (candidateBlock.hash !== getBlocksHash(candidateBlock)) {
    console.log("The hash of this block is invalid");
    return false;
  }
  return true;
};
