// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TranscoderUpdate extends EthereumEvent {
  get params(): TranscoderUpdate__Params {
    return new TranscoderUpdate__Params(this);
  }
}

export class TranscoderUpdate__Params {
  _event: TranscoderUpdate;

  constructor(event: TranscoderUpdate) {
    this._event = event;
  }

  get transcoder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pendingRewardCut(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get pendingFeeShare(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get pendingPricePerSegment(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get registered(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class TranscoderEvicted extends EthereumEvent {
  get params(): TranscoderEvicted__Params {
    return new TranscoderEvicted__Params(this);
  }
}

export class TranscoderEvicted__Params {
  _event: TranscoderEvicted;

  constructor(event: TranscoderEvicted) {
    this._event = event;
  }

  get transcoder(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TranscoderResigned extends EthereumEvent {
  get params(): TranscoderResigned__Params {
    return new TranscoderResigned__Params(this);
  }
}

export class TranscoderResigned__Params {
  _event: TranscoderResigned;

  constructor(event: TranscoderResigned) {
    this._event = event;
  }

  get transcoder(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TranscoderSlashed extends EthereumEvent {
  get params(): TranscoderSlashed__Params {
    return new TranscoderSlashed__Params(this);
  }
}

export class TranscoderSlashed__Params {
  _event: TranscoderSlashed;

  constructor(event: TranscoderSlashed) {
    this._event = event;
  }

  get transcoder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get finder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get penalty(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get finderReward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Reward extends EthereumEvent {
  get params(): Reward__Params {
    return new Reward__Params(this);
  }
}

export class Reward__Params {
  _event: Reward;

  constructor(event: Reward) {
    this._event = event;
  }

  get transcoder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Bond extends EthereumEvent {
  get params(): Bond__Params {
    return new Bond__Params(this);
  }
}

export class Bond__Params {
  _event: Bond;

  constructor(event: Bond) {
    this._event = event;
  }

  get newDelegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldDelegate(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get delegator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get additionalAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get bondedAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Unbond extends EthereumEvent {
  get params(): Unbond__Params {
    return new Unbond__Params(this);
  }
}

export class Unbond__Params {
  _event: Unbond;

  constructor(event: Unbond) {
    this._event = event;
  }

  get delegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get delegator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get unbondingLockId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get withdrawRound(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Rebond extends EthereumEvent {
  get params(): Rebond__Params {
    return new Rebond__Params(this);
  }
}

export class Rebond__Params {
  _event: Rebond;

  constructor(event: Rebond) {
    this._event = event;
  }

  get delegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get delegator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get unbondingLockId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class WithdrawStake extends EthereumEvent {
  get params(): WithdrawStake__Params {
    return new WithdrawStake__Params(this);
  }
}

export class WithdrawStake__Params {
  _event: WithdrawStake;

  constructor(event: WithdrawStake) {
    this._event = event;
  }

  get delegator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get unbondingLockId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get withdrawRound(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class WithdrawFees extends EthereumEvent {
  get params(): WithdrawFees__Params {
    return new WithdrawFees__Params(this);
  }
}

export class WithdrawFees__Params {
  _event: WithdrawFees;

  constructor(event: WithdrawFees) {
    this._event = event;
  }

  get delegator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetController extends EthereumEvent {
  get params(): SetController__Params {
    return new SetController__Params(this);
  }
}

export class SetController__Params {
  _event: SetController;

  constructor(event: SetController) {
    this._event = event;
  }

  get controller(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ParameterUpdate extends EthereumEvent {
  get params(): ParameterUpdate__Params {
    return new ParameterUpdate__Params(this);
  }
}

export class ParameterUpdate__Params {
  _event: ParameterUpdate;

  constructor(event: ParameterUpdate) {
    this._event = event;
  }

  get param(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class BondingManager__getTranscoderEarningsPoolForRoundResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set("value8", EthereumValue.fromBoolean(this.value8));
    return map;
  }
}

export class BondingManager__getDelegatorUnbondingLockResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class BondingManager__getTranscoderResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class BondingManager__getDelegatorResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromAddress(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class BondingManager extends SmartContract {
  static bind(address: Address): BondingManager {
    return new BondingManager("BondingManager", address);
  }

  maxEarningsClaimsRounds(): BigInt {
    let result = super.call("maxEarningsClaimsRounds", []);
    return result[0].toBigInt();
  }

  isValidUnbondingLock(_delegator: Address, _unbondingLockId: BigInt): boolean {
    let result = super.call("isValidUnbondingLock", [
      EthereumValue.fromAddress(_delegator),
      EthereumValue.fromUnsignedBigInt(_unbondingLockId)
    ]);
    return result[0].toBoolean();
  }

  delegatorStatus(_delegator: Address): i32 {
    let result = super.call("delegatorStatus", [
      EthereumValue.fromAddress(_delegator)
    ]);
    return result[0].toI32();
  }

  getNextTranscoderInPool(_transcoder: Address): Address {
    let result = super.call("getNextTranscoderInPool", [
      EthereumValue.fromAddress(_transcoder)
    ]);
    return result[0].toAddress();
  }

  getTranscoderEarningsPoolForRound(
    _transcoder: Address,
    _round: BigInt
  ): BondingManager__getTranscoderEarningsPoolForRoundResult {
    let result = super.call("getTranscoderEarningsPoolForRound", [
      EthereumValue.fromAddress(_transcoder),
      EthereumValue.fromUnsignedBigInt(_round)
    ]);
    return new BondingManager__getTranscoderEarningsPoolForRoundResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBoolean()
    );
  }

  getTranscoderPoolSize(): BigInt {
    let result = super.call("getTranscoderPoolSize", []);
    return result[0].toBigInt();
  }

  activeTranscoderSet(param0: BigInt): BigInt {
    let result = super.call("activeTranscoderSet", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return result[0].toBigInt();
  }

  getDelegatorUnbondingLock(
    _delegator: Address,
    _unbondingLockId: BigInt
  ): BondingManager__getDelegatorUnbondingLockResult {
    let result = super.call("getDelegatorUnbondingLock", [
      EthereumValue.fromAddress(_delegator),
      EthereumValue.fromUnsignedBigInt(_unbondingLockId)
    ]);
    return new BondingManager__getDelegatorUnbondingLockResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  targetContractId(): Bytes {
    let result = super.call("targetContractId", []);
    return result[0].toBytes();
  }

  getTranscoderPoolMaxSize(): BigInt {
    let result = super.call("getTranscoderPoolMaxSize", []);
    return result[0].toBigInt();
  }

  getTotalBonded(): BigInt {
    let result = super.call("getTotalBonded", []);
    return result[0].toBigInt();
  }

  getTranscoder(_transcoder: Address): BondingManager__getTranscoderResult {
    let result = super.call("getTranscoder", [
      EthereumValue.fromAddress(_transcoder)
    ]);
    return new BondingManager__getTranscoderResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  numActiveTranscoders(): BigInt {
    let result = super.call("numActiveTranscoders", []);
    return result[0].toBigInt();
  }

  isRegisteredTranscoder(_transcoder: Address): boolean {
    let result = super.call("isRegisteredTranscoder", [
      EthereumValue.fromAddress(_transcoder)
    ]);
    return result[0].toBoolean();
  }

  unbondingPeriod(): BigInt {
    let result = super.call("unbondingPeriod", []);
    return result[0].toBigInt();
  }

  getTotalActiveStake(_round: BigInt): BigInt {
    let result = super.call("getTotalActiveStake", [
      EthereumValue.fromUnsignedBigInt(_round)
    ]);
    return result[0].toBigInt();
  }

  isActiveTranscoder(_transcoder: Address, _round: BigInt): boolean {
    let result = super.call("isActiveTranscoder", [
      EthereumValue.fromAddress(_transcoder),
      EthereumValue.fromUnsignedBigInt(_round)
    ]);
    return result[0].toBoolean();
  }

  getFirstTranscoderInPool(): Address {
    let result = super.call("getFirstTranscoderInPool", []);
    return result[0].toAddress();
  }

  transcoderStatus(_transcoder: Address): i32 {
    let result = super.call("transcoderStatus", [
      EthereumValue.fromAddress(_transcoder)
    ]);
    return result[0].toI32();
  }

  electActiveTranscoder(
    _maxPricePerSegment: BigInt,
    _blockHash: Bytes,
    _round: BigInt
  ): Address {
    let result = super.call("electActiveTranscoder", [
      EthereumValue.fromUnsignedBigInt(_maxPricePerSegment),
      EthereumValue.fromFixedBytes(_blockHash),
      EthereumValue.fromUnsignedBigInt(_round)
    ]);
    return result[0].toAddress();
  }

  pendingStake(_delegator: Address, _endRound: BigInt): BigInt {
    let result = super.call("pendingStake", [
      EthereumValue.fromAddress(_delegator),
      EthereumValue.fromUnsignedBigInt(_endRound)
    ]);
    return result[0].toBigInt();
  }

  transcoderTotalStake(_transcoder: Address): BigInt {
    let result = super.call("transcoderTotalStake", [
      EthereumValue.fromAddress(_transcoder)
    ]);
    return result[0].toBigInt();
  }

  getDelegator(_delegator: Address): BondingManager__getDelegatorResult {
    let result = super.call("getDelegator", [
      EthereumValue.fromAddress(_delegator)
    ]);
    return new BondingManager__getDelegatorResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  activeTranscoderTotalStake(_transcoder: Address, _round: BigInt): BigInt {
    let result = super.call("activeTranscoderTotalStake", [
      EthereumValue.fromAddress(_transcoder),
      EthereumValue.fromUnsignedBigInt(_round)
    ]);
    return result[0].toBigInt();
  }

  pendingFees(_delegator: Address, _endRound: BigInt): BigInt {
    let result = super.call("pendingFees", [
      EthereumValue.fromAddress(_delegator),
      EthereumValue.fromUnsignedBigInt(_endRound)
    ]);
    return result[0].toBigInt();
  }

  controller(): Address {
    let result = super.call("controller", []);
    return result[0].toAddress();
  }
}

export class RewardCall extends EthereumCall {
  get inputs(): RewardCall__Inputs {
    return new RewardCall__Inputs(this);
  }

  get outputs(): RewardCall__Outputs {
    return new RewardCall__Outputs(this);
  }
}

export class RewardCall__Inputs {
  _call: RewardCall;

  constructor(call: RewardCall) {
    this._call = call;
  }
}

export class RewardCall__Outputs {
  _call: RewardCall;

  constructor(call: RewardCall) {
    this._call = call;
  }
}

export class SlashTranscoderCall extends EthereumCall {
  get inputs(): SlashTranscoderCall__Inputs {
    return new SlashTranscoderCall__Inputs(this);
  }

  get outputs(): SlashTranscoderCall__Outputs {
    return new SlashTranscoderCall__Outputs(this);
  }
}

export class SlashTranscoderCall__Inputs {
  _call: SlashTranscoderCall;

  constructor(call: SlashTranscoderCall) {
    this._call = call;
  }

  get _transcoder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _finder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _slashAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _finderFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SlashTranscoderCall__Outputs {
  _call: SlashTranscoderCall;

  constructor(call: SlashTranscoderCall) {
    this._call = call;
  }
}

export class SetActiveTranscodersCall extends EthereumCall {
  get inputs(): SetActiveTranscodersCall__Inputs {
    return new SetActiveTranscodersCall__Inputs(this);
  }

  get outputs(): SetActiveTranscodersCall__Outputs {
    return new SetActiveTranscodersCall__Outputs(this);
  }
}

export class SetActiveTranscodersCall__Inputs {
  _call: SetActiveTranscodersCall;

  constructor(call: SetActiveTranscodersCall) {
    this._call = call;
  }
}

export class SetActiveTranscodersCall__Outputs {
  _call: SetActiveTranscodersCall;

  constructor(call: SetActiveTranscodersCall) {
    this._call = call;
  }
}

export class ClaimEarningsCall extends EthereumCall {
  get inputs(): ClaimEarningsCall__Inputs {
    return new ClaimEarningsCall__Inputs(this);
  }

  get outputs(): ClaimEarningsCall__Outputs {
    return new ClaimEarningsCall__Outputs(this);
  }
}

export class ClaimEarningsCall__Inputs {
  _call: ClaimEarningsCall;

  constructor(call: ClaimEarningsCall) {
    this._call = call;
  }

  get _endRound(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimEarningsCall__Outputs {
  _call: ClaimEarningsCall;

  constructor(call: ClaimEarningsCall) {
    this._call = call;
  }
}

export class WithdrawStakeCall extends EthereumCall {
  get inputs(): WithdrawStakeCall__Inputs {
    return new WithdrawStakeCall__Inputs(this);
  }

  get outputs(): WithdrawStakeCall__Outputs {
    return new WithdrawStakeCall__Outputs(this);
  }
}

export class WithdrawStakeCall__Inputs {
  _call: WithdrawStakeCall;

  constructor(call: WithdrawStakeCall) {
    this._call = call;
  }

  get _unbondingLockId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawStakeCall__Outputs {
  _call: WithdrawStakeCall;

  constructor(call: WithdrawStakeCall) {
    this._call = call;
  }
}

export class UnbondCall extends EthereumCall {
  get inputs(): UnbondCall__Inputs {
    return new UnbondCall__Inputs(this);
  }

  get outputs(): UnbondCall__Outputs {
    return new UnbondCall__Outputs(this);
  }
}

export class UnbondCall__Inputs {
  _call: UnbondCall;

  constructor(call: UnbondCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnbondCall__Outputs {
  _call: UnbondCall;

  constructor(call: UnbondCall) {
    this._call = call;
  }
}

export class RebondFromUnbondedCall extends EthereumCall {
  get inputs(): RebondFromUnbondedCall__Inputs {
    return new RebondFromUnbondedCall__Inputs(this);
  }

  get outputs(): RebondFromUnbondedCall__Outputs {
    return new RebondFromUnbondedCall__Outputs(this);
  }
}

export class RebondFromUnbondedCall__Inputs {
  _call: RebondFromUnbondedCall;

  constructor(call: RebondFromUnbondedCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _unbondingLockId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RebondFromUnbondedCall__Outputs {
  _call: RebondFromUnbondedCall;

  constructor(call: RebondFromUnbondedCall) {
    this._call = call;
  }
}

export class UpdateTranscoderWithFeesCall extends EthereumCall {
  get inputs(): UpdateTranscoderWithFeesCall__Inputs {
    return new UpdateTranscoderWithFeesCall__Inputs(this);
  }

  get outputs(): UpdateTranscoderWithFeesCall__Outputs {
    return new UpdateTranscoderWithFeesCall__Outputs(this);
  }
}

export class UpdateTranscoderWithFeesCall__Inputs {
  _call: UpdateTranscoderWithFeesCall;

  constructor(call: UpdateTranscoderWithFeesCall) {
    this._call = call;
  }

  get _transcoder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _fees(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _round(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateTranscoderWithFeesCall__Outputs {
  _call: UpdateTranscoderWithFeesCall;

  constructor(call: UpdateTranscoderWithFeesCall) {
    this._call = call;
  }
}

export class WithdrawFeesCall extends EthereumCall {
  get inputs(): WithdrawFeesCall__Inputs {
    return new WithdrawFeesCall__Inputs(this);
  }

  get outputs(): WithdrawFeesCall__Outputs {
    return new WithdrawFeesCall__Outputs(this);
  }
}

export class WithdrawFeesCall__Inputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }
}

export class WithdrawFeesCall__Outputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }
}

export class SetNumTranscodersCall extends EthereumCall {
  get inputs(): SetNumTranscodersCall__Inputs {
    return new SetNumTranscodersCall__Inputs(this);
  }

  get outputs(): SetNumTranscodersCall__Outputs {
    return new SetNumTranscodersCall__Outputs(this);
  }
}

export class SetNumTranscodersCall__Inputs {
  _call: SetNumTranscodersCall;

  constructor(call: SetNumTranscodersCall) {
    this._call = call;
  }

  get _numTranscoders(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNumTranscodersCall__Outputs {
  _call: SetNumTranscodersCall;

  constructor(call: SetNumTranscodersCall) {
    this._call = call;
  }
}

export class SetNumActiveTranscodersCall extends EthereumCall {
  get inputs(): SetNumActiveTranscodersCall__Inputs {
    return new SetNumActiveTranscodersCall__Inputs(this);
  }

  get outputs(): SetNumActiveTranscodersCall__Outputs {
    return new SetNumActiveTranscodersCall__Outputs(this);
  }
}

export class SetNumActiveTranscodersCall__Inputs {
  _call: SetNumActiveTranscodersCall;

  constructor(call: SetNumActiveTranscodersCall) {
    this._call = call;
  }

  get _numActiveTranscoders(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNumActiveTranscodersCall__Outputs {
  _call: SetNumActiveTranscodersCall;

  constructor(call: SetNumActiveTranscodersCall) {
    this._call = call;
  }
}

export class SetMaxEarningsClaimsRoundsCall extends EthereumCall {
  get inputs(): SetMaxEarningsClaimsRoundsCall__Inputs {
    return new SetMaxEarningsClaimsRoundsCall__Inputs(this);
  }

  get outputs(): SetMaxEarningsClaimsRoundsCall__Outputs {
    return new SetMaxEarningsClaimsRoundsCall__Outputs(this);
  }
}

export class SetMaxEarningsClaimsRoundsCall__Inputs {
  _call: SetMaxEarningsClaimsRoundsCall;

  constructor(call: SetMaxEarningsClaimsRoundsCall) {
    this._call = call;
  }

  get _maxEarningsClaimsRounds(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxEarningsClaimsRoundsCall__Outputs {
  _call: SetMaxEarningsClaimsRoundsCall;

  constructor(call: SetMaxEarningsClaimsRoundsCall) {
    this._call = call;
  }
}

export class TranscoderCall extends EthereumCall {
  get inputs(): TranscoderCall__Inputs {
    return new TranscoderCall__Inputs(this);
  }

  get outputs(): TranscoderCall__Outputs {
    return new TranscoderCall__Outputs(this);
  }
}

export class TranscoderCall__Inputs {
  _call: TranscoderCall;

  constructor(call: TranscoderCall) {
    this._call = call;
  }

  get _rewardCut(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _feeShare(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _pricePerSegment(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TranscoderCall__Outputs {
  _call: TranscoderCall;

  constructor(call: TranscoderCall) {
    this._call = call;
  }
}

export class SetControllerCall extends EthereumCall {
  get inputs(): SetControllerCall__Inputs {
    return new SetControllerCall__Inputs(this);
  }

  get outputs(): SetControllerCall__Outputs {
    return new SetControllerCall__Outputs(this);
  }
}

export class SetControllerCall__Inputs {
  _call: SetControllerCall;

  constructor(call: SetControllerCall) {
    this._call = call;
  }

  get _controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetControllerCall__Outputs {
  _call: SetControllerCall;

  constructor(call: SetControllerCall) {
    this._call = call;
  }
}

export class BondCall extends EthereumCall {
  get inputs(): BondCall__Inputs {
    return new BondCall__Inputs(this);
  }

  get outputs(): BondCall__Outputs {
    return new BondCall__Outputs(this);
  }
}

export class BondCall__Inputs {
  _call: BondCall;

  constructor(call: BondCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class BondCall__Outputs {
  _call: BondCall;

  constructor(call: BondCall) {
    this._call = call;
  }
}

export class RebondCall extends EthereumCall {
  get inputs(): RebondCall__Inputs {
    return new RebondCall__Inputs(this);
  }

  get outputs(): RebondCall__Outputs {
    return new RebondCall__Outputs(this);
  }
}

export class RebondCall__Inputs {
  _call: RebondCall;

  constructor(call: RebondCall) {
    this._call = call;
  }

  get _unbondingLockId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RebondCall__Outputs {
  _call: RebondCall;

  constructor(call: RebondCall) {
    this._call = call;
  }
}

export class SetUnbondingPeriodCall extends EthereumCall {
  get inputs(): SetUnbondingPeriodCall__Inputs {
    return new SetUnbondingPeriodCall__Inputs(this);
  }

  get outputs(): SetUnbondingPeriodCall__Outputs {
    return new SetUnbondingPeriodCall__Outputs(this);
  }
}

export class SetUnbondingPeriodCall__Inputs {
  _call: SetUnbondingPeriodCall;

  constructor(call: SetUnbondingPeriodCall) {
    this._call = call;
  }

  get _unbondingPeriod(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetUnbondingPeriodCall__Outputs {
  _call: SetUnbondingPeriodCall;

  constructor(call: SetUnbondingPeriodCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
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

  get _controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
