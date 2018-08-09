var Existing = artifacts.require("Existing");
var Deployed = artifacts.require("Deployed");

module.exports = function(deployer) {
  //pass the 'Deployed' contract address to the 'Existing' contract constructor
  console.log('deploying Existing contract with Deployed address: '+Deployed.address);
  deployer.deploy(Existing, Deployed.address);
};