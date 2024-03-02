/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Transceiver, TransceiverInterface } from "../Transceiver";

const _abi = [
  {
    type: "function",
    name: "getMigratesImmutables",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNttManagerOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNttManagerToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "migrate",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "nttManager",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nttManagerToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pauser",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quoteDeliveryPrice",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "instruction",
        type: "tuple",
        internalType: "struct TransceiverStructs.TransceiverInstruction",
        components: [
          {
            name: "index",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "sendMessage",
    inputs: [
      {
        name: "recipientChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "instruction",
        type: "tuple",
        internalType: "struct TransceiverStructs.TransceiverInstruction",
        components: [
          {
            name: "index",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "nttManagerMessage",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "recipientNttManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferPauserCapability",
    inputs: [
      {
        name: "newPauser",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferTransceiverOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgrade",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AdminChanged",
    inputs: [
      {
        name: "previousAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BeaconUpgraded",
    inputs: [
      {
        name: "beacon",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NotPaused",
    inputs: [
      {
        name: "notPaused",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "paused",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PauserTransferred",
    inputs: [
      {
        name: "oldPauser",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newPauser",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "CallerNotNttManager",
    inputs: [
      {
        name: "caller",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "CannotRenounceTransceiverOwnership",
    inputs: [
      {
        name: "currentOwner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "CannotTransferTransceiverOwnership",
    inputs: [
      {
        name: "currentOwner",
        type: "address",
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPauser",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "NotMigrating",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyDelegateCall",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: [],
  },
  {
    type: "error",
    name: "RequireContractIsNotPaused",
    inputs: [],
  },
  {
    type: "error",
    name: "RequireContractIsPaused",
    inputs: [],
  },
  {
    type: "error",
    name: "UnexpectedDeployer",
    inputs: [
      {
        name: "deployer",
        type: "address",
        internalType: "address",
      },
      {
        name: "caller",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "UnexpectedRecipientNttManagerAddress",
    inputs: [
      {
        name: "recipientNttManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "expectedRecipientNttManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
] as const;

export class Transceiver__factory {
  static readonly abi = _abi;
  static createInterface(): TransceiverInterface {
    return new utils.Interface(_abi) as TransceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Transceiver {
    return new Contract(address, _abi, signerOrProvider) as Transceiver;
  }
}
