// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get burner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Freeze extends ethereum.Event {
  get params(): Freeze__Params {
    return new Freeze__Params(this);
  }
}

export class Freeze__Params {
  _event: Freeze;

  constructor(event: Freeze) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get frozen(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class ValidateFile extends ethereum.Event {
  get params(): ValidateFile__Params {
    return new ValidateFile__Params(this);
  }
}

export class ValidateFile__Params {
  _event: ValidateFile;

  constructor(event: ValidateFile) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get data(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class ValidatePublisher extends ethereum.Event {
  get params(): ValidatePublisher__Params {
    return new ValidatePublisher__Params(this);
  }
}

export class ValidatePublisher__Params {
  _event: ValidatePublisher;

  constructor(event: ValidatePublisher) {
    this._event = event;
  }

  get publisherAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get state(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get publisherName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ValidateWallet extends ethereum.Event {
  get params(): ValidateWallet__Params {
    return new ValidateWallet__Params(this);
  }
}

export class ValidateWallet__Params {
  _event: ValidateWallet;

  constructor(event: ValidateWallet) {
    this._event = event;
  }

  get walletAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get state(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get walletName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class LogEvent extends ethereum.Event {
  get params(): LogEvent__Params {
    return new LogEvent__Params(this);
  }
}

export class LogEvent__Params {
  _event: LogEvent;

  constructor(event: LogEvent) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get data(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Pause extends ethereum.Event {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends ethereum.Event {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class VIDToken extends ethereum.SmartContract {
  static bind(address: Address): VIDToken {
    return new VIDToken("VIDToken", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(_spender: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  listFiles(startAt: BigInt, stopAt: BigInt): boolean {
    let result = super.call("listFiles", "listFiles(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(startAt),
      ethereum.Value.fromUnsignedBigInt(stopAt)
    ]);

    return result[0].toBoolean();
  }

  try_listFiles(startAt: BigInt, stopAt: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "listFiles",
      "listFiles(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(startAt),
        ethereum.Value.fromUnsignedBigInt(stopAt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(_from: Address, _to: Address, _value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balances(param0: Address): BigInt {
    let result = super.call("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balances(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  verifyPublisher(param0: Address): boolean {
    let result = super.call(
      "verifyPublisher",
      "verifyPublisher(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_verifyPublisher(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyPublisher",
      "verifyPublisher(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  initialSupply(): BigInt {
    let result = super.call("initialSupply", "initialSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_initialSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "initialSupply",
      "initialSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  burn(_value: BigInt): boolean {
    let result = super.call("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_burn(_value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validationWallet(): Address {
    let result = super.call(
      "validationWallet",
      "validationWallet():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_validationWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "validationWallet",
      "validationWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowed(param0: Address, param1: Address): BigInt {
    let result = super.call("allowed", "allowed(address,address):(uint256)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_allowed(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowed",
      "allowed(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decreaseApproval(_spender: Address, _subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseApproval",
      "decreaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseApproval(
    _spender: Address,
    _subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseApproval",
      "decreaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  transfer(_to: Address, _value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(_to: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validationPrice(): BigInt {
    let result = super.call(
      "validationPrice",
      "validationPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_validationPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "validationPrice",
      "validationPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  verifyFile(fileHash: string): boolean {
    let result = super.call("verifyFile", "verifyFile(string):(bool)", [
      ethereum.Value.fromString(fileHash)
    ]);

    return result[0].toBoolean();
  }

  try_verifyFile(fileHash: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("verifyFile", "verifyFile(string):(bool)", [
      ethereum.Value.fromString(fileHash)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  frozenAccount(param0: Address): boolean {
    let result = super.call("frozenAccount", "frozenAccount(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_frozenAccount(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "frozenAccount",
      "frozenAccount(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validateFile(
    To: Address,
    Payment: BigInt,
    Data: Bytes,
    cStore: boolean,
    eLog: boolean
  ): boolean {
    let result = super.call(
      "validateFile",
      "validateFile(address,uint256,bytes,bool,bool):(bool)",
      [
        ethereum.Value.fromAddress(To),
        ethereum.Value.fromUnsignedBigInt(Payment),
        ethereum.Value.fromBytes(Data),
        ethereum.Value.fromBoolean(cStore),
        ethereum.Value.fromBoolean(eLog)
      ]
    );

    return result[0].toBoolean();
  }

  try_validateFile(
    To: Address,
    Payment: BigInt,
    Data: Bytes,
    cStore: boolean,
    eLog: boolean
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "validateFile",
      "validateFile(address,uint256,bytes,bool,bool):(bool)",
      [
        ethereum.Value.fromAddress(To),
        ethereum.Value.fromUnsignedBigInt(Payment),
        ethereum.Value.fromBytes(Data),
        ethereum.Value.fromBoolean(cStore),
        ethereum.Value.fromBoolean(eLog)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  freeze(_address: Address, _state: boolean): boolean {
    let result = super.call("freeze", "freeze(address,bool):(bool)", [
      ethereum.Value.fromAddress(_address),
      ethereum.Value.fromBoolean(_state)
    ]);

    return result[0].toBoolean();
  }

  try_freeze(_address: Address, _state: boolean): ethereum.CallResult<boolean> {
    let result = super.tryCall("freeze", "freeze(address,bool):(bool)", [
      ethereum.Value.fromAddress(_address),
      ethereum.Value.fromBoolean(_state)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenFallback(_from: Address, _value: BigInt, _data: Bytes): boolean {
    let result = super.call(
      "tokenFallback",
      "tokenFallback(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBoolean();
  }

  try_tokenFallback(
    _from: Address,
    _value: BigInt,
    _data: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "tokenFallback",
      "tokenFallback(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validatePublisher(
    Address: Address,
    State: boolean,
    Publisher: string
  ): boolean {
    let result = super.call(
      "validatePublisher",
      "validatePublisher(address,bool,string):(bool)",
      [
        ethereum.Value.fromAddress(Address),
        ethereum.Value.fromBoolean(State),
        ethereum.Value.fromString(Publisher)
      ]
    );

    return result[0].toBoolean();
  }

  try_validatePublisher(
    Address: Address,
    State: boolean,
    Publisher: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "validatePublisher",
      "validatePublisher(address,bool,string):(bool)",
      [
        ethereum.Value.fromAddress(Address),
        ethereum.Value.fromBoolean(State),
        ethereum.Value.fromString(Publisher)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  increaseApproval(_spender: Address, _addedValue: BigInt): boolean {
    let result = super.call(
      "increaseApproval",
      "increaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseApproval(
    _spender: Address,
    _addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseApproval",
      "increaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(_owner: Address, _spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    _owner: Address,
    _spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  verifyWallet(param0: Address): boolean {
    let result = super.call("verifyWallet", "verifyWallet(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_verifyWallet(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("verifyWallet", "verifyWallet(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validateWallet(Address: Address, State: boolean, Wallet: string): boolean {
    let result = super.call(
      "validateWallet",
      "validateWallet(address,bool,string):(bool)",
      [
        ethereum.Value.fromAddress(Address),
        ethereum.Value.fromBoolean(State),
        ethereum.Value.fromString(Wallet)
      ]
    );

    return result[0].toBoolean();
  }

  try_validateWallet(
    Address: Address,
    State: boolean,
    Wallet: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "validateWallet",
      "validateWallet(address,bool,string):(bool)",
      [
        ethereum.Value.fromAddress(Address),
        ethereum.Value.fromBoolean(State),
        ethereum.Value.fromString(Wallet)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferTokenCall extends ethereum.Call {
  get inputs(): TransferTokenCall__Inputs {
    return new TransferTokenCall__Inputs(this);
  }

  get outputs(): TransferTokenCall__Outputs {
    return new TransferTokenCall__Outputs(this);
  }
}

export class TransferTokenCall__Inputs {
  _call: TransferTokenCall;

  constructor(call: TransferTokenCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokens(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferTokenCall__Outputs {
  _call: TransferTokenCall;

  constructor(call: TransferTokenCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class ListFilesCall extends ethereum.Call {
  get inputs(): ListFilesCall__Inputs {
    return new ListFilesCall__Inputs(this);
  }

  get outputs(): ListFilesCall__Outputs {
    return new ListFilesCall__Outputs(this);
  }
}

export class ListFilesCall__Inputs {
  _call: ListFilesCall;

  constructor(call: ListFilesCall) {
    this._call = call;
  }

  get startAt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get stopAt(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ListFilesCall__Outputs {
  _call: ListFilesCall;

  constructor(call: ListFilesCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseApprovalCall extends ethereum.Call {
  get inputs(): DecreaseApprovalCall__Inputs {
    return new DecreaseApprovalCall__Inputs(this);
  }

  get outputs(): DecreaseApprovalCall__Outputs {
    return new DecreaseApprovalCall__Outputs(this);
  }
}

export class DecreaseApprovalCall__Inputs {
  _call: DecreaseApprovalCall;

  constructor(call: DecreaseApprovalCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseApprovalCall__Outputs {
  _call: DecreaseApprovalCall;

  constructor(call: DecreaseApprovalCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class SetPriceCall extends ethereum.Call {
  get inputs(): SetPriceCall__Inputs {
    return new SetPriceCall__Inputs(this);
  }

  get outputs(): SetPriceCall__Outputs {
    return new SetPriceCall__Outputs(this);
  }
}

export class SetPriceCall__Inputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPriceCall__Outputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ValidateFileCall extends ethereum.Call {
  get inputs(): ValidateFileCall__Inputs {
    return new ValidateFileCall__Inputs(this);
  }

  get outputs(): ValidateFileCall__Outputs {
    return new ValidateFileCall__Outputs(this);
  }
}

export class ValidateFileCall__Inputs {
  _call: ValidateFileCall;

  constructor(call: ValidateFileCall) {
    this._call = call;
  }

  get To(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get Payment(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get Data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get cStore(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get eLog(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class ValidateFileCall__Outputs {
  _call: ValidateFileCall;

  constructor(call: ValidateFileCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class FreezeCall extends ethereum.Call {
  get inputs(): FreezeCall__Inputs {
    return new FreezeCall__Inputs(this);
  }

  get outputs(): FreezeCall__Outputs {
    return new FreezeCall__Outputs(this);
  }
}

export class FreezeCall__Inputs {
  _call: FreezeCall;

  constructor(call: FreezeCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _state(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class FreezeCall__Outputs {
  _call: FreezeCall;

  constructor(call: FreezeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ValidatePublisherCall extends ethereum.Call {
  get inputs(): ValidatePublisherCall__Inputs {
    return new ValidatePublisherCall__Inputs(this);
  }

  get outputs(): ValidatePublisherCall__Outputs {
    return new ValidatePublisherCall__Outputs(this);
  }
}

export class ValidatePublisherCall__Inputs {
  _call: ValidatePublisherCall;

  constructor(call: ValidatePublisherCall) {
    this._call = call;
  }

  get Address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get State(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get Publisher(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ValidatePublisherCall__Outputs {
  _call: ValidatePublisherCall;

  constructor(call: ValidatePublisherCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseApprovalCall extends ethereum.Call {
  get inputs(): IncreaseApprovalCall__Inputs {
    return new IncreaseApprovalCall__Inputs(this);
  }

  get outputs(): IncreaseApprovalCall__Outputs {
    return new IncreaseApprovalCall__Outputs(this);
  }
}

export class IncreaseApprovalCall__Inputs {
  _call: IncreaseApprovalCall;

  constructor(call: IncreaseApprovalCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseApprovalCall__Outputs {
  _call: IncreaseApprovalCall;

  constructor(call: IncreaseApprovalCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetWalletCall extends ethereum.Call {
  get inputs(): SetWalletCall__Inputs {
    return new SetWalletCall__Inputs(this);
  }

  get outputs(): SetWalletCall__Outputs {
    return new SetWalletCall__Outputs(this);
  }
}

export class SetWalletCall__Inputs {
  _call: SetWalletCall;

  constructor(call: SetWalletCall) {
    this._call = call;
  }

  get newWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetWalletCall__Outputs {
  _call: SetWalletCall;

  constructor(call: SetWalletCall) {
    this._call = call;
  }
}

export class ValidateWalletCall extends ethereum.Call {
  get inputs(): ValidateWalletCall__Inputs {
    return new ValidateWalletCall__Inputs(this);
  }

  get outputs(): ValidateWalletCall__Outputs {
    return new ValidateWalletCall__Outputs(this);
  }
}

export class ValidateWalletCall__Inputs {
  _call: ValidateWalletCall;

  constructor(call: ValidateWalletCall) {
    this._call = call;
  }

  get Address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get State(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get Wallet(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ValidateWalletCall__Outputs {
  _call: ValidateWalletCall;

  constructor(call: ValidateWalletCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}