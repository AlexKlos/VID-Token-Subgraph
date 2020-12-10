import { BigInt } from "@graphprotocol/graph-ts"
import {
  VIDToken,
  Burn,
  Freeze,
  ValidateFile,
  ValidatePublisher,
  ValidateWallet,
  LogEvent,
  Transfer,
  Approval,
  Pause,
  Unpause
} from "../generated/VIDToken/VIDToken"
import { _Burn, _Freeze, _ValidateFile, _ValidatePublisher, 
_ValidateWallet, _LogEvent, _Transfer, _Approval } from "../generated/schema"

export function handleBurn(event: Burn): void {
  let entity = _Burn.load(event.params.burner.toHex())

  if (entity == null) {
    entity = new _Burn(event.params.burner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.burner = event.params.burner
  entity.value = event.params.value
  entity.save()
}

export function handleFreeze(event: Freeze): void {
  let entity = _Freeze.load(event.params.target.toHex())

  if (entity == null) {
    entity = new _Freeze(event.params.target.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.target = event.params.target
  entity.frozen = event.params.frozen
  entity.save()
}

export function handleValidateFile(event: ValidateFile): void {
  let entity = _ValidateFile.load(event.params.index.toHex())

  if (entity == null) {
    entity = new _ValidateFile(event.params.index.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.index = event.params.index
  entity.data = event.params.data
  entity.save()
}

export function handleValidatePublisher(event: ValidatePublisher): void {
  let entity = _ValidatePublisher.load(event.params.publisherAddress.toHex())

  if (entity == null) {
    entity = new _ValidatePublisher(event.params.publisherAddress.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.publisherAddress = event.params.publisherAddress
  entity.state = event.params.state
  entity.publisherName = event.params.publisherName
  entity.save()
}

export function handleValidateWallet(event: ValidateWallet): void {
  let entity = _ValidateWallet.load(event.params.walletAddress.toHex())

  if (entity == null) {
    entity = new _ValidateWallet(event.params.walletAddress.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.walletAddress = event.params.walletAddress
  entity.state = event.params.state
  entity.walletName = event.params.walletName
  entity.save()
}

export function handleLogEvent(event: LogEvent): void {
  let entity = _LogEvent.load(event.params.index.toHex())

  if (entity == null) {
    entity = new _LogEvent(event.params.index.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.index = event.params.index
  entity.data = event.params.data
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params._from.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params._from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value
  entity.save()
}

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params._owner.toHex())

  if (entity == null) {
    entity = new _Approval(event.params._owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._owner = event.params._owner
  entity._spender = event.params._spender
  entity._value = event.params._value
  entity.save()
}

export function handlePause(event: Pause): void {}

export function handleUnpause(event: Unpause): void {}
