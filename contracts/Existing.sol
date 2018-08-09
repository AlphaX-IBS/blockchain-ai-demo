pragma solidity ^0.4.17;

contract Deployed {
    function setA(uint) public pure returns (uint) {}
    
    function a() public pure returns (uint) {}
    
}

contract Existing  {
    Deployed dc;
    
    constructor(address _t) public {
        dc = Deployed(_t);
    }
 
    function getA() public view returns (uint result) {
        return dc.a();
    }
    
    function setA(uint _val) public returns (uint result) {
        dc.setA(_val);
        return _val;
    }
}