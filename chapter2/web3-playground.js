var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.getAccounts()
.then(function (accounts) {
console.log(JSON.stringify(accounts, null, 2));
})
.catch(function (error) {
console.error(error);
});

web3.eth.getAccounts()
.then(function (accounts) {
console.log(JSON.stringify(accounts, null, 2));
return accounts;
})
.then(function (accounts) {
var firstAccount = accounts[0];
return web3.eth.getBalance(firstAccount);
})
.then(function (accountBalance) {
console.log('balance in wei: ', accountBalance);
return accountBalance;
})
.catch(function (error) {
console.error(error);
});