const Token = artifacts.require("Token");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Token, 21000000);
};
