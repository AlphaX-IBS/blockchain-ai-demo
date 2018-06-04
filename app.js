// Import libraries
var Web3            = require('web3'), //web3@0.21.1, don't use 1.0.0@beta, truffle-contract doesn't work with 1.0.0@beta
    contract        = require('truffle-contract'), //module to integrate with NodeJs
    AdoptionJSON    = require('./build/contracts/Adoption.json'), //json file generated from: truffle compile
    express         = require('express');
    provider        = new Web3.providers.HttpProvider('http://localhost:8545'); //default Ganache's port is 8545

app = express();
//expose src's contents (include index.html)
app.use(express.static(__dirname + '/src'));
//expose contract JSONs for $.getJSON inside index.html
app.use(express.static(__dirname + '/build/contracts'));

//hook root path with Pet-shop's index page
app.get('/',(req,res)=>{
    return res.send('index.html');
});

// Read JSON and attach RPC connection (Provider)
var Adoption = contract(AdoptionJSON);
Adoption.setProvider(provider);

// Use Truffle as usual
Adoption.deployed().then(function(instance) {
    //call getAdopters function inside contract and print a list of 16 adopter addresses
    return instance.getAdopters.call();
}).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});

//watch all events
Adoption.deployed().then(function(instance) {
    //when Adoption contract emits new event 'Adopt', log it out on console
    instance.allEvents(function(err, log){
        if(err) console.log(err);
        console.log(log);  
    })
});

app.listen(3000, ()=>{
    console.log('express listening on port 3000...');
});