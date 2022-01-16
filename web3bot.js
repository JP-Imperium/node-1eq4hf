const request = require('request');
const Web3 = require('web3');
const util = require('util');

const bsc = 'https://bsc-dataseed.binance.org/';

try {
  const init1 = async () => {
    let stop = false;
    const web3 = await new Web3(new Web3.providers.HttpProvider(bsc));

    await web3.eth.accounts.wallet.add({
      privateKey:
        '0cf5bc4d01c1ed363d0bdcc3f06a97b2c9c3aefa5c0a179a8f9740eedba0b3be',
      address: '0x60Bc21B76d91c59580aC6E139A61a7D504bA41B7',
    });
  };
  init1();
} catch (err) {
  console.log('errs');
  console.log(err);
}
