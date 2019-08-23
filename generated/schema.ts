// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TranscoderUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TranscoderUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TranscoderUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TranscoderUpdate", id.toString(), this);
  }

  static load(id: string): TranscoderUpdate | null {
    return store.get("TranscoderUpdate", id) as TranscoderUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transcoder(): Bytes {
    let value = this.get("transcoder");
    return value.toBytes();
  }

  set transcoder(value: Bytes) {
    this.set("transcoder", Value.fromBytes(value));
  }

  get pendingRewardCut(): BigInt {
    let value = this.get("pendingRewardCut");
    return value.toBigInt();
  }

  set pendingRewardCut(value: BigInt) {
    this.set("pendingRewardCut", Value.fromBigInt(value));
  }

  get pendingFeeShare(): BigInt {
    let value = this.get("pendingFeeShare");
    return value.toBigInt();
  }

  set pendingFeeShare(value: BigInt) {
    this.set("pendingFeeShare", Value.fromBigInt(value));
  }

  get pendingPricePerSegment(): BigInt {
    let value = this.get("pendingPricePerSegment");
    return value.toBigInt();
  }

  set pendingPricePerSegment(value: BigInt) {
    this.set("pendingPricePerSegment", Value.fromBigInt(value));
  }

  get registered(): boolean {
    let value = this.get("registered");
    return value.toBoolean();
  }

  set registered(value: boolean) {
    this.set("registered", Value.fromBoolean(value));
  }
}

export class TranscoderEvicted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TranscoderEvicted entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TranscoderEvicted entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TranscoderEvicted", id.toString(), this);
  }

  static load(id: string): TranscoderEvicted | null {
    return store.get("TranscoderEvicted", id) as TranscoderEvicted | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transcoder(): Bytes {
    let value = this.get("transcoder");
    return value.toBytes();
  }

  set transcoder(value: Bytes) {
    this.set("transcoder", Value.fromBytes(value));
  }
}

export class TranscoderResigned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TranscoderResigned entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TranscoderResigned entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TranscoderResigned", id.toString(), this);
  }

  static load(id: string): TranscoderResigned | null {
    return store.get("TranscoderResigned", id) as TranscoderResigned | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transcoder(): Bytes {
    let value = this.get("transcoder");
    return value.toBytes();
  }

  set transcoder(value: Bytes) {
    this.set("transcoder", Value.fromBytes(value));
  }
}

export class TranscoderSlashed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TranscoderSlashed entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TranscoderSlashed entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TranscoderSlashed", id.toString(), this);
  }

  static load(id: string): TranscoderSlashed | null {
    return store.get("TranscoderSlashed", id) as TranscoderSlashed | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transcoder(): Bytes {
    let value = this.get("transcoder");
    return value.toBytes();
  }

  set transcoder(value: Bytes) {
    this.set("transcoder", Value.fromBytes(value));
  }

  get finder(): Bytes {
    let value = this.get("finder");
    return value.toBytes();
  }

  set finder(value: Bytes) {
    this.set("finder", Value.fromBytes(value));
  }

  get penalty(): BigInt {
    let value = this.get("penalty");
    return value.toBigInt();
  }

  set penalty(value: BigInt) {
    this.set("penalty", Value.fromBigInt(value));
  }

  get finderReward(): BigInt {
    let value = this.get("finderReward");
    return value.toBigInt();
  }

  set finderReward(value: BigInt) {
    this.set("finderReward", Value.fromBigInt(value));
  }
}

export class Reward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Reward entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Reward entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Reward", id.toString(), this);
  }

  static load(id: string): Reward | null {
    return store.get("Reward", id) as Reward | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transcoder(): Bytes {
    let value = this.get("transcoder");
    return value.toBytes();
  }

  set transcoder(value: Bytes) {
    this.set("transcoder", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Bond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bond", id.toString(), this);
  }

  static load(id: string): Bond | null {
    return store.get("Bond", id) as Bond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newDelegate(): Bytes {
    let value = this.get("newDelegate");
    return value.toBytes();
  }

  set newDelegate(value: Bytes) {
    this.set("newDelegate", Value.fromBytes(value));
  }

  get oldDelegate(): Bytes {
    let value = this.get("oldDelegate");
    return value.toBytes();
  }

  set oldDelegate(value: Bytes) {
    this.set("oldDelegate", Value.fromBytes(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }

  get additionalAmount(): BigInt {
    let value = this.get("additionalAmount");
    return value.toBigInt();
  }

  set additionalAmount(value: BigInt) {
    this.set("additionalAmount", Value.fromBigInt(value));
  }

  get bondedAmount(): BigInt {
    let value = this.get("bondedAmount");
    return value.toBigInt();
  }

  set bondedAmount(value: BigInt) {
    this.set("bondedAmount", Value.fromBigInt(value));
  }
}

export class Unbond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Unbond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Unbond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Unbond", id.toString(), this);
  }

  static load(id: string): Unbond | null {
    return store.get("Unbond", id) as Unbond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegate(): Bytes {
    let value = this.get("delegate");
    return value.toBytes();
  }

  set delegate(value: Bytes) {
    this.set("delegate", Value.fromBytes(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }

  get unbondingLockId(): BigInt {
    let value = this.get("unbondingLockId");
    return value.toBigInt();
  }

  set unbondingLockId(value: BigInt) {
    this.set("unbondingLockId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get withdrawRound(): BigInt {
    let value = this.get("withdrawRound");
    return value.toBigInt();
  }

  set withdrawRound(value: BigInt) {
    this.set("withdrawRound", Value.fromBigInt(value));
  }
}

export class Rebond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Rebond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Rebond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Rebond", id.toString(), this);
  }

  static load(id: string): Rebond | null {
    return store.get("Rebond", id) as Rebond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegate(): Bytes {
    let value = this.get("delegate");
    return value.toBytes();
  }

  set delegate(value: Bytes) {
    this.set("delegate", Value.fromBytes(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }

  get unbondingLockId(): BigInt {
    let value = this.get("unbondingLockId");
    return value.toBigInt();
  }

  set unbondingLockId(value: BigInt) {
    this.set("unbondingLockId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class WithdrawStake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawStake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawStake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawStake", id.toString(), this);
  }

  static load(id: string): WithdrawStake | null {
    return store.get("WithdrawStake", id) as WithdrawStake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }

  get unbondingLockId(): BigInt {
    let value = this.get("unbondingLockId");
    return value.toBigInt();
  }

  set unbondingLockId(value: BigInt) {
    this.set("unbondingLockId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get withdrawRound(): BigInt {
    let value = this.get("withdrawRound");
    return value.toBigInt();
  }

  set withdrawRound(value: BigInt) {
    this.set("withdrawRound", Value.fromBigInt(value));
  }
}

export class WithdrawFees extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawFees entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawFees entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawFees", id.toString(), this);
  }

  static load(id: string): WithdrawFees | null {
    return store.get("WithdrawFees", id) as WithdrawFees | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }
}

export class SetController extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SetController entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SetController entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SetController", id.toString(), this);
  }

  static load(id: string): SetController | null {
    return store.get("SetController", id) as SetController | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get controller(): Bytes {
    let value = this.get("controller");
    return value.toBytes();
  }

  set controller(value: Bytes) {
    this.set("controller", Value.fromBytes(value));
  }
}

export class ParameterUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ParameterUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ParameterUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ParameterUpdate", id.toString(), this);
  }

  static load(id: string): ParameterUpdate | null {
    return store.get("ParameterUpdate", id) as ParameterUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get param(): string {
    let value = this.get("param");
    return value.toString();
  }

  set param(value: string) {
    this.set("param", Value.fromString(value));
  }
}
