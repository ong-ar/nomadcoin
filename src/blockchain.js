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
