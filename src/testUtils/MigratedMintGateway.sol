// SPDX-License-Identifier: GPL-3.0

// solhint-disable-next-line
pragma solidity ^0.8.0;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import {RenAssetV2} from "../RenAsset/RenAsset.sol";
import {GatewayStateV3, GatewayStateManagerV3} from "../Gateways/common/GatewayState.sol";
import {RenVMHashes} from "../Gateways/common/RenVMHashes.sol";
import {IMintGateway} from "../Gateways/interfaces/IMintGateway.sol";
import {MintGatewayV3} from "../Gateways/MintGateway.sol";
import {CORRECT_SIGNATURE_RETURN_VALUE_} from "../Gateways/RenVMSignatureVerifier.sol";

// TESTING CONTRACT
contract MigratedMintGateway is Initializable, GatewayStateV3, GatewayStateManagerV3, IMintGateway {
    MintGatewayV3 public nextGateway;

    function setNextGateway(address nextGateway_) public onlySignatureVerifierOwner {
        nextGateway = MintGatewayV3(nextGateway_);
    }

    function mint(
        bytes32 pHash,
        uint256 amount,
        bytes32 nHash,
        bytes calldata sig
    ) external override returns (uint256) {
        return nextGateway._mintFromPreviousGateway(pHash, amount, nHash, sig, _msgSender());
    }

    function burnWithPayload(
        string calldata recipientAddress,
        string calldata recipientChain,
        bytes calldata recipientPayload,
        uint256 amount
    ) external override returns (uint256) {
        return
            nextGateway._burnFromPreviousGateway(
                recipientAddress,
                recipientChain,
                recipientPayload,
                amount,
                _msgSender()
            );
    }

    function burn(string calldata recipient, uint256 amount) external virtual override returns (uint256) {
        return nextGateway._burnFromPreviousGateway(recipient, "", "", amount, _msgSender());
    }

    function burn(bytes calldata recipient, uint256 amount) external virtual override returns (uint256) {
        return nextGateway._burnFromPreviousGateway(string(recipient), "", "", amount, _msgSender());
    }
}
