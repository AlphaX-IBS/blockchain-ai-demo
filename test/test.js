var Deployed = artifacts.require("Deployed");
var Existing = artifacts.require("Existing");

contract('Deployed Contract test', async(accounts) => {

    //set the variable a in contract 'Deployed' to 9
    it('should set A to 10', async() => {
        let instance = await Deployed.deployed();

        await instance.setA(10);

        let balance = await instance.a.call();

        assert.equal(10, balance.valueOf(), 'success');
    })

    //get the variable a in contract 'Deployed' from contract 'Existing'
    it('should get 10', async() => {
        let instance = await Existing.deployed();

        let balance = await instance.getA.call();

        assert.equal(10, balance.valueOf(), 'success');
    })

    //set the variable from contract 'Existing'
    it('should set a to 99', async() => {
        let existing = await Existing.deployed();

        await existing.setA(99);

        let deployed = await Deployed.deployed();

        let balance = await deployed.a.call();

        assert.equal(99, balance.valueOf(), 'success');
    })
})