# D.App Demo
## Ethereum Pet-shop with Truffle, Nodejs Express

### Pre-requisite
- Basic understanding of Ethereum blockchain (coins, blocks, mining, mining rewards, validating transactions...). A great quick guide can be found here: https://www.youtube.com/watch?v=bBC-nXj3Ng4&t=1279s
- Know what Smart contract is (and some Solidity along with it): https://blockgeeks.com/guides/smart-contracts/
- Nodejs and Express

### How to deploy GreenX smart contract?
Find the details [here](https://drive.google.com/file/d/1QwUv_6HWj6bVzK6i2P2e3lP9DlsSkybR/view?usp=sharing)

### About this guide
This is a sample project based on Truffle's official tutorial ([pet-shop](http://truffleframework.com/tutorials/pet-shop))  
By *following the above tutorial you should have a good understanding of Truffle*, and how Truffle can simplify the deployment and testing of smart contracts on development environment  
This sample extends the pet-shop by hooking Nodejs's Express module into it

### Step-by-step
1. Download this sample  
   _package.json_
   ```
     "main": "app.js",
     "dependencies": {
       "express": "^4.16.3",
       "truffle-contract": "^3.0.5",
       "web3": "^0.20.1"
     }
   ```  
   Notice the _main_ has changed to `app.js` which was created as our Node application's entry point

2. Execute `npm install`  
This will install Express, truffle-contract & web3 defined in dependencies   
_*note: web3 must be version 0.2x.x, not 1.0.0@beta, truffle-contract doesn't work well with beta version*_

3. Start your local blockchain (ganache, geth...)  
The port number should be default 8545  
_If you want to store data of previous runs on your local machine, specify the path when starting the program_  
_Ganache-cli: ganache --db D:\my_block_chain_data --mnemonic "your mnemonic phrase"_  
_Geth: geth --rpc --datadir D:\my_block_chain_data_  

4. Deploy your contracts  
    Execute   
    ```
    truffle deploy
    ```  
    or   
    ```
    truffle compile
    truffle migrate
    ```  
    should create `Adoption.json` inside `/build/contract` folder, this json file stores all contract information we need, we then pass this entire file to `truffle-contract` and a contract instance will be created, we interact with our deployed contracts with this instance.
    Read more about `truffle-contract` [here](https://github.com/trufflesuite/truffle-contract)

5. Run your application  
Execute `npm run start` or `node app.js`   
Since our app's base route `'/'` is returning the `index.html`  
Open your browser and enter `http://localhost:3000` will give you the pet-shop page as the official Truffle tutorial

6. Testing  
As we're listening for `allEvents` in `app.js`, adopt some pets and it should display the transaction info on the console.


