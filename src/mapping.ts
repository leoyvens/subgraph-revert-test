import { EthereumBlock, BigInt, Address, ByteArray } from '@graphprotocol/graph-ts'
import { BondingManager, Bond } from '../generated/Contract/BondingManager'
import { MelonAccounting, AssetAddition, LogSetAuthority, LogSetOwner } from '../generated/Contract/MelonAccounting'

export function bond(event: Bond): void {
  let bondingManager = BondingManager.bind(event.address)

  // Reverts without message.
  bondingManager.pendingStake(
    event.params.delegator,
    BigInt.fromI32(0)
  );
}

export function handleLogSetOwner(event: LogSetOwner): void {
  let melonAccounting = MelonAccounting.bind(event.address)

  // Reverts with message.
  melonAccounting.calcNav(BigInt.fromI32(0), BigInt.fromI32(1))
  assert(false)
}
