const ZCToken = artifacts.require("./ZCToken.sol");

module.exports = function (deployer) {
    deployer.deploy(ZCToken);
};