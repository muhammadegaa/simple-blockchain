const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('93f5afaf6416f4d5b049f02be902ef579eb63164bbe3d8b70f1b730405ef0819');
const myWalletAddress = myKey.getPublic('hex');

let eCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
eCoin.addTransaction(tx1);


console.log('\n Starting the miner...');
eCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', eCoin.getBalanceOfAddress(myWalletAddress));


// console.log('Mining block 1...');
// eCoin.addBlock(new Block(1, "12/01/2021", { amount: 3 }));

// console.log('Mining block 2...');
// eCoin.addBlock(new Block(2, "14/01/2021", { amount: 15 }));


// First Vid
// console.log('Is blockchain valid? ' + eCoin.isChainValid());

// eCoin.chain[1].data = { amount: 100 };
// eCoin.chain[1].hash = eCoin.chain[1].calculateHash();

// console.log('Is blockchain valid? ' + eCoin.isChainValid());


// console.log(JSON.stringify(eCoin, null, 4));

// Second Vid