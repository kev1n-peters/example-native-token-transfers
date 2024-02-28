/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IWormholeTransceiver {
  export type WormholeTransceiverInstructionStruct = {
    shouldSkipRelayerSend: boolean;
  };

  export type WormholeTransceiverInstructionStructOutput = [boolean] & {
    shouldSkipRelayerSend: boolean;
  };
}

export declare namespace TransceiverStructs {
  export type TransceiverMessageStruct = {
    sourceNttManagerAddress: BytesLike;
    recipientNttManagerAddress: BytesLike;
    nttManagerPayload: BytesLike;
    transceiverPayload: BytesLike;
  };

  export type TransceiverMessageStructOutput = [
    string,
    string,
    string,
    string
  ] & {
    sourceNttManagerAddress: string;
    recipientNttManagerAddress: string;
    nttManagerPayload: string;
    transceiverPayload: string;
  };
}

export interface IWormholeTransceiverInterface extends utils.Interface {
  functions: {
    "encodeWormholeTransceiverInstruction((bool))": FunctionFragment;
    "getWormholePeer(uint16)": FunctionFragment;
    "isSpecialRelayingEnabled(uint16)": FunctionFragment;
    "isVAAConsumed(bytes32)": FunctionFragment;
    "isWormholeEvmChain(uint16)": FunctionFragment;
    "isWormholeRelayingEnabled(uint16)": FunctionFragment;
    "parseWormholeTransceiverInstruction(bytes)": FunctionFragment;
    "receiveMessage(bytes)": FunctionFragment;
    "setIsSpecialRelayingEnabled(uint16,bool)": FunctionFragment;
    "setIsWormholeEvmChain(uint16)": FunctionFragment;
    "setIsWormholeRelayingEnabled(uint16,bool)": FunctionFragment;
    "setWormholePeer(uint16,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "encodeWormholeTransceiverInstruction"
      | "getWormholePeer"
      | "isSpecialRelayingEnabled"
      | "isVAAConsumed"
      | "isWormholeEvmChain"
      | "isWormholeRelayingEnabled"
      | "parseWormholeTransceiverInstruction"
      | "receiveMessage"
      | "setIsSpecialRelayingEnabled"
      | "setIsWormholeEvmChain"
      | "setIsWormholeRelayingEnabled"
      | "setWormholePeer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "encodeWormholeTransceiverInstruction",
    values: [IWormholeTransceiver.WormholeTransceiverInstructionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getWormholePeer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isSpecialRelayingEnabled",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isVAAConsumed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isWormholeEvmChain",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isWormholeRelayingEnabled",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "parseWormholeTransceiverInstruction",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsSpecialRelayingEnabled",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsWormholeEvmChain",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsWormholeRelayingEnabled",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setWormholePeer",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "encodeWormholeTransceiverInstruction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWormholePeer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSpecialRelayingEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isVAAConsumed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWormholeEvmChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWormholeRelayingEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseWormholeTransceiverInstruction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsSpecialRelayingEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsWormholeEvmChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsWormholeRelayingEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWormholePeer",
    data: BytesLike
  ): Result;

  events: {
    "ReceivedMessage(bytes32,uint16,bytes32,uint64)": EventFragment;
    "ReceivedRelayedMessage(bytes32,uint16,bytes32)": EventFragment;
    "RelayingInfo(uint8,uint256)": EventFragment;
    "SendTransceiverMessage(uint16,(bytes32,bytes32,bytes,bytes))": EventFragment;
    "SetIsSpecialRelayingEnabled(uint16,bool)": EventFragment;
    "SetIsWormholeEvmChain(uint16)": EventFragment;
    "SetIsWormholeRelayingEnabled(uint16,bool)": EventFragment;
    "SetWormholePeer(uint16,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ReceivedMessage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceivedRelayedMessage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayingInfo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendTransceiverMessage"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SetIsSpecialRelayingEnabled"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetIsWormholeEvmChain"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SetIsWormholeRelayingEnabled"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetWormholePeer"): EventFragment;
}

export interface ReceivedMessageEventObject {
  digest: string;
  emitterChainId: number;
  emitterAddress: string;
  sequence: BigNumber;
}
export type ReceivedMessageEvent = TypedEvent<
  [string, number, string, BigNumber],
  ReceivedMessageEventObject
>;

export type ReceivedMessageEventFilter = TypedEventFilter<ReceivedMessageEvent>;

export interface ReceivedRelayedMessageEventObject {
  digest: string;
  emitterChainId: number;
  emitterAddress: string;
}
export type ReceivedRelayedMessageEvent = TypedEvent<
  [string, number, string],
  ReceivedRelayedMessageEventObject
>;

export type ReceivedRelayedMessageEventFilter =
  TypedEventFilter<ReceivedRelayedMessageEvent>;

export interface RelayingInfoEventObject {
  relayingType: number;
  deliveryPayment: BigNumber;
}
export type RelayingInfoEvent = TypedEvent<
  [number, BigNumber],
  RelayingInfoEventObject
>;

export type RelayingInfoEventFilter = TypedEventFilter<RelayingInfoEvent>;

export interface SendTransceiverMessageEventObject {
  recipientChain: number;
  message: TransceiverStructs.TransceiverMessageStructOutput;
}
export type SendTransceiverMessageEvent = TypedEvent<
  [number, TransceiverStructs.TransceiverMessageStructOutput],
  SendTransceiverMessageEventObject
>;

export type SendTransceiverMessageEventFilter =
  TypedEventFilter<SendTransceiverMessageEvent>;

export interface SetIsSpecialRelayingEnabledEventObject {
  chainId: number;
  isRelayingEnabled: boolean;
}
export type SetIsSpecialRelayingEnabledEvent = TypedEvent<
  [number, boolean],
  SetIsSpecialRelayingEnabledEventObject
>;

export type SetIsSpecialRelayingEnabledEventFilter =
  TypedEventFilter<SetIsSpecialRelayingEnabledEvent>;

export interface SetIsWormholeEvmChainEventObject {
  chainId: number;
}
export type SetIsWormholeEvmChainEvent = TypedEvent<
  [number],
  SetIsWormholeEvmChainEventObject
>;

export type SetIsWormholeEvmChainEventFilter =
  TypedEventFilter<SetIsWormholeEvmChainEvent>;

export interface SetIsWormholeRelayingEnabledEventObject {
  chainId: number;
  isRelayingEnabled: boolean;
}
export type SetIsWormholeRelayingEnabledEvent = TypedEvent<
  [number, boolean],
  SetIsWormholeRelayingEnabledEventObject
>;

export type SetIsWormholeRelayingEnabledEventFilter =
  TypedEventFilter<SetIsWormholeRelayingEnabledEvent>;

export interface SetWormholePeerEventObject {
  chainId: number;
  peerContract: string;
}
export type SetWormholePeerEvent = TypedEvent<
  [number, string],
  SetWormholePeerEventObject
>;

export type SetWormholePeerEventFilter = TypedEventFilter<SetWormholePeerEvent>;

export interface IWormholeTransceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWormholeTransceiverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    encodeWormholeTransceiverInstruction(
      instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getWormholePeer(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isSpecialRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isVAAConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWormholeRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    parseWormholeTransceiverInstruction(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [IWormholeTransceiver.WormholeTransceiverInstructionStructOutput] & {
        instruction: IWormholeTransceiver.WormholeTransceiverInstructionStructOutput;
      }
    >;

    receiveMessage(
      encodedMessage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setIsSpecialRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setIsWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setIsWormholeRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setWormholePeer(
      chainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  encodeWormholeTransceiverInstruction(
    instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getWormholePeer(
    chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isSpecialRelayingEnabled(
    chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isVAAConsumed(hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isWormholeEvmChain(
    chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWormholeRelayingEnabled(
    chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  parseWormholeTransceiverInstruction(
    encoded: BytesLike,
    overrides?: CallOverrides
  ): Promise<IWormholeTransceiver.WormholeTransceiverInstructionStructOutput>;

  receiveMessage(
    encodedMessage: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setIsSpecialRelayingEnabled(
    chainId: BigNumberish,
    isRelayingEnabled: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setIsWormholeEvmChain(
    chainId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setIsWormholeRelayingEnabled(
    chainId: BigNumberish,
    isRelayingEnabled: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setWormholePeer(
    chainId: BigNumberish,
    peerContract: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    encodeWormholeTransceiverInstruction(
      instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getWormholePeer(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isSpecialRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isVAAConsumed(hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWormholeRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    parseWormholeTransceiverInstruction(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<IWormholeTransceiver.WormholeTransceiverInstructionStructOutput>;

    receiveMessage(
      encodedMessage: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsSpecialRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsWormholeRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setWormholePeer(
      chainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ReceivedMessage(bytes32,uint16,bytes32,uint64)"(
      digest?: null,
      emitterChainId?: null,
      emitterAddress?: null,
      sequence?: null
    ): ReceivedMessageEventFilter;
    ReceivedMessage(
      digest?: null,
      emitterChainId?: null,
      emitterAddress?: null,
      sequence?: null
    ): ReceivedMessageEventFilter;

    "ReceivedRelayedMessage(bytes32,uint16,bytes32)"(
      digest?: null,
      emitterChainId?: null,
      emitterAddress?: null
    ): ReceivedRelayedMessageEventFilter;
    ReceivedRelayedMessage(
      digest?: null,
      emitterChainId?: null,
      emitterAddress?: null
    ): ReceivedRelayedMessageEventFilter;

    "RelayingInfo(uint8,uint256)"(
      relayingType?: null,
      deliveryPayment?: null
    ): RelayingInfoEventFilter;
    RelayingInfo(
      relayingType?: null,
      deliveryPayment?: null
    ): RelayingInfoEventFilter;

    "SendTransceiverMessage(uint16,(bytes32,bytes32,bytes,bytes))"(
      recipientChain?: null,
      message?: null
    ): SendTransceiverMessageEventFilter;
    SendTransceiverMessage(
      recipientChain?: null,
      message?: null
    ): SendTransceiverMessageEventFilter;

    "SetIsSpecialRelayingEnabled(uint16,bool)"(
      chainId?: null,
      isRelayingEnabled?: null
    ): SetIsSpecialRelayingEnabledEventFilter;
    SetIsSpecialRelayingEnabled(
      chainId?: null,
      isRelayingEnabled?: null
    ): SetIsSpecialRelayingEnabledEventFilter;

    "SetIsWormholeEvmChain(uint16)"(
      chainId?: null
    ): SetIsWormholeEvmChainEventFilter;
    SetIsWormholeEvmChain(chainId?: null): SetIsWormholeEvmChainEventFilter;

    "SetIsWormholeRelayingEnabled(uint16,bool)"(
      chainId?: null,
      isRelayingEnabled?: null
    ): SetIsWormholeRelayingEnabledEventFilter;
    SetIsWormholeRelayingEnabled(
      chainId?: null,
      isRelayingEnabled?: null
    ): SetIsWormholeRelayingEnabledEventFilter;

    "SetWormholePeer(uint16,bytes32)"(
      chainId?: null,
      peerContract?: null
    ): SetWormholePeerEventFilter;
    SetWormholePeer(
      chainId?: null,
      peerContract?: null
    ): SetWormholePeerEventFilter;
  };

  estimateGas: {
    encodeWormholeTransceiverInstruction(
      instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWormholePeer(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSpecialRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isVAAConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWormholeRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseWormholeTransceiverInstruction(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveMessage(
      encodedMessage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setIsSpecialRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setIsWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setIsWormholeRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setWormholePeer(
      chainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    encodeWormholeTransceiverInstruction(
      instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWormholePeer(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSpecialRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isVAAConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWormholeRelayingEnabled(
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseWormholeTransceiverInstruction(
      encoded: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveMessage(
      encodedMessage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setIsSpecialRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setIsWormholeEvmChain(
      chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setIsWormholeRelayingEnabled(
      chainId: BigNumberish,
      isRelayingEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setWormholePeer(
      chainId: BigNumberish,
      peerContract: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
