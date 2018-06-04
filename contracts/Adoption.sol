pragma solidity ^0.4.17;

contract Adoption {
    address[16] public adopters;

    event Adopt(address indexed _adopter);

    //adopting a pet
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        //emit an event in block for our listener to catch it
        emit Adopt(msg.sender);

        return petId;
    }

    //get array of adopters
    function getAdopters() public view returns (address[16]) {
        return adopters;
    }
}