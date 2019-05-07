class Block {
  constructor(index, hash, previousHash, timestamp, data) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

// new Block(1, 0, 0, 420490124, 'hello') 모든 값을 해시로 만듬
// 이전 블록 해시를 현재 블록에 넣음으로써 체인이 이뤄진다.
