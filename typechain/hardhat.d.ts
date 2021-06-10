/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "MinterRole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinterRole__factory>;
    getContractFactory(
      name: "PauserRole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PauserRole__factory>;
    getContractFactory(
      name: "Context",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Context__factory>;
    getContractFactory(
      name: "GSNRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GSNRecipient__factory>;
    getContractFactory(
      name: "IRelayHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRelayHub__factory>;
    getContractFactory(
      name: "IRelayRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRelayRecipient__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Detailed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Detailed__factory>;
    getContractFactory(
      name: "ERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mintable__factory>;
    getContractFactory(
      name: "ERC20Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Pausable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "StandaloneERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StandaloneERC20__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777__factory>;
    getContractFactory(
      name: "IERC777Recipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777Recipient__factory>;
    getContractFactory(
      name: "OpenZeppelinUpgradesOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OpenZeppelinUpgradesOwnable__factory>;
    getContractFactory(
      name: "AdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "BaseAdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "BaseUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "InitializableAdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableAdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "InitializableUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ProxyAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>;
    getContractFactory(
      name: "UpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeabilityProxy__factory>;
    getContractFactory(
      name: "BasicAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasicAdapter__factory>;
    getContractFactory(
      name: "CallAndRefund",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallAndRefund__factory>;
    getContractFactory(
      name: "UniswapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapRouter__factory>;
    getContractFactory(
      name: "GenericAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GenericAdapter__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20WithPermit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20WithPermit__factory>;
    getContractFactory(
      name: "ERC20WithRate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20WithRate__factory>;
    getContractFactory(
      name: "Vesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vesting__factory>;
    getContractFactory(
      name: "GatewayRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewayRegistry__factory>;
    getContractFactory(
      name: "IBurnGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBurnGateway__factory>;
    getContractFactory(
      name: "IGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGateway__factory>;
    getContractFactory(
      name: "IMintGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMintGateway__factory>;
    getContractFactory(
      name: "IGatewayRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGatewayRegistry__factory>;
    getContractFactory(
      name: "LockGatewayLogicV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LockGatewayLogicV1__factory>;
    getContractFactory(
      name: "LockGatewayProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LockGatewayProxy__factory>;
    getContractFactory(
      name: "LockGatewayStateV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LockGatewayStateV1__factory>;
    getContractFactory(
      name: "MintGatewayUpgrader",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintGatewayUpgrader__factory>;
    getContractFactory(
      name: "BCHGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BCHGateway__factory>;
    getContractFactory(
      name: "BTCGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BTCGateway__factory>;
    getContractFactory(
      name: "MintGatewayLogicV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintGatewayLogicV1__factory>;
    getContractFactory(
      name: "MintGatewayStateV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintGatewayStateV1__factory>;
    getContractFactory(
      name: "ZECGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZECGateway__factory>;
    getContractFactory(
      name: "MintGatewayLogicV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintGatewayLogicV2__factory>;
    getContractFactory(
      name: "MintGatewayProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintGatewayProxy__factory>;
    getContractFactory(
      name: "MintGatewayStateV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintGatewayStateV2__factory>;
    getContractFactory(
      name: "RenERC20LogicV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RenERC20LogicV1__factory>;
    getContractFactory(
      name: "RenERC20Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RenERC20Proxy__factory>;
    getContractFactory(
      name: "Claimable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Claimable__factory>;
    getContractFactory(
      name: "RenProxyAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RenProxyAdmin__factory>;
    getContractFactory(
      name: "CanReclaimTokens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CanReclaimTokens__factory>;
    getContractFactory(
      name: "LinkedList",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkedList__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "Claimer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Claimer__factory>;
    getContractFactory(
      name: "ForceSend",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ForceSend__factory>;
    getContractFactory(
      name: "LinkedListTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkedListTest__factory>;
    getContractFactory(
      name: "StringTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StringTest__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}