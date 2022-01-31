const EcoinToken = artifacts.require('EcoinToken');
const BN = require('bn.js');
var expect = require('chai').expect;
const DECIMALS = 18;

contract("EcoinToken", (accounts) => {
  let [alice, bob] = accounts;
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await EcoinToken.new();
  });
  
  it("transfers 100 mil to creator", async () => {
    const aliceBalance = await contractInstance.balanceOf(alice)
    expect(aliceBalance.toString()).to.equal("1000000000000000000000000000");

  });

  it("allows for transfers", async () => {
    await contractInstance.transfer(bob, "5000000000000000000", {from: alice});
    const bobBalance = await contractInstance.balanceOf(bob)
    expect(bobBalance.toString()).to.equal("5000000000000000000");
  });

  it("has 18 decimals", async () => {
    const decimals = await contractInstance.decimals()
    expect(decimals.toString()).to.equal("18")
  });

});
