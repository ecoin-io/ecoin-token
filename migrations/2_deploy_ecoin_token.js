const EcoinToken = artifacts.require("EcoinToken");

module.exports = function (deployer) {
  deployer.deploy(EcoinToken);
};
