// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Escrow extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Escrow entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Escrow must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Escrow", id.toString(), this);
    }
  }

  static load(id: string): Escrow | null {
    return changetype<Escrow | null>(store.get("Escrow", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get escrowId(): Bytes {
    let value = this.get("escrowId");
    return value!.toBytes();
  }

  set escrowId(value: Bytes) {
    this.set("escrowId", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get payer(): Bytes {
    let value = this.get("payer");
    return value!.toBytes();
  }

  set payer(value: Bytes) {
    this.set("payer", Value.fromBytes(value));
  }

  get payee(): Bytes {
    let value = this.get("payee");
    return value!.toBytes();
  }

  set payee(value: Bytes) {
    this.set("payee", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get release(): BigInt {
    let value = this.get("release");
    return value!.toBigInt();
  }

  set release(value: BigInt) {
    this.set("release", Value.fromBigInt(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }
}
