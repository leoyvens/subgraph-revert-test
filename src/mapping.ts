import { BigInt, log } from '@graphprotocol/graph-ts'
import { BondingManager, Bond } from '../generated/Contract/BondingManager'
import { MelonAccounting, LogSetOwner } from '../generated/Accounting/MelonAccounting'

export function bond(event: Bond): void {
  let bondingManager = BondingManager.bind(event.address)

  // Reverts without message. Fails subgraph on Infura, works on Alchemy.
  let result = bondingManager.try_pendingStake(
    event.params.delegator,
    BigInt.fromI32(0)
  );
  if (!result.reverted) {
    log.info("no revert for pendingStake", [])
  } else {
    log.info("pendingStake reverted", [])
  }
}

export function handleLogSetOwner(event: LogSetOwner): void {
  let melonAccounting = MelonAccounting.bind(event.address)

  // Reverts with message. Works on Infura and Alchemy.
  let result = melonAccounting.try_calcNav(BigInt.fromI32(0), BigInt.fromI32(1))
  if (!result.reverted) {
    log.info("no revert for calcNav", [])
  } else {
    log.info("calcNav reverted", [])
  }
}
