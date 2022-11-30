import {
  Create as CreateEvent,
  Redeem as RedeemEvent,
  Revoke as RevokeEvent
} from "../generated/TokenEscrow/TokenEscrow"
import { Create, Redeem, Revoke } from "../generated/schema"

export function handleCreate(event: CreateEvent): void {
  let entity = new Create(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.payer = event.params.payer
  entity.payee = event.params.payee
  entity.amount = event.params.amount
  entity.release = event.params.release

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeem(event: RedeemEvent): void {
  let entity = new Redeem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.payer = event.params.payer
  entity.payee = event.params.payee
  entity.amount = event.params.amount
  entity.release = event.params.release

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevoke(event: RevokeEvent): void {
  let entity = new Revoke(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.payer = event.params.payer
  entity.payee = event.params.payee
  entity.amount = event.params.amount
  entity.release = event.params.release

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
