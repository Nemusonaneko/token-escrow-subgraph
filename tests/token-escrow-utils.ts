import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Create, Redeem, Revoke } from "../generated/TokenEscrow/TokenEscrow"

export function createCreateEvent(
  token: Address,
  payer: Address,
  payee: Address,
  amount: BigInt,
  release: BigInt
): Create {
  let createEvent = changetype<Create>(newMockEvent())

  createEvent.parameters = new Array()

  createEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  createEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  createEvent.parameters.push(
    new ethereum.EventParam("payee", ethereum.Value.fromAddress(payee))
  )
  createEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  createEvent.parameters.push(
    new ethereum.EventParam(
      "release",
      ethereum.Value.fromUnsignedBigInt(release)
    )
  )

  return createEvent
}

export function createRedeemEvent(
  token: Address,
  payer: Address,
  payee: Address,
  amount: BigInt,
  release: BigInt
): Redeem {
  let redeemEvent = changetype<Redeem>(newMockEvent())

  redeemEvent.parameters = new Array()

  redeemEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("payee", ethereum.Value.fromAddress(payee))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "release",
      ethereum.Value.fromUnsignedBigInt(release)
    )
  )

  return redeemEvent
}

export function createRevokeEvent(
  token: Address,
  payer: Address,
  payee: Address,
  amount: BigInt,
  release: BigInt
): Revoke {
  let revokeEvent = changetype<Revoke>(newMockEvent())

  revokeEvent.parameters = new Array()

  revokeEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  revokeEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  revokeEvent.parameters.push(
    new ethereum.EventParam("payee", ethereum.Value.fromAddress(payee))
  )
  revokeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  revokeEvent.parameters.push(
    new ethereum.EventParam(
      "release",
      ethereum.Value.fromUnsignedBigInt(release)
    )
  )

  return revokeEvent
}
