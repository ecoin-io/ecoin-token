// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";


contract EcoinToken is ERC20, ERC20Burnable {
    using SafeERC20 for IERC20;

    constructor () ERC20("eCoin.io", "eCoin") {
        _mint(msg.sender, 1000000000 * (10 ** uint256(decimals())));
    }
}