// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H256, MultiAddress, Permill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletUtilityEvent (30) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletMultisigEvent (33) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (34) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletProxyEvent (35) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: PhalaParachainRuntimeProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: PhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: PhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name PhalaParachainRuntimeProxyType (36) */
  interface PhalaParachainRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isCollator: boolean;
    readonly isStakePoolManager: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Governance' | 'Collator' | 'StakePoolManager';
  }

  /** @name PalletVestingEvent (38) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletSchedulerEvent (39) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletPreimageEvent (42) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name CumulusPalletParachainSystemEvent (43) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name CumulusPalletXcmpQueueEvent (44) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: Option<U8aFixed>;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: Option<U8aFixed>;
      readonly error: XcmV3TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV3TraitsError (45) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name CumulusPalletXcmEvent (47) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name XcmV3TraitsOutcome (48) */
  interface XcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name CumulusPalletDmpQueueEvent (49) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageId: U8aFixed;
      readonly outcome: XcmV3TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isMaxMessagesExhausted: boolean;
    readonly asMaxMessagesExhausted: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
  }

  /** @name PalletXcmEvent (50) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: XcmV3TraitsOutcome;
    readonly isSent: boolean;
    readonly asSent: ITuple<[XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseReady: boolean;
    readonly asResponseReady: ITuple<[u64, XcmV3Response]>;
    readonly isNotified: boolean;
    readonly asNotified: ITuple<[u64, u8, u8]>;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: ITuple<[XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: u64;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: ITuple<[XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: ITuple<[XcmV3MultiLocation, u32]>;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: ITuple<[XcmV3MultiLocation, u64, XcmV3TraitsError]>;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: ITuple<[XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name XcmV3MultiLocation (51) */
  interface XcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (52) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (53) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (56) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name XcmV3JunctionBodyId (59) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (60) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV3Xcm (61) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (63) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: XcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<XcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: XcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: XcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: XcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: XcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: XcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (64) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (66) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetAssetId (67) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV3MultiassetFungibility (68) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (69) */
  interface XcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmV3Response (72) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3PalletInfo (76) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (79) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV2OriginKind (82) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (83) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV3QueryResponseInfo (84) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: XcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (85) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (86) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (87) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (89) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (90) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2MultiassetMultiAssets (91) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (93) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (94) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiLocation (95) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (96) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (97) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (98) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (100) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (101) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV2MultiassetFungibility (102) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (103) */
  interface XcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmVersionedMultiLocation (104) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletBalancesEvent (105) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (106) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (107) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletAssetsEvent (108) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u32;
    } & Struct;
    readonly isAccountsDestroyed: boolean;
    readonly asAccountsDestroyed: {
      readonly assetId: u32;
      readonly accountsDestroyed: u32;
      readonly accountsRemaining: u32;
    } & Struct;
    readonly isApprovalsDestroyed: boolean;
    readonly asApprovalsDestroyed: {
      readonly assetId: u32;
      readonly approvalsDestroyed: u32;
      readonly approvalsRemaining: u32;
    } & Struct;
    readonly isDestructionStarted: boolean;
    readonly asDestructionStarted: {
      readonly assetId: u32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u32;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u32;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetMinBalanceChanged: boolean;
    readonly asAssetMinBalanceChanged: {
      readonly assetId: u32;
      readonly newMinBalance: u128;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'AccountsDestroyed' | 'ApprovalsDestroyed' | 'DestructionStarted' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged' | 'AssetMinBalanceChanged';
  }

  /** @name PalletCollatorSelectionEvent (109) */
  interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly desiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly bondAmount: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateRemoved';
  }

  /** @name PalletSessionEvent (111) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletIdentityEvent (112) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletDemocracyEvent (113) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (114) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (115) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (117) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletCollectiveEvent (118) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletTreasuryEvent (119) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletBountiesEvent (120) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletLotteryEvent (121) */
  interface PalletLotteryEvent extends Enum {
    readonly isLotteryStarted: boolean;
    readonly isCallsUpdated: boolean;
    readonly isWinner: boolean;
    readonly asWinner: {
      readonly winner: AccountId32;
      readonly lotteryBalance: u128;
    } & Struct;
    readonly isTicketBought: boolean;
    readonly asTicketBought: {
      readonly who: AccountId32;
      readonly callIndex: ITuple<[u8, u8]>;
    } & Struct;
    readonly type: 'LotteryStarted' | 'CallsUpdated' | 'Winner' | 'TicketBought';
  }

  /** @name PalletMembershipEvent (124) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletElectionsPhragmenEvent (125) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletTipsEvent (128) */
  interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosing: boolean;
    readonly asTipClosing: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosed: boolean;
    readonly asTipClosed: {
      readonly tipHash: H256;
      readonly who: AccountId32;
      readonly payout: u128;
    } & Struct;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: {
      readonly tipHash: H256;
      readonly finder: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletChildBountiesEvent (129) */
  interface PalletChildBountiesEvent extends Enum {
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly type: 'Added' | 'Awarded' | 'Claimed' | 'Canceled';
  }

  /** @name SubbridgePalletsChainbridgePalletEvent (130) */
  interface SubbridgePalletsChainbridgePalletEvent extends Enum {
    readonly isRelayerThresholdChanged: boolean;
    readonly asRelayerThresholdChanged: u32;
    readonly isChainWhitelisted: boolean;
    readonly asChainWhitelisted: u8;
    readonly isRelayerAdded: boolean;
    readonly asRelayerAdded: AccountId32;
    readonly isRelayerRemoved: boolean;
    readonly asRelayerRemoved: AccountId32;
    readonly isFungibleTransfer: boolean;
    readonly asFungibleTransfer: ITuple<[u8, u64, U8aFixed, U256, Bytes]>;
    readonly isNonFungibleTransfer: boolean;
    readonly asNonFungibleTransfer: ITuple<[u8, u64, U8aFixed, Bytes, Bytes, Bytes]>;
    readonly isGenericTransfer: boolean;
    readonly asGenericTransfer: ITuple<[u8, u64, U8aFixed, Bytes]>;
    readonly isVoteFor: boolean;
    readonly asVoteFor: ITuple<[u8, u64, AccountId32]>;
    readonly isVoteAgainst: boolean;
    readonly asVoteAgainst: ITuple<[u8, u64, AccountId32]>;
    readonly isProposalApproved: boolean;
    readonly asProposalApproved: ITuple<[u8, u64]>;
    readonly isProposalRejected: boolean;
    readonly asProposalRejected: ITuple<[u8, u64]>;
    readonly isProposalSucceeded: boolean;
    readonly asProposalSucceeded: ITuple<[u8, u64]>;
    readonly isProposalFailed: boolean;
    readonly asProposalFailed: ITuple<[u8, u64]>;
    readonly isFeeUpdated: boolean;
    readonly asFeeUpdated: {
      readonly destId: u8;
      readonly fee: u128;
    } & Struct;
    readonly type: 'RelayerThresholdChanged' | 'ChainWhitelisted' | 'RelayerAdded' | 'RelayerRemoved' | 'FungibleTransfer' | 'NonFungibleTransfer' | 'GenericTransfer' | 'VoteFor' | 'VoteAgainst' | 'ProposalApproved' | 'ProposalRejected' | 'ProposalSucceeded' | 'ProposalFailed' | 'FeeUpdated';
  }

  /** @name SubbridgePalletsXcmbridgePalletEvent (133) */
  interface SubbridgePalletsXcmbridgePalletEvent extends Enum {
    readonly isAssetTransfered: boolean;
    readonly asAssetTransfered: {
      readonly asset: XcmV3MultiAsset;
      readonly origin: XcmV3MultiLocation;
      readonly dest: XcmV3MultiLocation;
    } & Struct;
    readonly type: 'AssetTransfered';
  }

  /** @name SubbridgePalletsXtransferPalletEvent (134) */
  interface SubbridgePalletsXtransferPalletEvent extends Enum {
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly what: XcmV3MultiAsset;
      readonly who: XcmV3MultiLocation;
      readonly memo: Bytes;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly what: XcmV3MultiAsset;
      readonly who: XcmV3MultiLocation;
      readonly memo: Bytes;
    } & Struct;
    readonly isForwarded: boolean;
    readonly asForwarded: {
      readonly what: XcmV3MultiAsset;
      readonly who: XcmV3MultiLocation;
      readonly memo: Bytes;
    } & Struct;
    readonly type: 'Withdrawn' | 'Deposited' | 'Forwarded';
  }

  /** @name AssetsRegistryEvent (135) */
  interface AssetsRegistryEvent extends Enum {
    readonly isAssetRegistered: boolean;
    readonly asAssetRegistered: {
      readonly assetId: u32;
      readonly location: XcmV3MultiLocation;
    } & Struct;
    readonly isAssetUnregistered: boolean;
    readonly asAssetUnregistered: {
      readonly assetId: u32;
      readonly location: XcmV3MultiLocation;
    } & Struct;
    readonly isChainbridgeEnabled: boolean;
    readonly asChainbridgeEnabled: {
      readonly assetId: u32;
      readonly chainId: u8;
      readonly resourceId: U8aFixed;
    } & Struct;
    readonly isChainbridgeDisabled: boolean;
    readonly asChainbridgeDisabled: {
      readonly assetId: u32;
      readonly chainId: u8;
      readonly resourceId: U8aFixed;
    } & Struct;
    readonly isSygmabridgeEnabled: boolean;
    readonly asSygmabridgeEnabled: {
      readonly assetId: u32;
      readonly domainId: u8;
      readonly resourceId: U8aFixed;
    } & Struct;
    readonly isSygmabridgeDisabled: boolean;
    readonly asSygmabridgeDisabled: {
      readonly assetId: u32;
      readonly domainId: u8;
      readonly resourceId: U8aFixed;
    } & Struct;
    readonly isForceMinted: boolean;
    readonly asForceMinted: {
      readonly assetId: u32;
      readonly beneficiary: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceBurnt: boolean;
    readonly asForceBurnt: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'AssetRegistered' | 'AssetUnregistered' | 'ChainbridgeEnabled' | 'ChainbridgeDisabled' | 'SygmabridgeEnabled' | 'SygmabridgeDisabled' | 'ForceMinted' | 'ForceBurnt';
  }

  /** @name PhalaPalletsRegistryPalletEvent (136) */
  interface PhalaPalletsRegistryPalletEvent extends Enum {
    readonly isGatekeeperAdded: boolean;
    readonly asGatekeeperAdded: {
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isGatekeeperRemoved: boolean;
    readonly asGatekeeperRemoved: {
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isWorkerAdded: boolean;
    readonly asWorkerAdded: {
      readonly pubkey: SpCoreSr25519Public;
      readonly attestationProvider: Option<PhalaTypesAttestationProvider>;
      readonly confidenceLevel: u8;
    } & Struct;
    readonly isWorkerUpdated: boolean;
    readonly asWorkerUpdated: {
      readonly pubkey: SpCoreSr25519Public;
      readonly attestationProvider: Option<PhalaTypesAttestationProvider>;
      readonly confidenceLevel: u8;
    } & Struct;
    readonly isMasterKeyRotated: boolean;
    readonly asMasterKeyRotated: {
      readonly rotationId: u64;
      readonly masterPubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isMasterKeyRotationFailed: boolean;
    readonly asMasterKeyRotationFailed: {
      readonly rotationLock: Option<u64>;
      readonly gatekeeperRotationId: u64;
    } & Struct;
    readonly isInitialScoreSet: boolean;
    readonly asInitialScoreSet: {
      readonly pubkey: SpCoreSr25519Public;
      readonly initScore: u32;
    } & Struct;
    readonly isMinimumPRuntimeVersionChangedTo: boolean;
    readonly asMinimumPRuntimeVersionChangedTo: ITuple<[u32, u32, u32]>;
    readonly isPRuntimeConsensusVersionChangedTo: boolean;
    readonly asPRuntimeConsensusVersionChangedTo: u32;
    readonly isGatekeeperLaunched: boolean;
    readonly type: 'GatekeeperAdded' | 'GatekeeperRemoved' | 'WorkerAdded' | 'WorkerUpdated' | 'MasterKeyRotated' | 'MasterKeyRotationFailed' | 'InitialScoreSet' | 'MinimumPRuntimeVersionChangedTo' | 'PRuntimeConsensusVersionChangedTo' | 'GatekeeperLaunched';
  }

  /** @name SpCoreSr25519Public (137) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PhalaTypesAttestationProvider (139) */
  interface PhalaTypesAttestationProvider extends Enum {
    readonly isRoot: boolean;
    readonly isIas: boolean;
    readonly type: 'Root' | 'Ias';
  }

  /** @name PhalaPalletsComputeComputationPalletEvent (141) */
  interface PhalaPalletsComputeComputationPalletEvent extends Enum {
    readonly isCoolDownExpirationChanged: boolean;
    readonly asCoolDownExpirationChanged: {
      readonly period: u64;
    } & Struct;
    readonly isWorkerStarted: boolean;
    readonly asWorkerStarted: {
      readonly session: AccountId32;
      readonly initV: u128;
      readonly initP: u32;
    } & Struct;
    readonly isWorkerStopped: boolean;
    readonly asWorkerStopped: {
      readonly session: AccountId32;
    } & Struct;
    readonly isWorkerReclaimed: boolean;
    readonly asWorkerReclaimed: {
      readonly session: AccountId32;
      readonly originalStake: u128;
      readonly slashed: u128;
    } & Struct;
    readonly isSessionBound: boolean;
    readonly asSessionBound: {
      readonly session: AccountId32;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isSessionUnbound: boolean;
    readonly asSessionUnbound: {
      readonly session: AccountId32;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isWorkerEnterUnresponsive: boolean;
    readonly asWorkerEnterUnresponsive: {
      readonly session: AccountId32;
    } & Struct;
    readonly isWorkerExitUnresponsive: boolean;
    readonly asWorkerExitUnresponsive: {
      readonly session: AccountId32;
    } & Struct;
    readonly isSessionSettled: boolean;
    readonly asSessionSettled: {
      readonly session: AccountId32;
      readonly vBits: u128;
      readonly payoutBits: u128;
    } & Struct;
    readonly isInternalErrorWorkerSettleFailed: boolean;
    readonly asInternalErrorWorkerSettleFailed: {
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isSubsidyBudgetHalved: boolean;
    readonly isInternalErrorWrongHalvingConfigured: boolean;
    readonly isTokenomicParametersChanged: boolean;
    readonly isSessionSettlementDropped: boolean;
    readonly asSessionSettlementDropped: {
      readonly session: AccountId32;
      readonly v: u128;
      readonly payout: u128;
    } & Struct;
    readonly isBenchmarkUpdated: boolean;
    readonly asBenchmarkUpdated: {
      readonly session: AccountId32;
      readonly pInstant: u32;
    } & Struct;
    readonly isBudgetUpdated: boolean;
    readonly asBudgetUpdated: {
      readonly nonce: u64;
      readonly budget: u128;
    } & Struct;
    readonly type: 'CoolDownExpirationChanged' | 'WorkerStarted' | 'WorkerStopped' | 'WorkerReclaimed' | 'SessionBound' | 'SessionUnbound' | 'WorkerEnterUnresponsive' | 'WorkerExitUnresponsive' | 'SessionSettled' | 'InternalErrorWorkerSettleFailed' | 'SubsidyBudgetHalved' | 'InternalErrorWrongHalvingConfigured' | 'TokenomicParametersChanged' | 'SessionSettlementDropped' | 'BenchmarkUpdated' | 'BudgetUpdated';
  }

  /** @name PhalaPalletsStakePoolPalletEvent (142) */
  type PhalaPalletsStakePoolPalletEvent = Null;

  /** @name PhalaPalletsComputeStakePoolV2PalletEvent (143) */
  interface PhalaPalletsComputeStakePoolV2PalletEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly owner: AccountId32;
      readonly pid: u64;
      readonly cid: u32;
      readonly poolAccountId: AccountId32;
    } & Struct;
    readonly isPoolCommissionSet: boolean;
    readonly asPoolCommissionSet: {
      readonly pid: u64;
      readonly commission: u32;
    } & Struct;
    readonly isPoolCapacitySet: boolean;
    readonly asPoolCapacitySet: {
      readonly pid: u64;
      readonly cap: u128;
    } & Struct;
    readonly isPoolWorkerAdded: boolean;
    readonly asPoolWorkerAdded: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly session: AccountId32;
    } & Struct;
    readonly isContribution: boolean;
    readonly asContribution: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
      readonly shares: u128;
      readonly asVault: Option<u64>;
    } & Struct;
    readonly isOwnerRewardsWithdrawn: boolean;
    readonly asOwnerRewardsWithdrawn: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isPoolSlashed: boolean;
    readonly asPoolSlashed: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isSlashSettled: boolean;
    readonly asSlashSettled: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRewardDismissedNotInPool: boolean;
    readonly asRewardDismissedNotInPool: {
      readonly worker: SpCoreSr25519Public;
      readonly amount: u128;
    } & Struct;
    readonly isRewardDismissedNoShare: boolean;
    readonly asRewardDismissedNoShare: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isRewardDismissedDust: boolean;
    readonly asRewardDismissedDust: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isPoolWorkerRemoved: boolean;
    readonly asPoolWorkerRemoved: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isWorkerReclaimed: boolean;
    readonly asWorkerReclaimed: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isRewardReceived: boolean;
    readonly asRewardReceived: {
      readonly pid: u64;
      readonly toOwner: u128;
      readonly toStakers: u128;
    } & Struct;
    readonly isWorkingStarted: boolean;
    readonly asWorkingStarted: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly amount: u128;
    } & Struct;
    readonly isRewardToOwnerDismissedDust: boolean;
    readonly asRewardToOwnerDismissedDust: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isRewardToDistributionDismissedDust: boolean;
    readonly asRewardToDistributionDismissedDust: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly type: 'PoolCreated' | 'PoolCommissionSet' | 'PoolCapacitySet' | 'PoolWorkerAdded' | 'Contribution' | 'OwnerRewardsWithdrawn' | 'PoolSlashed' | 'SlashSettled' | 'RewardDismissedNotInPool' | 'RewardDismissedNoShare' | 'RewardDismissedDust' | 'PoolWorkerRemoved' | 'WorkerReclaimed' | 'RewardReceived' | 'WorkingStarted' | 'RewardToOwnerDismissedDust' | 'RewardToDistributionDismissedDust';
  }

  /** @name PhalaPalletsComputeVaultPalletEvent (144) */
  interface PhalaPalletsComputeVaultPalletEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly owner: AccountId32;
      readonly pid: u64;
      readonly cid: u32;
      readonly poolAccountId: AccountId32;
    } & Struct;
    readonly isVaultCommissionSet: boolean;
    readonly asVaultCommissionSet: {
      readonly pid: u64;
      readonly commission: u32;
    } & Struct;
    readonly isOwnerSharesClaimed: boolean;
    readonly asOwnerSharesClaimed: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly shares: u128;
    } & Struct;
    readonly isOwnerSharesGained: boolean;
    readonly asOwnerSharesGained: {
      readonly pid: u64;
      readonly shares: u128;
      readonly checkoutPrice: u128;
    } & Struct;
    readonly isContribution: boolean;
    readonly asContribution: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
      readonly shares: u128;
    } & Struct;
    readonly type: 'PoolCreated' | 'VaultCommissionSet' | 'OwnerSharesClaimed' | 'OwnerSharesGained' | 'Contribution';
  }

  /** @name PhalaPalletsComputeWrappedBalancesPalletEvent (145) */
  interface PhalaPalletsComputeWrappedBalancesPalletEvent extends Enum {
    readonly isDustRemoved: boolean;
    readonly asDustRemoved: {
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWrapped: boolean;
    readonly asWrapped: {
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnwrapped: boolean;
    readonly asUnwrapped: {
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly user: AccountId32;
      readonly voteId: u32;
      readonly ayeAmount: u128;
      readonly nayAmount: u128;
    } & Struct;
    readonly type: 'DustRemoved' | 'Wrapped' | 'Unwrapped' | 'Voted';
  }

  /** @name PhalaPalletsComputeBasePoolPalletEvent (146) */
  interface PhalaPalletsComputeBasePoolPalletEvent extends Enum {
    readonly isNftCreated: boolean;
    readonly asNftCreated: {
      readonly pid: u64;
      readonly cid: u32;
      readonly nftId: u32;
      readonly owner: AccountId32;
      readonly shares: u128;
    } & Struct;
    readonly isWithdrawalQueued: boolean;
    readonly asWithdrawalQueued: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly shares: u128;
      readonly nftId: u32;
      readonly asVault: Option<u64>;
    } & Struct;
    readonly isWithdrawal: boolean;
    readonly asWithdrawal: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
      readonly shares: u128;
    } & Struct;
    readonly isPoolWhitelistCreated: boolean;
    readonly asPoolWhitelistCreated: {
      readonly pid: u64;
    } & Struct;
    readonly isPoolWhitelistDeleted: boolean;
    readonly asPoolWhitelistDeleted: {
      readonly pid: u64;
    } & Struct;
    readonly isPoolWhitelistStakerAdded: boolean;
    readonly asPoolWhitelistStakerAdded: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly isPoolWhitelistStakerRemoved: boolean;
    readonly asPoolWhitelistStakerRemoved: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly type: 'NftCreated' | 'WithdrawalQueued' | 'Withdrawal' | 'PoolWhitelistCreated' | 'PoolWhitelistDeleted' | 'PoolWhitelistStakerAdded' | 'PoolWhitelistStakerRemoved';
  }

  /** @name PhalaPalletsPhatPalletEvent (147) */
  interface PhalaPalletsPhatPalletEvent extends Enum {
    readonly isClusterCreated: boolean;
    readonly asClusterCreated: {
      readonly cluster: H256;
      readonly systemContract: H256;
    } & Struct;
    readonly isClusterPubkeyAvailable: boolean;
    readonly asClusterPubkeyAvailable: {
      readonly cluster: H256;
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isClusterDeployed: boolean;
    readonly asClusterDeployed: {
      readonly cluster: H256;
      readonly pubkey: SpCoreSr25519Public;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isClusterDeploymentFailed: boolean;
    readonly asClusterDeploymentFailed: {
      readonly cluster: H256;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isInstantiating: boolean;
    readonly asInstantiating: {
      readonly contract: H256;
      readonly cluster: H256;
      readonly deployer: AccountId32;
    } & Struct;
    readonly isContractPubkeyAvailable: boolean;
    readonly asContractPubkeyAvailable: {
      readonly contract: H256;
      readonly cluster: H256;
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isInstantiated: boolean;
    readonly asInstantiated: {
      readonly contract: H256;
      readonly cluster: H256;
      readonly deployer: H256;
    } & Struct;
    readonly isClusterDestroyed: boolean;
    readonly asClusterDestroyed: {
      readonly cluster: H256;
    } & Struct;
    readonly isTransfered: boolean;
    readonly asTransfered: {
      readonly cluster: H256;
      readonly account: H256;
      readonly amount: u128;
    } & Struct;
    readonly isWorkerAddedToCluster: boolean;
    readonly asWorkerAddedToCluster: {
      readonly worker: SpCoreSr25519Public;
      readonly cluster: H256;
    } & Struct;
    readonly isWorkerRemovedFromCluster: boolean;
    readonly asWorkerRemovedFromCluster: {
      readonly worker: SpCoreSr25519Public;
      readonly cluster: H256;
    } & Struct;
    readonly type: 'ClusterCreated' | 'ClusterPubkeyAvailable' | 'ClusterDeployed' | 'ClusterDeploymentFailed' | 'Instantiating' | 'ContractPubkeyAvailable' | 'Instantiated' | 'ClusterDestroyed' | 'Transfered' | 'WorkerAddedToCluster' | 'WorkerRemovedFromCluster';
  }

  /** @name PhalaPalletsPhatTokenomicPalletEvent (148) */
  interface PhalaPalletsPhatTokenomicPalletEvent extends Enum {
    readonly isContractDepositChanged: boolean;
    readonly asContractDepositChanged: {
      readonly cluster: Option<H256>;
      readonly contract: H256;
      readonly deposit: u128;
    } & Struct;
    readonly isUserStakeChanged: boolean;
    readonly asUserStakeChanged: {
      readonly cluster: Option<H256>;
      readonly account: AccountId32;
      readonly contract: H256;
      readonly stake: u128;
    } & Struct;
    readonly type: 'ContractDepositChanged' | 'UserStakeChanged';
  }

  /** @name PalletUniquesEvent (150) */
  interface PalletUniquesEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u32;
      readonly item: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isCollectionFrozen: boolean;
    readonly asCollectionFrozen: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionThawed: boolean;
    readonly asCollectionThawed: {
      readonly collection: u32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u32;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isItemStatusChanged: boolean;
    readonly asItemStatusChanged: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u32;
      readonly successfulItems: Vec<u32>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: AccountId32;
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly seller: AccountId32;
      readonly buyer: AccountId32;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'Frozen' | 'Thawed' | 'CollectionFrozen' | 'CollectionThawed' | 'OwnerChanged' | 'TeamChanged' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'ItemStatusChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'MetadataSet' | 'MetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought';
  }

  /** @name PalletRmrkCoreEvent (157) */
  interface PalletRmrkCoreEvent extends Enum {
    readonly isCollectionCreated: boolean;
    readonly asCollectionCreated: {
      readonly issuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isNftMinted: boolean;
    readonly asNftMinted: {
      readonly owner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isNftBurned: boolean;
    readonly asNftBurned: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isCollectionDestroyed: boolean;
    readonly asCollectionDestroyed: {
      readonly issuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isNftSent: boolean;
    readonly asNftSent: {
      readonly sender: AccountId32;
      readonly recipient: RmrkTraitsNftAccountIdOrCollectionNftTuple;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly approvalRequired: bool;
    } & Struct;
    readonly isNftAccepted: boolean;
    readonly asNftAccepted: {
      readonly sender: AccountId32;
      readonly recipient: RmrkTraitsNftAccountIdOrCollectionNftTuple;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isNftRejected: boolean;
    readonly asNftRejected: {
      readonly sender: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isIssuerChanged: boolean;
    readonly asIssuerChanged: {
      readonly oldIssuer: AccountId32;
      readonly newIssuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isPropertySet: boolean;
    readonly asPropertySet: {
      readonly collectionId: u32;
      readonly maybeNftId: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isPropertyRemoved: boolean;
    readonly asPropertyRemoved: {
      readonly collectionId: u32;
      readonly maybeNftId: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isPropertiesRemoved: boolean;
    readonly asPropertiesRemoved: {
      readonly collectionId: u32;
      readonly maybeNftId: Option<u32>;
    } & Struct;
    readonly isCollectionLocked: boolean;
    readonly asCollectionLocked: {
      readonly issuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceAdded: boolean;
    readonly asResourceAdded: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceReplaced: boolean;
    readonly asResourceReplaced: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceAccepted: boolean;
    readonly asResourceAccepted: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceRemoval: boolean;
    readonly asResourceRemoval: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceRemovalAccepted: boolean;
    readonly asResourceRemovalAccepted: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isPrioritySet: boolean;
    readonly asPrioritySet: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly type: 'CollectionCreated' | 'NftMinted' | 'NftBurned' | 'CollectionDestroyed' | 'NftSent' | 'NftAccepted' | 'NftRejected' | 'IssuerChanged' | 'PropertySet' | 'PropertyRemoved' | 'PropertiesRemoved' | 'CollectionLocked' | 'ResourceAdded' | 'ResourceReplaced' | 'ResourceAccepted' | 'ResourceRemoval' | 'ResourceRemovalAccepted' | 'PrioritySet';
  }

  /** @name RmrkTraitsNftAccountIdOrCollectionNftTuple (158) */
  interface RmrkTraitsNftAccountIdOrCollectionNftTuple extends Enum {
    readonly isAccountId: boolean;
    readonly asAccountId: AccountId32;
    readonly isCollectionAndNftTuple: boolean;
    readonly asCollectionAndNftTuple: ITuple<[u32, u32]>;
    readonly type: 'AccountId' | 'CollectionAndNftTuple';
  }

  /** @name PalletRmrkEquipEvent (159) */
  interface PalletRmrkEquipEvent extends Enum {
    readonly isBaseCreated: boolean;
    readonly asBaseCreated: {
      readonly issuer: AccountId32;
      readonly baseId: u32;
    } & Struct;
    readonly isSlotEquipped: boolean;
    readonly asSlotEquipped: {
      readonly itemCollection: u32;
      readonly itemNft: u32;
      readonly baseId: u32;
      readonly slotId: u32;
    } & Struct;
    readonly isSlotUnequipped: boolean;
    readonly asSlotUnequipped: {
      readonly itemCollection: u32;
      readonly itemNft: u32;
      readonly baseId: u32;
      readonly slotId: u32;
    } & Struct;
    readonly isEquippablesUpdated: boolean;
    readonly asEquippablesUpdated: {
      readonly baseId: u32;
      readonly slotId: u32;
    } & Struct;
    readonly isBaseIssuerChanged: boolean;
    readonly asBaseIssuerChanged: {
      readonly oldIssuer: AccountId32;
      readonly newIssuer: AccountId32;
      readonly baseId: u32;
    } & Struct;
    readonly type: 'BaseCreated' | 'SlotEquipped' | 'SlotUnequipped' | 'EquippablesUpdated' | 'BaseIssuerChanged';
  }

  /** @name PalletRmrkMarketEvent (160) */
  interface PalletRmrkMarketEvent extends Enum {
    readonly isTokenPriceUpdated: boolean;
    readonly asTokenPriceUpdated: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: Option<u128>;
    } & Struct;
    readonly isTokenSold: boolean;
    readonly asTokenSold: {
      readonly owner: AccountId32;
      readonly buyer: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: u128;
    } & Struct;
    readonly isTokenListed: boolean;
    readonly asTokenListed: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: u128;
    } & Struct;
    readonly isTokenUnlisted: boolean;
    readonly asTokenUnlisted: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isOfferPlaced: boolean;
    readonly asOfferPlaced: {
      readonly offerer: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: u128;
    } & Struct;
    readonly isOfferWithdrawn: boolean;
    readonly asOfferWithdrawn: {
      readonly sender: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isOfferAccepted: boolean;
    readonly asOfferAccepted: {
      readonly owner: AccountId32;
      readonly buyer: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isRoyaltyFeePaid: boolean;
    readonly asRoyaltyFeePaid: {
      readonly sender: AccountId32;
      readonly royaltyOwner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isMarketFeePaid: boolean;
    readonly asMarketFeePaid: {
      readonly sender: AccountId32;
      readonly marketplaceOwner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'TokenPriceUpdated' | 'TokenSold' | 'TokenListed' | 'TokenUnlisted' | 'OfferPlaced' | 'OfferWithdrawn' | 'OfferAccepted' | 'RoyaltyFeePaid' | 'MarketFeePaid';
  }

  /** @name SygmaAccessSegregatorEvent (162) */
  interface SygmaAccessSegregatorEvent extends Enum {
    readonly isAccessGranted: boolean;
    readonly asAccessGranted: {
      readonly palletIndex: u8;
      readonly extrinsicName: Bytes;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'AccessGranted';
  }

  /** @name SygmaBasicFeehandlerEvent (163) */
  interface SygmaBasicFeehandlerEvent extends Enum {
    readonly isFeeSet: boolean;
    readonly asFeeSet: {
      readonly domain: u8;
      readonly asset: XcmV3MultiassetAssetId;
      readonly amount: u128;
    } & Struct;
    readonly type: 'FeeSet';
  }

  /** @name SygmaBridgeEvent (164) */
  interface SygmaBridgeEvent extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly destDomainId: u8;
      readonly resourceId: U8aFixed;
      readonly depositNonce: u64;
      readonly sender: AccountId32;
      readonly transferType: SygmaTraitsTransferType;
      readonly depositData: Bytes;
      readonly handlerResponse: Bytes;
    } & Struct;
    readonly isProposalExecution: boolean;
    readonly asProposalExecution: {
      readonly originDomainId: u8;
      readonly depositNonce: u64;
      readonly dataHash: U8aFixed;
    } & Struct;
    readonly isFailedHandlerExecution: boolean;
    readonly asFailedHandlerExecution: {
      readonly error: Bytes;
      readonly originDomainId: u8;
      readonly depositNonce: u64;
    } & Struct;
    readonly isRetry: boolean;
    readonly asRetry: {
      readonly depositOnBlockHeight: u128;
      readonly destDomainId: u8;
      readonly sender: AccountId32;
    } & Struct;
    readonly isBridgePaused: boolean;
    readonly asBridgePaused: {
      readonly destDomainId: u8;
    } & Struct;
    readonly isBridgeUnpaused: boolean;
    readonly asBridgeUnpaused: {
      readonly destDomainId: u8;
    } & Struct;
    readonly isRegisterDestDomain: boolean;
    readonly asRegisterDestDomain: {
      readonly sender: AccountId32;
      readonly domainId: u8;
      readonly chainId: U256;
    } & Struct;
    readonly isUnregisterDestDomain: boolean;
    readonly asUnregisterDestDomain: {
      readonly sender: AccountId32;
      readonly domainId: u8;
      readonly chainId: U256;
    } & Struct;
    readonly type: 'Deposit' | 'ProposalExecution' | 'FailedHandlerExecution' | 'Retry' | 'BridgePaused' | 'BridgeUnpaused' | 'RegisterDestDomain' | 'UnregisterDestDomain';
  }

  /** @name SygmaTraitsTransferType (165) */
  interface SygmaTraitsTransferType extends Enum {
    readonly isFungibleTransfer: boolean;
    readonly isNonFungibleTransfer: boolean;
    readonly isGenericTransfer: boolean;
    readonly type: 'FungibleTransfer' | 'NonFungibleTransfer' | 'GenericTransfer';
  }

  /** @name SygmaFeeHandlerRouterEvent (166) */
  interface SygmaFeeHandlerRouterEvent extends Enum {
    readonly isFeeHandlerSet: boolean;
    readonly asFeeHandlerSet: {
      readonly domain: u8;
      readonly asset: XcmV3MultiassetAssetId;
      readonly handlerType: SygmaFeeHandlerRouterFeeHandlerType;
    } & Struct;
    readonly type: 'FeeHandlerSet';
  }

  /** @name SygmaFeeHandlerRouterFeeHandlerType (167) */
  interface SygmaFeeHandlerRouterFeeHandlerType extends Enum {
    readonly isBasicFeeHandler: boolean;
    readonly isDynamicFeeHandler: boolean;
    readonly type: 'BasicFeeHandler' | 'DynamicFeeHandler';
  }

  /** @name SubbridgePalletsSygmaWrapperPalletEvent (168) */
  interface SubbridgePalletsSygmaWrapperPalletEvent extends Enum {
    readonly isAssetTransfered: boolean;
    readonly asAssetTransfered: {
      readonly asset: XcmV3MultiAsset;
      readonly origin: XcmV3MultiLocation;
      readonly dest: XcmV3MultiLocation;
    } & Struct;
    readonly type: 'AssetTransfered';
  }

  /** @name PalletIndexEvent (169) */
  interface PalletIndexEvent extends Enum {
    readonly isWorkerAdd: boolean;
    readonly asWorkerAdd: {
      readonly worker: AccountId32;
    } & Struct;
    readonly isWorkerRemove: boolean;
    readonly asWorkerRemove: {
      readonly worker: AccountId32;
    } & Struct;
    readonly isNewTask: boolean;
    readonly asNewTask: {
      readonly depositInfo: PalletIndexDepositInfo;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly tasks: Vec<U8aFixed>;
    } & Struct;
    readonly type: 'WorkerAdd' | 'WorkerRemove' | 'NewTask' | 'Claimed';
  }

  /** @name PalletIndexDepositInfo (170) */
  interface PalletIndexDepositInfo extends Struct {
    readonly sender: AccountId32;
    readonly asset: XcmV3MultiassetAssetId;
    readonly amount: u128;
    readonly recipient: Bytes;
    readonly task: Bytes;
  }

  /** @name FrameSystemPhase (172) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (175) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (177) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (181) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (182) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (183) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (185) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (186) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (187) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (188) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (192) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (193) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletUtilityCall (195) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: PhalaParachainRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name PalletMultisigCall (198) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletProxyCall (200) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<PhalaParachainRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: PhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: PhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: PhalaParachainRuntimeProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: PhalaParachainRuntimeProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<PhalaParachainRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletVestingCall (204) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (205) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletSchedulerCall (206) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletPreimageCall (208) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name CumulusPalletParachainSystemCall (209) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (210) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV4PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV4PersistedValidationData (211) */
  interface PolkadotPrimitivesV4PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (213) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (216) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (219) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletXcmpQueueCall (222) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateThresholdWeight: boolean;
    readonly asUpdateThresholdWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name CumulusPalletDmpQueueCall (223) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletXcmCall (224) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV3MultiLocation;
      readonly xcmVersion: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name XcmVersionedXcm (225) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2Xcm (226) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (228) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV2Response (229) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (232) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name XcmV2MultiassetMultiAssetFilter (233) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (234) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (235) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (236) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name PalletBalancesCall (245) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
  }

  /** @name PalletAssetsCall (246) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u32>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isStartDestroy: boolean;
    readonly asStartDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyAccounts: boolean;
    readonly asDestroyAccounts: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyApprovals: boolean;
    readonly asDestroyApprovals: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isFinishDestroy: boolean;
    readonly asFinishDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u32>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u32>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u32>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u32>;
      readonly allowBurn: bool;
    } & Struct;
    readonly isSetMinBalance: boolean;
    readonly asSetMinBalance: {
      readonly id: Compact<u32>;
      readonly minBalance: u128;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'StartDestroy' | 'DestroyAccounts' | 'DestroyApprovals' | 'FinishDestroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund' | 'SetMinBalance';
  }

  /** @name PalletCollatorSelectionCall (247) */
  interface PalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'LeaveIntent';
  }

  /** @name PalletSessionCall (248) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: PhalaParachainRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name PhalaParachainRuntimeOpaqueSessionKeys (249) */
  interface PhalaParachainRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (250) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name PalletIdentityCall (251) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (252) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (288) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (289) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (290) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletDemocracyCall (291) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name FrameSupportPreimagesBounded (292) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletDemocracyConviction (294) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (295) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletTreasuryCall (296) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletBountiesCall (297) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletLotteryCall (298) */
  interface PalletLotteryCall extends Enum {
    readonly isBuyTicket: boolean;
    readonly asBuyTicket: {
      readonly call: Call;
    } & Struct;
    readonly isSetCalls: boolean;
    readonly asSetCalls: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isStartLottery: boolean;
    readonly asStartLottery: {
      readonly price: u128;
      readonly length: u32;
      readonly delay: u32;
      readonly repeat: bool;
    } & Struct;
    readonly isStopRepeat: boolean;
    readonly type: 'BuyTicket' | 'SetCalls' | 'StartLottery' | 'StopRepeat';
  }

  /** @name PalletMembershipCall (300) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletElectionsPhragmenCall (301) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (302) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletTipsCall (303) */
  interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletChildBountiesCall (304) */
  interface PalletChildBountiesCall extends Enum {
    readonly isAddChildBounty: boolean;
    readonly asAddChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isAwardChildBounty: boolean;
    readonly asAwardChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimChildBounty: boolean;
    readonly asClaimChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isCloseChildBounty: boolean;
    readonly asCloseChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly type: 'AddChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardChildBounty' | 'ClaimChildBounty' | 'CloseChildBounty';
  }

  /** @name SubbridgePalletsChainbridgePalletCall (305) */
  interface SubbridgePalletsChainbridgePalletCall extends Enum {
    readonly isSetThreshold: boolean;
    readonly asSetThreshold: {
      readonly threshold: u32;
    } & Struct;
    readonly isWhitelistChain: boolean;
    readonly asWhitelistChain: {
      readonly id: u8;
    } & Struct;
    readonly isAddRelayer: boolean;
    readonly asAddRelayer: {
      readonly v: AccountId32;
    } & Struct;
    readonly isRemoveRelayer: boolean;
    readonly asRemoveRelayer: {
      readonly v: AccountId32;
    } & Struct;
    readonly isUpdateFee: boolean;
    readonly asUpdateFee: {
      readonly fee: u128;
      readonly destId: u8;
    } & Struct;
    readonly isAcknowledgeProposal: boolean;
    readonly asAcknowledgeProposal: {
      readonly nonce: u64;
      readonly srcId: u8;
      readonly rId: U8aFixed;
      readonly call: Call;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly nonce: u64;
      readonly srcId: u8;
      readonly rId: U8aFixed;
      readonly call: Call;
    } & Struct;
    readonly isEvalVoteState: boolean;
    readonly asEvalVoteState: {
      readonly nonce: u64;
      readonly srcId: u8;
      readonly prop: Call;
    } & Struct;
    readonly isHandleFungibleTransfer: boolean;
    readonly asHandleFungibleTransfer: {
      readonly dest: Bytes;
      readonly amount: u128;
      readonly rid: U8aFixed;
    } & Struct;
    readonly type: 'SetThreshold' | 'WhitelistChain' | 'AddRelayer' | 'RemoveRelayer' | 'UpdateFee' | 'AcknowledgeProposal' | 'RejectProposal' | 'EvalVoteState' | 'HandleFungibleTransfer';
  }

  /** @name SubbridgePalletsXtransferPalletCall (306) */
  interface SubbridgePalletsXtransferPalletCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly asset: XcmV3MultiAsset;
      readonly dest: XcmV3MultiLocation;
      readonly destWeight: Option<SpWeightsWeightV2Weight>;
    } & Struct;
    readonly isTransferGeneric: boolean;
    readonly asTransferGeneric: {
      readonly data: Bytes;
      readonly dest: XcmV3MultiLocation;
      readonly destWeight: Option<SpWeightsWeightV2Weight>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferGeneric';
  }

  /** @name AssetsRegistryCall (308) */
  interface AssetsRegistryCall extends Enum {
    readonly isForceWithdrawFund: boolean;
    readonly asForceWithdrawFund: {
      readonly assetId: Option<u32>;
      readonly recipient: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceRegisterAsset: boolean;
    readonly asForceRegisterAsset: {
      readonly location: XcmV3MultiLocation;
      readonly assetId: u32;
      readonly properties: AssetsRegistryAssetProperties;
    } & Struct;
    readonly isForceUnregisterAsset: boolean;
    readonly asForceUnregisterAsset: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly assetId: u32;
      readonly properties: AssetsRegistryAssetProperties;
    } & Struct;
    readonly isForceMint: boolean;
    readonly asForceMint: {
      readonly assetId: u32;
      readonly beneficiary: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceBurn: boolean;
    readonly asForceBurn: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceSetPrice: boolean;
    readonly asForceSetPrice: {
      readonly assetId: u32;
      readonly executionPrice: u128;
    } & Struct;
    readonly isForceSetLocation: boolean;
    readonly asForceSetLocation: {
      readonly assetId: u32;
      readonly location: XcmV3MultiLocation;
    } & Struct;
    readonly isForceEnableChainbridge: boolean;
    readonly asForceEnableChainbridge: {
      readonly assetId: u32;
      readonly chainId: u8;
      readonly isMintable: bool;
      readonly metadata: Bytes;
    } & Struct;
    readonly isForceDisableChainbridge: boolean;
    readonly asForceDisableChainbridge: {
      readonly assetId: u32;
      readonly chainId: u8;
    } & Struct;
    readonly isForceEnableSygmabridge: boolean;
    readonly asForceEnableSygmabridge: {
      readonly assetId: u32;
      readonly resourceId: U8aFixed;
      readonly domainId: u8;
      readonly isMintable: bool;
      readonly metadata: Bytes;
    } & Struct;
    readonly isForceDisableSygmabridge: boolean;
    readonly asForceDisableSygmabridge: {
      readonly assetId: u32;
      readonly resourceId: U8aFixed;
      readonly domainId: u8;
    } & Struct;
    readonly type: 'ForceWithdrawFund' | 'ForceRegisterAsset' | 'ForceUnregisterAsset' | 'ForceSetMetadata' | 'ForceMint' | 'ForceBurn' | 'ForceSetPrice' | 'ForceSetLocation' | 'ForceEnableChainbridge' | 'ForceDisableChainbridge' | 'ForceEnableSygmabridge' | 'ForceDisableSygmabridge';
  }

  /** @name AssetsRegistryAssetProperties (309) */
  interface AssetsRegistryAssetProperties extends Struct {
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
  }

  /** @name PhalaPalletsMqPalletCall (310) */
  interface PhalaPalletsMqPalletCall extends Enum {
    readonly isSyncOffchainMessage: boolean;
    readonly asSyncOffchainMessage: {
      readonly signedMessage: PhalaMqSignedMessage;
    } & Struct;
    readonly isPushMessage: boolean;
    readonly asPushMessage: {
      readonly destination: Bytes;
      readonly payload: Bytes;
    } & Struct;
    readonly isForcePushPalletMessage: boolean;
    readonly asForcePushPalletMessage: {
      readonly destination: Bytes;
      readonly payload: Bytes;
    } & Struct;
    readonly type: 'SyncOffchainMessage' | 'PushMessage' | 'ForcePushPalletMessage';
  }

  /** @name PhalaMqSignedMessage (311) */
  interface PhalaMqSignedMessage extends Struct {
    readonly message: PhalaMqMessage;
    readonly sequence: u64;
    readonly signature: Bytes;
  }

  /** @name PhalaMqMessage (312) */
  interface PhalaMqMessage extends Struct {
    readonly sender: PhalaMqMessageOrigin;
    readonly destination: Bytes;
    readonly payload: Bytes;
  }

  /** @name PhalaMqMessageOrigin (313) */
  interface PhalaMqMessageOrigin extends Enum {
    readonly isPallet: boolean;
    readonly asPallet: Bytes;
    readonly isContract: boolean;
    readonly asContract: H256;
    readonly isWorker: boolean;
    readonly asWorker: SpCoreSr25519Public;
    readonly isAccountId: boolean;
    readonly asAccountId: H256;
    readonly isMultiLocation: boolean;
    readonly asMultiLocation: Bytes;
    readonly isGatekeeper: boolean;
    readonly isCluster: boolean;
    readonly asCluster: H256;
    readonly isReserved: boolean;
    readonly type: 'Pallet' | 'Contract' | 'Worker' | 'AccountId' | 'MultiLocation' | 'Gatekeeper' | 'Cluster' | 'Reserved';
  }

  /** @name PhalaPalletsRegistryPalletCall (315) */
  interface PhalaPalletsRegistryPalletCall extends Enum {
    readonly isForceSetBenchmarkDuration: boolean;
    readonly asForceSetBenchmarkDuration: {
      readonly value: u32;
    } & Struct;
    readonly isForceRegisterWorker: boolean;
    readonly asForceRegisterWorker: {
      readonly pubkey: SpCoreSr25519Public;
      readonly ecdhPubkey: SpCoreSr25519Public;
      readonly operator: Option<AccountId32>;
    } & Struct;
    readonly isForceRegisterTopicPubkey: boolean;
    readonly asForceRegisterTopicPubkey: {
      readonly topic: Bytes;
      readonly pubkey: Bytes;
    } & Struct;
    readonly isRegisterGatekeeper: boolean;
    readonly asRegisterGatekeeper: {
      readonly gatekeeper: SpCoreSr25519Public;
    } & Struct;
    readonly isUnregisterGatekeeper: boolean;
    readonly asUnregisterGatekeeper: {
      readonly gatekeeper: SpCoreSr25519Public;
    } & Struct;
    readonly isRotateMasterKey: boolean;
    readonly isRegisterWorker: boolean;
    readonly asRegisterWorker: {
      readonly pruntimeInfo: PhalaTypesWorkerRegistrationInfo;
      readonly attestation: PhalaPalletsUtilsAttestationLegacyAttestation;
    } & Struct;
    readonly isRegisterWorkerV2: boolean;
    readonly asRegisterWorkerV2: {
      readonly pruntimeInfo: PhalaTypesWorkerRegistrationInfoV2;
      readonly attestation: Option<PhalaTypesAttestationReport>;
    } & Struct;
    readonly isUpdateWorkerEndpoint: boolean;
    readonly asUpdateWorkerEndpoint: {
      readonly endpointPayload: PhalaTypesWorkerEndpointPayload;
      readonly signature: Bytes;
    } & Struct;
    readonly isAddPruntime: boolean;
    readonly asAddPruntime: {
      readonly pruntimeHash: Bytes;
    } & Struct;
    readonly isRemovePruntime: boolean;
    readonly asRemovePruntime: {
      readonly pruntimeHash: Bytes;
    } & Struct;
    readonly isAddRelaychainGenesisBlockHash: boolean;
    readonly asAddRelaychainGenesisBlockHash: {
      readonly genesisBlockHash: H256;
    } & Struct;
    readonly isRemoveRelaychainGenesisBlockHash: boolean;
    readonly asRemoveRelaychainGenesisBlockHash: {
      readonly genesisBlockHash: H256;
    } & Struct;
    readonly isSetMinimumPruntimeVersion: boolean;
    readonly asSetMinimumPruntimeVersion: {
      readonly major: u32;
      readonly minor: u32;
      readonly patch: u32;
    } & Struct;
    readonly isSetPruntimeConsensusVersion: boolean;
    readonly asSetPruntimeConsensusVersion: {
      readonly version: u32;
    } & Struct;
    readonly type: 'ForceSetBenchmarkDuration' | 'ForceRegisterWorker' | 'ForceRegisterTopicPubkey' | 'RegisterGatekeeper' | 'UnregisterGatekeeper' | 'RotateMasterKey' | 'RegisterWorker' | 'RegisterWorkerV2' | 'UpdateWorkerEndpoint' | 'AddPruntime' | 'RemovePruntime' | 'AddRelaychainGenesisBlockHash' | 'RemoveRelaychainGenesisBlockHash' | 'SetMinimumPruntimeVersion' | 'SetPruntimeConsensusVersion';
  }

  /** @name PhalaTypesWorkerRegistrationInfo (316) */
  interface PhalaTypesWorkerRegistrationInfo extends Struct {
    readonly version: u32;
    readonly machineId: Bytes;
    readonly pubkey: SpCoreSr25519Public;
    readonly ecdhPubkey: SpCoreSr25519Public;
    readonly genesisBlockHash: H256;
    readonly features: Vec<u32>;
    readonly operator: Option<AccountId32>;
  }

  /** @name PhalaPalletsUtilsAttestationLegacyAttestation (317) */
  interface PhalaPalletsUtilsAttestationLegacyAttestation extends Enum {
    readonly isSgxIas: boolean;
    readonly asSgxIas: {
      readonly raReport: Bytes;
      readonly signature: Bytes;
      readonly rawSigningCert: Bytes;
    } & Struct;
    readonly type: 'SgxIas';
  }

  /** @name PhalaTypesWorkerRegistrationInfoV2 (318) */
  interface PhalaTypesWorkerRegistrationInfoV2 extends Struct {
    readonly version: u32;
    readonly machineId: Bytes;
    readonly pubkey: SpCoreSr25519Public;
    readonly ecdhPubkey: SpCoreSr25519Public;
    readonly genesisBlockHash: H256;
    readonly features: Vec<u32>;
    readonly operator: Option<AccountId32>;
    readonly paraId: u32;
    readonly maxConsensusVersion: u32;
  }

  /** @name PhalaTypesAttestationReport (320) */
  interface PhalaTypesAttestationReport extends Enum {
    readonly isSgxIas: boolean;
    readonly asSgxIas: {
      readonly raReport: Bytes;
      readonly signature: Bytes;
      readonly rawSigningCert: Bytes;
    } & Struct;
    readonly type: 'SgxIas';
  }

  /** @name PhalaTypesWorkerEndpointPayload (321) */
  interface PhalaTypesWorkerEndpointPayload extends Struct {
    readonly pubkey: SpCoreSr25519Public;
    readonly versionedEndpoints: PhalaTypesVersionedWorkerEndpoints;
    readonly signingTime: u64;
  }

  /** @name PhalaTypesVersionedWorkerEndpoints (322) */
  interface PhalaTypesVersionedWorkerEndpoints extends Enum {
    readonly isV1: boolean;
    readonly asV1: Vec<Text>;
    readonly type: 'V1';
  }

  /** @name PhalaPalletsComputeComputationPalletCall (324) */
  interface PhalaPalletsComputeComputationPalletCall extends Enum {
    readonly isSetCoolDownExpiration: boolean;
    readonly asSetCoolDownExpiration: {
      readonly period: u64;
    } & Struct;
    readonly isUnbind: boolean;
    readonly asUnbind: {
      readonly session: AccountId32;
    } & Struct;
    readonly isForceHeartbeat: boolean;
    readonly isForceStartComputing: boolean;
    readonly asForceStartComputing: {
      readonly session: AccountId32;
      readonly stake: u128;
    } & Struct;
    readonly isForceStopComputing: boolean;
    readonly asForceStopComputing: {
      readonly session: AccountId32;
    } & Struct;
    readonly isUpdateTokenomic: boolean;
    readonly asUpdateTokenomic: {
      readonly newParams: PhalaTypesMessagingTokenomicParameters;
    } & Struct;
    readonly isSetHeartbeatPaused: boolean;
    readonly asSetHeartbeatPaused: {
      readonly paused: bool;
    } & Struct;
    readonly isSetBudgetPerBlock: boolean;
    readonly asSetBudgetPerBlock: {
      readonly nonce: u64;
      readonly blockNumber: u32;
      readonly budget: u128;
    } & Struct;
    readonly isUpdateContractRoot: boolean;
    readonly asUpdateContractRoot: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'SetCoolDownExpiration' | 'Unbind' | 'ForceHeartbeat' | 'ForceStartComputing' | 'ForceStopComputing' | 'UpdateTokenomic' | 'SetHeartbeatPaused' | 'SetBudgetPerBlock' | 'UpdateContractRoot';
  }

  /** @name PhalaTypesMessagingTokenomicParameters (325) */
  interface PhalaTypesMessagingTokenomicParameters extends Struct {
    readonly phaRate: u128;
    readonly rho: u128;
    readonly budgetPerBlock: u128;
    readonly vMax: u128;
    readonly costK: u128;
    readonly costB: u128;
    readonly slashRate: u128;
    readonly treasuryRatio: u128;
    readonly heartbeatWindow: u32;
    readonly rigK: u128;
    readonly rigB: u128;
    readonly re: u128;
    readonly k: u128;
    readonly kappa: u128;
  }

  /** @name PhalaPalletsComputeStakePoolV2PalletCall (326) */
  interface PhalaPalletsComputeStakePoolV2PalletCall extends Enum {
    readonly isCreate: boolean;
    readonly isAddWorker: boolean;
    readonly asAddWorker: {
      readonly pid: u64;
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isRemoveWorker: boolean;
    readonly asRemoveWorker: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isSetCap: boolean;
    readonly asSetCap: {
      readonly pid: u64;
      readonly cap: u128;
    } & Struct;
    readonly isSetPayoutPref: boolean;
    readonly asSetPayoutPref: {
      readonly pid: u64;
      readonly payoutCommission: Option<Permill>;
    } & Struct;
    readonly isClaimLegacyRewards: boolean;
    readonly asClaimLegacyRewards: {
      readonly pid: u64;
      readonly target: AccountId32;
    } & Struct;
    readonly isBackfillAddMissingReward: boolean;
    readonly asBackfillAddMissingReward: {
      readonly input: Vec<ITuple<[AccountId32, u64, u128]>>;
    } & Struct;
    readonly isClaimOwnerRewards: boolean;
    readonly asClaimOwnerRewards: {
      readonly pid: u64;
      readonly target: AccountId32;
    } & Struct;
    readonly isCheckAndMaybeForceWithdraw: boolean;
    readonly asCheckAndMaybeForceWithdraw: {
      readonly pid: u64;
    } & Struct;
    readonly isContribute: boolean;
    readonly asContribute: {
      readonly pid: u64;
      readonly amount: u128;
      readonly asVault: Option<u64>;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly pid: u64;
      readonly shares: u128;
      readonly asVault: Option<u64>;
    } & Struct;
    readonly isResetIterPos: boolean;
    readonly isFixMissingWorkerLock: boolean;
    readonly asFixMissingWorkerLock: {
      readonly maxIterations: u32;
    } & Struct;
    readonly isStartComputing: boolean;
    readonly asStartComputing: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly stake: u128;
    } & Struct;
    readonly isStopComputing: boolean;
    readonly asStopComputing: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isReclaimPoolWorker: boolean;
    readonly asReclaimPoolWorker: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isRestartComputing: boolean;
    readonly asRestartComputing: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly stake: u128;
    } & Struct;
    readonly type: 'Create' | 'AddWorker' | 'RemoveWorker' | 'SetCap' | 'SetPayoutPref' | 'ClaimLegacyRewards' | 'BackfillAddMissingReward' | 'ClaimOwnerRewards' | 'CheckAndMaybeForceWithdraw' | 'Contribute' | 'Withdraw' | 'ResetIterPos' | 'FixMissingWorkerLock' | 'StartComputing' | 'StopComputing' | 'ReclaimPoolWorker' | 'RestartComputing';
  }

  /** @name PhalaPalletsComputeVaultPalletCall (331) */
  interface PhalaPalletsComputeVaultPalletCall extends Enum {
    readonly isCreate: boolean;
    readonly isSetPayoutPref: boolean;
    readonly asSetPayoutPref: {
      readonly pid: u64;
      readonly payoutCommission: Option<Permill>;
    } & Struct;
    readonly isClaimOwnerShares: boolean;
    readonly asClaimOwnerShares: {
      readonly vaultPid: u64;
      readonly target: AccountId32;
      readonly shares: u128;
    } & Struct;
    readonly isMaybeGainOwnerShares: boolean;
    readonly asMaybeGainOwnerShares: {
      readonly vaultPid: u64;
    } & Struct;
    readonly isCheckAndMaybeForceWithdraw: boolean;
    readonly asCheckAndMaybeForceWithdraw: {
      readonly vaultPid: u64;
    } & Struct;
    readonly isContribute: boolean;
    readonly asContribute: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly pid: u64;
      readonly shares: u128;
    } & Struct;
    readonly isRefreshVaultLockAndCheck: boolean;
    readonly asRefreshVaultLockAndCheck: {
      readonly pid: u64;
    } & Struct;
    readonly type: 'Create' | 'SetPayoutPref' | 'ClaimOwnerShares' | 'MaybeGainOwnerShares' | 'CheckAndMaybeForceWithdraw' | 'Contribute' | 'Withdraw' | 'RefreshVaultLockAndCheck';
  }

  /** @name PhalaPalletsComputeWrappedBalancesPalletCall (332) */
  interface PhalaPalletsComputeWrappedBalancesPalletCall extends Enum {
    readonly isWrap: boolean;
    readonly asWrap: {
      readonly amount: u128;
    } & Struct;
    readonly isUnwrapAll: boolean;
    readonly isUnwrap: boolean;
    readonly asUnwrap: {
      readonly amount: u128;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly ayeAmount: u128;
      readonly nayAmount: u128;
      readonly voteId: u32;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly voteId: u32;
      readonly maxIterations: u32;
    } & Struct;
    readonly isBackfillVoteLock: boolean;
    readonly type: 'Wrap' | 'UnwrapAll' | 'Unwrap' | 'Vote' | 'Unlock' | 'BackfillVoteLock';
  }

  /** @name PhalaPalletsComputeBasePoolPalletCall (333) */
  interface PhalaPalletsComputeBasePoolPalletCall extends Enum {
    readonly isAddStakerToWhitelist: boolean;
    readonly asAddStakerToWhitelist: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly isSetPoolDescription: boolean;
    readonly asSetPoolDescription: {
      readonly pid: u64;
      readonly description: Bytes;
    } & Struct;
    readonly isResetLockIterPos: boolean;
    readonly isRemoveUnusedLock: boolean;
    readonly asRemoveUnusedLock: {
      readonly maxIterations: u32;
    } & Struct;
    readonly isRemoveStakerFromWhitelist: boolean;
    readonly asRemoveStakerFromWhitelist: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly type: 'AddStakerToWhitelist' | 'SetPoolDescription' | 'ResetLockIterPos' | 'RemoveUnusedLock' | 'RemoveStakerFromWhitelist';
  }

  /** @name PhalaPalletsPhatPalletCall (335) */
  interface PhalaPalletsPhatPalletCall extends Enum {
    readonly isAddCluster: boolean;
    readonly asAddCluster: {
      readonly owner: AccountId32;
      readonly permission: PhalaTypesContractClusterPermission;
      readonly deployWorkers: Vec<SpCoreSr25519Public>;
      readonly deposit: u128;
      readonly gasPrice: u128;
      readonly depositPerItem: u128;
      readonly depositPerByte: u128;
      readonly treasuryAccount: AccountId32;
    } & Struct;
    readonly isClusterUploadResource: boolean;
    readonly asClusterUploadResource: {
      readonly clusterId: H256;
      readonly resourceType: PhalaTypesContractMessagingResourceType;
      readonly resourceData: Bytes;
    } & Struct;
    readonly isTransferToCluster: boolean;
    readonly asTransferToCluster: {
      readonly amount: u128;
      readonly clusterId: H256;
      readonly destAccount: AccountId32;
    } & Struct;
    readonly isPushContractMessage: boolean;
    readonly asPushContractMessage: {
      readonly contractId: H256;
      readonly payload: Bytes;
      readonly deposit: u128;
    } & Struct;
    readonly isInstantiateContract: boolean;
    readonly asInstantiateContract: {
      readonly codeIndex: PhalaTypesContractCodeIndex;
      readonly data: Bytes;
      readonly salt: Bytes;
      readonly clusterId: H256;
      readonly transfer: u128;
      readonly gasLimit: u64;
      readonly storageDepositLimit: Option<u128>;
      readonly deposit: u128;
    } & Struct;
    readonly isClusterDestroy: boolean;
    readonly asClusterDestroy: {
      readonly cluster: H256;
    } & Struct;
    readonly isSetPinkSystemCode: boolean;
    readonly asSetPinkSystemCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetPinkRuntimeVersion: boolean;
    readonly asSetPinkRuntimeVersion: {
      readonly version: ITuple<[u32, u32]>;
    } & Struct;
    readonly isAddWorkerToCluster: boolean;
    readonly asAddWorkerToCluster: {
      readonly workerPubkey: SpCoreSr25519Public;
      readonly clusterId: H256;
    } & Struct;
    readonly isRemoveWorkerFromCluster: boolean;
    readonly asRemoveWorkerFromCluster: {
      readonly workerPubkey: SpCoreSr25519Public;
      readonly clusterId: H256;
    } & Struct;
    readonly type: 'AddCluster' | 'ClusterUploadResource' | 'TransferToCluster' | 'PushContractMessage' | 'InstantiateContract' | 'ClusterDestroy' | 'SetPinkSystemCode' | 'SetPinkRuntimeVersion' | 'AddWorkerToCluster' | 'RemoveWorkerFromCluster';
  }

  /** @name PhalaTypesContractClusterPermission (336) */
  interface PhalaTypesContractClusterPermission extends Enum {
    readonly isPublic: boolean;
    readonly isOnlyOwner: boolean;
    readonly asOnlyOwner: AccountId32;
    readonly type: 'Public' | 'OnlyOwner';
  }

  /** @name PhalaTypesContractMessagingResourceType (338) */
  interface PhalaTypesContractMessagingResourceType extends Enum {
    readonly isInkCode: boolean;
    readonly isSidevmCode: boolean;
    readonly isIndeterministicInkCode: boolean;
    readonly type: 'InkCode' | 'SidevmCode' | 'IndeterministicInkCode';
  }

  /** @name PhalaTypesContractCodeIndex (339) */
  interface PhalaTypesContractCodeIndex extends Enum {
    readonly isWasmCode: boolean;
    readonly asWasmCode: H256;
    readonly type: 'WasmCode';
  }

  /** @name PhalaPalletsPhatTokenomicPalletCall (341) */
  interface PhalaPalletsPhatTokenomicPalletCall extends Enum {
    readonly isAdjustStake: boolean;
    readonly asAdjustStake: {
      readonly contract: H256;
      readonly amount: u128;
    } & Struct;
    readonly type: 'AdjustStake';
  }

  /** @name PalletUniquesCall (342) */
  interface PalletUniquesCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly collection: u32;
      readonly admin: MultiAddress;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly collection: u32;
      readonly owner: MultiAddress;
      readonly freeHolding: bool;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u32;
      readonly witness: PalletUniquesDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u32;
      readonly item: u32;
      readonly checkOwner: Option<MultiAddress>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly dest: MultiAddress;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u32;
      readonly items: Vec<u32>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isFreezeCollection: boolean;
    readonly asFreezeCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isThawCollection: boolean;
    readonly asThawCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u32;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u32;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly maybeCheckDelegate: Option<MultiAddress>;
    } & Struct;
    readonly isForceItemStatus: boolean;
    readonly asForceItemStatus: {
      readonly collection: u32;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly freeHolding: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u32;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<MultiAddress>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u32;
      readonly item: u32;
      readonly bidPrice: u128;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'Redeposit' | 'Freeze' | 'Thaw' | 'FreezeCollection' | 'ThawCollection' | 'TransferOwnership' | 'SetTeam' | 'ApproveTransfer' | 'CancelApproval' | 'ForceItemStatus' | 'SetAttribute' | 'ClearAttribute' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'SetPrice' | 'BuyItem';
  }

  /** @name PalletUniquesDestroyWitness (343) */
  interface PalletUniquesDestroyWitness extends Struct {
    readonly items: Compact<u32>;
    readonly itemMetadatas: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PalletRmrkCoreCall (345) */
  interface PalletRmrkCoreCall extends Enum {
    readonly isMintNft: boolean;
    readonly asMintNft: {
      readonly owner: Option<AccountId32>;
      readonly nftId: u32;
      readonly collectionId: u32;
      readonly royaltyRecipient: Option<AccountId32>;
      readonly royalty: Option<Permill>;
      readonly metadata: Bytes;
      readonly transferable: bool;
      readonly resources: Option<Vec<RmrkTraitsResourceResourceInfoMin>>;
    } & Struct;
    readonly isMintNftDirectlyToNft: boolean;
    readonly asMintNftDirectlyToNft: {
      readonly owner: ITuple<[u32, u32]>;
      readonly nftId: u32;
      readonly collectionId: u32;
      readonly royaltyRecipient: Option<AccountId32>;
      readonly royalty: Option<Permill>;
      readonly metadata: Bytes;
      readonly transferable: bool;
      readonly resources: Option<Vec<RmrkTraitsResourceResourceInfoMin>>;
    } & Struct;
    readonly isCreateCollection: boolean;
    readonly asCreateCollection: {
      readonly collectionId: u32;
      readonly metadata: Bytes;
      readonly max: Option<u32>;
      readonly symbol: Bytes;
    } & Struct;
    readonly isBurnNft: boolean;
    readonly asBurnNft: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isDestroyCollection: boolean;
    readonly asDestroyCollection: {
      readonly collectionId: u32;
    } & Struct;
    readonly isSend: boolean;
    readonly asSend: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly newOwner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
    } & Struct;
    readonly isAcceptNft: boolean;
    readonly asAcceptNft: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly newOwner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
    } & Struct;
    readonly isRejectNft: boolean;
    readonly asRejectNft: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isChangeCollectionIssuer: boolean;
    readonly asChangeCollectionIssuer: {
      readonly collectionId: u32;
      readonly newIssuer: MultiAddress;
    } & Struct;
    readonly isSetProperty: boolean;
    readonly asSetProperty: {
      readonly collectionId: u32;
      readonly maybeNftId: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isLockCollection: boolean;
    readonly asLockCollection: {
      readonly collectionId: u32;
    } & Struct;
    readonly isAddBasicResource: boolean;
    readonly asAddBasicResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resource: RmrkTraitsResourceBasicResource;
      readonly resourceId: u32;
    } & Struct;
    readonly isAddComposableResource: boolean;
    readonly asAddComposableResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resource: RmrkTraitsResourceComposableResource;
      readonly resourceId: u32;
    } & Struct;
    readonly isAddSlotResource: boolean;
    readonly asAddSlotResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resource: RmrkTraitsResourceSlotResource;
      readonly resourceId: u32;
    } & Struct;
    readonly isReplaceResource: boolean;
    readonly asReplaceResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resource: RmrkTraitsResourceResourceTypes;
      readonly resourceId: u32;
    } & Struct;
    readonly isAcceptResource: boolean;
    readonly asAcceptResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resourceId: u32;
    } & Struct;
    readonly isRemoveResource: boolean;
    readonly asRemoveResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resourceId: u32;
    } & Struct;
    readonly isAcceptResourceRemoval: boolean;
    readonly asAcceptResourceRemoval: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resourceId: u32;
    } & Struct;
    readonly isSetPriority: boolean;
    readonly asSetPriority: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly priorities: Vec<u32>;
    } & Struct;
    readonly type: 'MintNft' | 'MintNftDirectlyToNft' | 'CreateCollection' | 'BurnNft' | 'DestroyCollection' | 'Send' | 'AcceptNft' | 'RejectNft' | 'ChangeCollectionIssuer' | 'SetProperty' | 'LockCollection' | 'AddBasicResource' | 'AddComposableResource' | 'AddSlotResource' | 'ReplaceResource' | 'AcceptResource' | 'RemoveResource' | 'AcceptResourceRemoval' | 'SetPriority';
  }

  /** @name RmrkTraitsResourceResourceInfoMin (348) */
  interface RmrkTraitsResourceResourceInfoMin extends Struct {
    readonly id: u32;
    readonly resource: RmrkTraitsResourceResourceTypes;
  }

  /** @name RmrkTraitsResourceResourceTypes (350) */
  interface RmrkTraitsResourceResourceTypes extends Enum {
    readonly isBasic: boolean;
    readonly asBasic: RmrkTraitsResourceBasicResource;
    readonly isComposable: boolean;
    readonly asComposable: RmrkTraitsResourceComposableResource;
    readonly isSlot: boolean;
    readonly asSlot: RmrkTraitsResourceSlotResource;
    readonly type: 'Basic' | 'Composable' | 'Slot';
  }

  /** @name RmrkTraitsResourceBasicResource (351) */
  interface RmrkTraitsResourceBasicResource extends Struct {
    readonly metadata: Bytes;
  }

  /** @name RmrkTraitsResourceComposableResource (352) */
  interface RmrkTraitsResourceComposableResource extends Struct {
    readonly parts: Vec<u32>;
    readonly base: u32;
    readonly metadata: Option<Bytes>;
    readonly slot: Option<ITuple<[u32, u32]>>;
  }

  /** @name RmrkTraitsResourceSlotResource (354) */
  interface RmrkTraitsResourceSlotResource extends Struct {
    readonly base: u32;
    readonly metadata: Option<Bytes>;
    readonly slot: u32;
  }

  /** @name PalletRmrkEquipCall (358) */
  interface PalletRmrkEquipCall extends Enum {
    readonly isChangeBaseIssuer: boolean;
    readonly asChangeBaseIssuer: {
      readonly baseId: u32;
      readonly newIssuer: MultiAddress;
    } & Struct;
    readonly isEquip: boolean;
    readonly asEquip: {
      readonly item: ITuple<[u32, u32]>;
      readonly equipper: ITuple<[u32, u32]>;
      readonly resourceId: u32;
      readonly base: u32;
      readonly slot: u32;
    } & Struct;
    readonly isUnequip: boolean;
    readonly asUnequip: {
      readonly item: ITuple<[u32, u32]>;
      readonly unequipper: ITuple<[u32, u32]>;
      readonly base: u32;
      readonly slot: u32;
    } & Struct;
    readonly isEquippable: boolean;
    readonly asEquippable: {
      readonly baseId: u32;
      readonly slotId: u32;
      readonly equippables: RmrkTraitsPartEquippableList;
    } & Struct;
    readonly isEquippableAdd: boolean;
    readonly asEquippableAdd: {
      readonly baseId: u32;
      readonly slotId: u32;
      readonly equippable: u32;
    } & Struct;
    readonly isEquippableRemove: boolean;
    readonly asEquippableRemove: {
      readonly baseId: u32;
      readonly slotId: u32;
      readonly equippable: u32;
    } & Struct;
    readonly isThemeAdd: boolean;
    readonly asThemeAdd: {
      readonly baseId: u32;
      readonly theme: RmrkTraitsTheme;
    } & Struct;
    readonly isCreateBase: boolean;
    readonly asCreateBase: {
      readonly baseType: Bytes;
      readonly symbol: Bytes;
      readonly parts: Vec<RmrkTraitsPartPartType>;
    } & Struct;
    readonly type: 'ChangeBaseIssuer' | 'Equip' | 'Unequip' | 'Equippable' | 'EquippableAdd' | 'EquippableRemove' | 'ThemeAdd' | 'CreateBase';
  }

  /** @name RmrkTraitsPartEquippableList (359) */
  interface RmrkTraitsPartEquippableList extends Enum {
    readonly isAll: boolean;
    readonly isEmpty: boolean;
    readonly isCustom: boolean;
    readonly asCustom: Vec<u32>;
    readonly type: 'All' | 'Empty' | 'Custom';
  }

  /** @name RmrkTraitsTheme (361) */
  interface RmrkTraitsTheme extends Struct {
    readonly name: Bytes;
    readonly properties: Vec<RmrkTraitsThemeThemeProperty>;
    readonly inherit: bool;
  }

  /** @name RmrkTraitsThemeThemeProperty (363) */
  interface RmrkTraitsThemeThemeProperty extends Struct {
    readonly key: Bytes;
    readonly value: Bytes;
  }

  /** @name RmrkTraitsPartPartType (366) */
  interface RmrkTraitsPartPartType extends Enum {
    readonly isFixedPart: boolean;
    readonly asFixedPart: RmrkTraitsPartFixedPart;
    readonly isSlotPart: boolean;
    readonly asSlotPart: RmrkTraitsPartSlotPart;
    readonly type: 'FixedPart' | 'SlotPart';
  }

  /** @name RmrkTraitsPartFixedPart (367) */
  interface RmrkTraitsPartFixedPart extends Struct {
    readonly id: u32;
    readonly z: u32;
    readonly src: Bytes;
  }

  /** @name RmrkTraitsPartSlotPart (368) */
  interface RmrkTraitsPartSlotPart extends Struct {
    readonly id: u32;
    readonly equippable: RmrkTraitsPartEquippableList;
    readonly src: Option<Bytes>;
    readonly z: u32;
  }

  /** @name PalletRmrkMarketCall (370) */
  interface PalletRmrkMarketCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: Option<u128>;
    } & Struct;
    readonly isList: boolean;
    readonly asList: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: u128;
      readonly expires: Option<u32>;
    } & Struct;
    readonly isUnlist: boolean;
    readonly asUnlist: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isMakeOffer: boolean;
    readonly asMakeOffer: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: u128;
      readonly expires: Option<u32>;
    } & Struct;
    readonly isWithdrawOffer: boolean;
    readonly asWithdrawOffer: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isAcceptOffer: boolean;
    readonly asAcceptOffer: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly offerer: AccountId32;
    } & Struct;
    readonly type: 'Buy' | 'List' | 'Unlist' | 'MakeOffer' | 'WithdrawOffer' | 'AcceptOffer';
  }

  /** @name SygmaAccessSegregatorCall (371) */
  interface SygmaAccessSegregatorCall extends Enum {
    readonly isGrantAccess: boolean;
    readonly asGrantAccess: {
      readonly palletIndex: u8;
      readonly extrinsicName: Bytes;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'GrantAccess';
  }

  /** @name SygmaBasicFeehandlerCall (372) */
  interface SygmaBasicFeehandlerCall extends Enum {
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly domain: u8;
      readonly asset: XcmV3MultiassetAssetId;
      readonly amount: u128;
    } & Struct;
    readonly type: 'SetFee';
  }

  /** @name SygmaBridgeCall (373) */
  interface SygmaBridgeCall extends Enum {
    readonly isPauseBridge: boolean;
    readonly asPauseBridge: {
      readonly destDomainId: u8;
    } & Struct;
    readonly isUnpauseBridge: boolean;
    readonly asUnpauseBridge: {
      readonly destDomainId: u8;
    } & Struct;
    readonly isSetMpcAddress: boolean;
    readonly asSetMpcAddress: {
      readonly addr: SygmaTraitsMpcAddress;
    } & Struct;
    readonly isRegisterDomain: boolean;
    readonly asRegisterDomain: {
      readonly destDomainId: u8;
      readonly destChainId: U256;
    } & Struct;
    readonly isUnregisterDomain: boolean;
    readonly asUnregisterDomain: {
      readonly destDomainId: u8;
      readonly destChainId: U256;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly asset: XcmV3MultiAsset;
      readonly dest: XcmV3MultiLocation;
    } & Struct;
    readonly isRetry: boolean;
    readonly asRetry: {
      readonly depositOnBlockHeight: u128;
      readonly destDomainId: u8;
    } & Struct;
    readonly isExecuteProposal: boolean;
    readonly asExecuteProposal: {
      readonly proposals: Vec<SygmaBridgeProposal>;
      readonly signature: Bytes;
    } & Struct;
    readonly type: 'PauseBridge' | 'UnpauseBridge' | 'SetMpcAddress' | 'RegisterDomain' | 'UnregisterDomain' | 'Deposit' | 'Retry' | 'ExecuteProposal';
  }

  /** @name SygmaTraitsMpcAddress (374) */
  interface SygmaTraitsMpcAddress extends U8aFixed {}

  /** @name SygmaBridgeProposal (376) */
  interface SygmaBridgeProposal extends Struct {
    readonly originDomainId: u8;
    readonly depositNonce: u64;
    readonly resourceId: U8aFixed;
    readonly data: Bytes;
  }

  /** @name SygmaFeeHandlerRouterCall (377) */
  interface SygmaFeeHandlerRouterCall extends Enum {
    readonly isSetFeeHandler: boolean;
    readonly asSetFeeHandler: {
      readonly domain: u8;
      readonly asset: XcmV3MultiassetAssetId;
      readonly handlerType: SygmaFeeHandlerRouterFeeHandlerType;
    } & Struct;
    readonly type: 'SetFeeHandler';
  }

  /** @name PalletIndexCall (378) */
  interface PalletIndexCall extends Enum {
    readonly isForceAddWorker: boolean;
    readonly asForceAddWorker: {
      readonly worker: AccountId32;
    } & Struct;
    readonly isForceRemoveWorker: boolean;
    readonly asForceRemoveWorker: {
      readonly worker: AccountId32;
    } & Struct;
    readonly isDepositTask: boolean;
    readonly asDepositTask: {
      readonly asset: XcmV3MultiassetAssetId;
      readonly amount: u128;
      readonly recipient: Bytes;
      readonly worker: AccountId32;
      readonly taskId: U8aFixed;
      readonly task: Bytes;
    } & Struct;
    readonly isClaimTask: boolean;
    readonly asClaimTask: {
      readonly taskId: U8aFixed;
    } & Struct;
    readonly isClaimAllTask: boolean;
    readonly type: 'ForceAddWorker' | 'ForceRemoveWorker' | 'DepositTask' | 'ClaimTask' | 'ClaimAllTask';
  }

  /** @name PhalaParachainRuntimeOriginCaller (379) */
  interface PhalaParachainRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly type: 'System' | 'Void' | 'CumulusXcm' | 'PolkadotXcm' | 'Council' | 'TechnicalCommittee';
  }

  /** @name FrameSupportDispatchRawOrigin (380) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name CumulusPalletXcmOrigin (381) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name PalletXcmOrigin (382) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name PalletCollectiveRawOrigin (383) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name SpCoreVoid (385) */
  type SpCoreVoid = Null;

  /** @name PalletUtilityError (386) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletMultisigMultisig (388) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (390) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletProxyProxyDefinition (393) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: PhalaParachainRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (397) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (399) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletVestingReleases (402) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (403) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletSchedulerScheduled (406) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: PhalaParachainRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (408) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletPreimageRequestStatus (409) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (413) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PolkadotPrimitivesV4UpgradeRestriction (415) */
  interface PolkadotPrimitivesV4UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (416) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV4AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV4AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV4AbridgedHrmpChannel (419) */
  interface PolkadotPrimitivesV4AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV4AbridgedHostConfiguration (420) */
  interface PolkadotPrimitivesV4AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (426) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (427) */
  interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name CumulusPalletParachainSystemError (428) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (430) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (431) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (434) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (437) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (438) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (440) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueError (442) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name CumulusPalletXcmError (443) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (444) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (445) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (448) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletXcmQueryStatus (449) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (452) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (458) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name XcmVersionedAssetId (461) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (462) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedMultiLocation;
    readonly locker: XcmVersionedMultiLocation;
    readonly users: u32;
  }

  /** @name PalletXcmError (466) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name PalletBalancesBalanceLock (468) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (469) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (472) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesIdAmount (475) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (477) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name PalletTransactionPaymentReleases (479) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletAssetsAssetDetails (480) */
  interface PalletAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly status: PalletAssetsAssetStatus;
  }

  /** @name PalletAssetsAssetStatus (481) */
  interface PalletAssetsAssetStatus extends Enum {
    readonly isLive: boolean;
    readonly isFrozen: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Live' | 'Frozen' | 'Destroying';
  }

  /** @name PalletAssetsAssetAccount (483) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly isFrozen: bool;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsExistenceReason (484) */
  interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded';
  }

  /** @name PalletAssetsApproval (486) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (487) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (489) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isUnavailableConsumer: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isLiveAsset: boolean;
    readonly isAssetNotLive: boolean;
    readonly isIncorrectStatus: boolean;
    readonly isNotFrozen: boolean;
    readonly isCallbackFailed: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'UnavailableConsumer' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn' | 'LiveAsset' | 'AssetNotLive' | 'IncorrectStatus' | 'NotFrozen' | 'CallbackFailed';
  }

  /** @name PalletCollatorSelectionCandidateInfo (492) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (494) */
  interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewCandidates: boolean;
    readonly isUnknown: boolean;
    readonly isPermission: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewCandidates' | 'Unknown' | 'Permission' | 'AlreadyCandidate' | 'NotCandidate' | 'TooManyInvulnerables' | 'AlreadyInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered';
  }

  /** @name SpCoreCryptoKeyTypeId (498) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (499) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletIdentityRegistration (503) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (511) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (513) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletDemocracyReferendumInfo (519) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (520) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (521) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (522) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (526) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (527) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (531) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletCollectiveVotes (533) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (534) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletTreasuryProposal (535) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (537) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (538) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletBountiesBounty (539) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (540) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (542) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletLotteryLotteryConfig (543) */
  interface PalletLotteryLotteryConfig extends Struct {
    readonly price: u128;
    readonly start: u32;
    readonly length: u32;
    readonly delay: u32;
    readonly repeat: bool;
  }

  /** @name PalletLotteryError (547) */
  interface PalletLotteryError extends Enum {
    readonly isNotConfigured: boolean;
    readonly isInProgress: boolean;
    readonly isAlreadyEnded: boolean;
    readonly isInvalidCall: boolean;
    readonly isAlreadyParticipating: boolean;
    readonly isTooManyCalls: boolean;
    readonly isEncodingFailed: boolean;
    readonly type: 'NotConfigured' | 'InProgress' | 'AlreadyEnded' | 'InvalidCall' | 'AlreadyParticipating' | 'TooManyCalls' | 'EncodingFailed';
  }

  /** @name PalletMembershipError (551) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletElectionsPhragmenSeatHolder (553) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (554) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (555) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletTipsOpenTip (556) */
  interface PalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: AccountId32;
    readonly finder: AccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[AccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PalletTipsError (558) */
  interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletChildBountiesChildBounty (559) */
  interface PalletChildBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletChildBountiesChildBountyStatus;
  }

  /** @name PalletChildBountiesChildBountyStatus (560) */
  interface PalletChildBountiesChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletChildBountiesError (561) */
  interface PalletChildBountiesError extends Enum {
    readonly isParentBountyNotActive: boolean;
    readonly isInsufficientBountyBalance: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly type: 'ParentBountyNotActive' | 'InsufficientBountyBalance' | 'TooManyChildBounties';
  }

  /** @name SubbridgePalletsChainbridgePalletProposalVotes (564) */
  interface SubbridgePalletsChainbridgePalletProposalVotes extends Struct {
    readonly votesFor: Vec<AccountId32>;
    readonly votesAgainst: Vec<AccountId32>;
    readonly status: SubbridgePalletsChainbridgePalletProposalStatus;
    readonly expiry: u32;
  }

  /** @name SubbridgePalletsChainbridgePalletProposalStatus (565) */
  interface SubbridgePalletsChainbridgePalletProposalStatus extends Enum {
    readonly isInitiated: boolean;
    readonly isApproved: boolean;
    readonly isRejected: boolean;
    readonly type: 'Initiated' | 'Approved' | 'Rejected';
  }

  /** @name SubbridgePalletsChainbridgePalletBridgeEvent (567) */
  interface SubbridgePalletsChainbridgePalletBridgeEvent extends Enum {
    readonly isFungibleTransfer: boolean;
    readonly asFungibleTransfer: ITuple<[u8, u64, U8aFixed, U256, Bytes]>;
    readonly isNonFungibleTransfer: boolean;
    readonly asNonFungibleTransfer: ITuple<[u8, u64, U8aFixed, Bytes, Bytes, Bytes]>;
    readonly isGenericTransfer: boolean;
    readonly asGenericTransfer: ITuple<[u8, u64, U8aFixed, Bytes]>;
    readonly type: 'FungibleTransfer' | 'NonFungibleTransfer' | 'GenericTransfer';
  }

  /** @name SubbridgePalletsChainbridgePalletError (569) */
  interface SubbridgePalletsChainbridgePalletError extends Enum {
    readonly isThresholdNotSet: boolean;
    readonly isInvalidChainId: boolean;
    readonly isInvalidThreshold: boolean;
    readonly isChainNotWhitelisted: boolean;
    readonly isChainAlreadyWhitelisted: boolean;
    readonly isResourceDoesNotExist: boolean;
    readonly isRelayerAlreadyExists: boolean;
    readonly isRelayerInvalid: boolean;
    readonly isMustBeRelayer: boolean;
    readonly isRelayerAlreadyVoted: boolean;
    readonly isProposalAlreadyExists: boolean;
    readonly isProposalDoesNotExist: boolean;
    readonly isProposalNotComplete: boolean;
    readonly isProposalAlreadyComplete: boolean;
    readonly isProposalExpired: boolean;
    readonly isInvalidFeeOption: boolean;
    readonly isExtractAssetFailed: boolean;
    readonly isExtractDestFailed: boolean;
    readonly isCannotPayAsFee: boolean;
    readonly isTransactFailed: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isFeeTooExpensive: boolean;
    readonly isCannotDetermineReservedLocation: boolean;
    readonly isDestUnrecognized: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isAssetConversionFailed: boolean;
    readonly isUnimplemented: boolean;
    readonly isCannotDepositAsset: boolean;
    readonly isBridgeEventOverflow: boolean;
    readonly type: 'ThresholdNotSet' | 'InvalidChainId' | 'InvalidThreshold' | 'ChainNotWhitelisted' | 'ChainAlreadyWhitelisted' | 'ResourceDoesNotExist' | 'RelayerAlreadyExists' | 'RelayerInvalid' | 'MustBeRelayer' | 'RelayerAlreadyVoted' | 'ProposalAlreadyExists' | 'ProposalDoesNotExist' | 'ProposalNotComplete' | 'ProposalAlreadyComplete' | 'ProposalExpired' | 'InvalidFeeOption' | 'ExtractAssetFailed' | 'ExtractDestFailed' | 'CannotPayAsFee' | 'TransactFailed' | 'InsufficientBalance' | 'FeeTooExpensive' | 'CannotDetermineReservedLocation' | 'DestUnrecognized' | 'AssetNotRegistered' | 'AssetConversionFailed' | 'Unimplemented' | 'CannotDepositAsset' | 'BridgeEventOverflow';
  }

  /** @name SubbridgePalletsXcmbridgePalletError (570) */
  interface SubbridgePalletsXcmbridgePalletError extends Enum {
    readonly isUnknownError: boolean;
    readonly isCannotReanchor: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isFeePaymentEmpty: boolean;
    readonly isExecutionFailed: boolean;
    readonly isUnknownTransfer: boolean;
    readonly isAssetNotFound: boolean;
    readonly isLocationInvertFailed: boolean;
    readonly isIllegalDestination: boolean;
    readonly isCannotDepositAsset: boolean;
    readonly isUnknownTransferType: boolean;
    readonly isUnimplemented: boolean;
    readonly type: 'UnknownError' | 'CannotReanchor' | 'UnweighableMessage' | 'FeePaymentEmpty' | 'ExecutionFailed' | 'UnknownTransfer' | 'AssetNotFound' | 'LocationInvertFailed' | 'IllegalDestination' | 'CannotDepositAsset' | 'UnknownTransferType' | 'Unimplemented';
  }

  /** @name SubbridgePalletsXtransferPalletError (571) */
  interface SubbridgePalletsXtransferPalletError extends Enum {
    readonly isTransactFailed: boolean;
    readonly isUnknownAsset: boolean;
    readonly isUnsupportedDest: boolean;
    readonly isUnhandledTransfer: boolean;
    readonly type: 'TransactFailed' | 'UnknownAsset' | 'UnsupportedDest' | 'UnhandledTransfer';
  }

  /** @name AssetsRegistryAssetRegistryInfo (572) */
  interface AssetsRegistryAssetRegistryInfo extends Struct {
    readonly location: XcmV3MultiLocation;
    readonly reserveLocation: Option<XcmV3MultiLocation>;
    readonly enabledBridges: Vec<AssetsRegistryXBridge>;
    readonly properties: AssetsRegistryAssetProperties;
    readonly executionPrice: Option<u128>;
  }

  /** @name AssetsRegistryXBridge (574) */
  interface AssetsRegistryXBridge extends Struct {
    readonly config: AssetsRegistryXBridgeConfig;
    readonly metadata: Bytes;
  }

  /** @name AssetsRegistryXBridgeConfig (575) */
  interface AssetsRegistryXBridgeConfig extends Enum {
    readonly isXcmp: boolean;
    readonly isChainBridge: boolean;
    readonly asChainBridge: {
      readonly chainId: u8;
      readonly resourceId: U8aFixed;
      readonly reserveAccount: U8aFixed;
      readonly isMintable: bool;
    } & Struct;
    readonly isSygmaBridge: boolean;
    readonly asSygmaBridge: {
      readonly destDomain: u8;
      readonly resourceId: U8aFixed;
      readonly isMintable: bool;
    } & Struct;
    readonly type: 'Xcmp' | 'ChainBridge' | 'SygmaBridge';
  }

  /** @name AssetsRegistryError (576) */
  interface AssetsRegistryError extends Enum {
    readonly isAssetAlreadyExist: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isBridgeAlreadyEnabled: boolean;
    readonly isBridgeAlreadyDisabled: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isDuplictedLocation: boolean;
    readonly isLocationTooLong: boolean;
    readonly type: 'AssetAlreadyExist' | 'AssetNotRegistered' | 'BridgeAlreadyEnabled' | 'BridgeAlreadyDisabled' | 'FailedToTransactAsset' | 'DuplictedLocation' | 'LocationTooLong';
  }

  /** @name PhalaPalletsMqPalletError (578) */
  interface PhalaPalletsMqPalletError extends Enum {
    readonly isBadSender: boolean;
    readonly isBadSequence: boolean;
    readonly isBadDestination: boolean;
    readonly type: 'BadSender' | 'BadSequence' | 'BadDestination';
  }

  /** @name PhalaPalletsRegistryPalletWorkerInfoV2 (580) */
  interface PhalaPalletsRegistryPalletWorkerInfoV2 extends Struct {
    readonly pubkey: SpCoreSr25519Public;
    readonly ecdhPubkey: SpCoreSr25519Public;
    readonly runtimeVersion: u32;
    readonly lastUpdated: u64;
    readonly operator: Option<AccountId32>;
    readonly attestationProvider: Option<PhalaTypesAttestationProvider>;
    readonly confidenceLevel: u8;
    readonly initialScore: Option<u32>;
    readonly features: Vec<u32>;
  }

  /** @name PhalaPalletsRegistryPalletKnownConsensusVersion (582) */
  interface PhalaPalletsRegistryPalletKnownConsensusVersion extends Struct {
    readonly version: u32;
    readonly count: u32;
  }

  /** @name PhalaPalletsRegistryPalletError (583) */
  interface PhalaPalletsRegistryPalletError extends Enum {
    readonly isCannotHandleUnknownMessage: boolean;
    readonly isInvalidSender: boolean;
    readonly isInvalidPubKey: boolean;
    readonly isMalformedSignature: boolean;
    readonly isInvalidSignatureLength: boolean;
    readonly isInvalidSignature: boolean;
    readonly isUnknownContract: boolean;
    readonly isInvalidIASSigningCert: boolean;
    readonly isInvalidReport: boolean;
    readonly isInvalidQuoteStatus: boolean;
    readonly isBadIASReport: boolean;
    readonly isOutdatedIASReport: boolean;
    readonly isUnknownQuoteBodyFormat: boolean;
    readonly isInvalidRuntimeInfoHash: boolean;
    readonly isInvalidRuntimeInfo: boolean;
    readonly isInvalidInput: boolean;
    readonly isInvalidBenchReport: boolean;
    readonly isWorkerNotFound: boolean;
    readonly isNoneAttestationDisabled: boolean;
    readonly isInvalidGatekeeper: boolean;
    readonly isInvalidMasterPubkey: boolean;
    readonly isMasterKeyMismatch: boolean;
    readonly isMasterKeyUninitialized: boolean;
    readonly isGenesisBlockHashRejected: boolean;
    readonly isGenesisBlockHashAlreadyExists: boolean;
    readonly isGenesisBlockHashNotFound: boolean;
    readonly isPRuntimeRejected: boolean;
    readonly isPRuntimeAlreadyExists: boolean;
    readonly isPRuntimeNotFound: boolean;
    readonly isUnknownCluster: boolean;
    readonly isNotImplemented: boolean;
    readonly isCannotRemoveLastGatekeeper: boolean;
    readonly isMasterKeyInRotation: boolean;
    readonly isInvalidRotatedMasterPubkey: boolean;
    readonly isInvalidEndpointSigningTime: boolean;
    readonly isNotMigrationRoot: boolean;
    readonly isParachainIdMismatch: boolean;
    readonly isInvalidConsensusVersion: boolean;
    readonly type: 'CannotHandleUnknownMessage' | 'InvalidSender' | 'InvalidPubKey' | 'MalformedSignature' | 'InvalidSignatureLength' | 'InvalidSignature' | 'UnknownContract' | 'InvalidIASSigningCert' | 'InvalidReport' | 'InvalidQuoteStatus' | 'BadIASReport' | 'OutdatedIASReport' | 'UnknownQuoteBodyFormat' | 'InvalidRuntimeInfoHash' | 'InvalidRuntimeInfo' | 'InvalidInput' | 'InvalidBenchReport' | 'WorkerNotFound' | 'NoneAttestationDisabled' | 'InvalidGatekeeper' | 'InvalidMasterPubkey' | 'MasterKeyMismatch' | 'MasterKeyUninitialized' | 'GenesisBlockHashRejected' | 'GenesisBlockHashAlreadyExists' | 'GenesisBlockHashNotFound' | 'PRuntimeRejected' | 'PRuntimeAlreadyExists' | 'PRuntimeNotFound' | 'UnknownCluster' | 'NotImplemented' | 'CannotRemoveLastGatekeeper' | 'MasterKeyInRotation' | 'InvalidRotatedMasterPubkey' | 'InvalidEndpointSigningTime' | 'NotMigrationRoot' | 'ParachainIdMismatch' | 'InvalidConsensusVersion';
  }

  /** @name PhalaPalletsComputeComputationPalletSessionInfo (584) */
  interface PhalaPalletsComputeComputationPalletSessionInfo extends Struct {
    readonly state: PhalaPalletsComputeComputationPalletWorkerState;
    readonly ve: u128;
    readonly v: u128;
    readonly vUpdatedAt: u64;
    readonly benchmark: PhalaPalletsComputeComputationPalletBenchmark;
    readonly coolDownStart: u64;
    readonly stats: PhalaPalletsComputeComputationPalletSessionStats;
  }

  /** @name PhalaPalletsComputeComputationPalletWorkerState (585) */
  interface PhalaPalletsComputeComputationPalletWorkerState extends Enum {
    readonly isReady: boolean;
    readonly isWorkerIdle: boolean;
    readonly isUnused: boolean;
    readonly isWorkerUnresponsive: boolean;
    readonly isWorkerCoolingDown: boolean;
    readonly type: 'Ready' | 'WorkerIdle' | 'Unused' | 'WorkerUnresponsive' | 'WorkerCoolingDown';
  }

  /** @name PhalaPalletsComputeComputationPalletBenchmark (586) */
  interface PhalaPalletsComputeComputationPalletBenchmark extends Struct {
    readonly pInit: u32;
    readonly pInstant: u32;
    readonly iterations: u64;
    readonly workingStartTime: u64;
    readonly challengeTimeLast: u64;
  }

  /** @name PhalaPalletsComputeComputationPalletSessionStats (587) */
  interface PhalaPalletsComputeComputationPalletSessionStats extends Struct {
    readonly totalReward: u128;
  }

  /** @name PhalaPalletsComputeComputationPalletError (588) */
  interface PhalaPalletsComputeComputationPalletError extends Enum {
    readonly isBadSender: boolean;
    readonly isInvalidMessage: boolean;
    readonly isWorkerNotRegistered: boolean;
    readonly isGatekeeperNotRegistered: boolean;
    readonly isDuplicateBoundSession: boolean;
    readonly isBenchmarkMissing: boolean;
    readonly isSessionNotFound: boolean;
    readonly isSessionNotBound: boolean;
    readonly isWorkerNotReady: boolean;
    readonly isWorkerNotComputing: boolean;
    readonly isWorkerNotBound: boolean;
    readonly isCoolDownNotReady: boolean;
    readonly isInsufficientStake: boolean;
    readonly isTooMuchStake: boolean;
    readonly isInternalErrorBadTokenomicParameters: boolean;
    readonly isDuplicateBoundWorker: boolean;
    readonly isBenchmarkTooLow: boolean;
    readonly isInternalErrorCannotStartWithExistingStake: boolean;
    readonly isNotMigrationRoot: boolean;
    readonly isNonceIndexInvalid: boolean;
    readonly isBudgetUpdateBlockInvalid: boolean;
    readonly isBudgetExceedMaxLimit: boolean;
    readonly isWorkerReregisterNeeded: boolean;
    readonly type: 'BadSender' | 'InvalidMessage' | 'WorkerNotRegistered' | 'GatekeeperNotRegistered' | 'DuplicateBoundSession' | 'BenchmarkMissing' | 'SessionNotFound' | 'SessionNotBound' | 'WorkerNotReady' | 'WorkerNotComputing' | 'WorkerNotBound' | 'CoolDownNotReady' | 'InsufficientStake' | 'TooMuchStake' | 'InternalErrorBadTokenomicParameters' | 'DuplicateBoundWorker' | 'BenchmarkTooLow' | 'InternalErrorCannotStartWithExistingStake' | 'NotMigrationRoot' | 'NonceIndexInvalid' | 'BudgetUpdateBlockInvalid' | 'BudgetExceedMaxLimit' | 'WorkerReregisterNeeded';
  }

  /** @name PhalaPalletsStakePoolPalletPoolInfo (589) */
  interface PhalaPalletsStakePoolPalletPoolInfo extends Struct {
    readonly pid: u64;
    readonly owner: AccountId32;
    readonly payoutCommission: Option<Permill>;
    readonly ownerReward: u128;
    readonly cap: Option<u128>;
    readonly rewardAcc: u128;
    readonly totalShares: u128;
    readonly totalStake: u128;
    readonly freeStake: u128;
    readonly releasingStake: u128;
    readonly workers: Vec<SpCoreSr25519Public>;
    readonly withdrawQueue: Vec<PhalaPalletsStakePoolPalletWithdrawInfo>;
  }

  /** @name PhalaPalletsStakePoolPalletWithdrawInfo (592) */
  interface PhalaPalletsStakePoolPalletWithdrawInfo extends Struct {
    readonly user: AccountId32;
    readonly shares: u128;
    readonly startTime: u64;
  }

  /** @name PhalaPalletsStakePoolPalletUserStakeInfo (594) */
  interface PhalaPalletsStakePoolPalletUserStakeInfo extends Struct {
    readonly user: AccountId32;
    readonly locked: u128;
    readonly shares: u128;
    readonly availableRewards: u128;
    readonly rewardDebt: u128;
  }

  /** @name PhalaPalletsStakePoolPalletError (597) */
  type PhalaPalletsStakePoolPalletError = Null;

  /** @name PhalaPalletsComputeStakePoolV2PalletError (599) */
  interface PhalaPalletsComputeStakePoolV2PalletError extends Enum {
    readonly isWorkerNotRegistered: boolean;
    readonly isBenchmarkMissing: boolean;
    readonly isWorkerExists: boolean;
    readonly isWorkerAlreadyStopped: boolean;
    readonly isWorkerDoesNotExist: boolean;
    readonly isWorkerInAnotherPool: boolean;
    readonly isUnauthorizedOperator: boolean;
    readonly isUnauthorizedPoolOwner: boolean;
    readonly isInadequateCapacity: boolean;
    readonly isStakeExceedsCapacity: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isPoolIsBusy: boolean;
    readonly isInsufficientContribution: boolean;
    readonly isNoNftToWithdraw: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isPoolStakeNotFound: boolean;
    readonly isInsufficientFreeStake: boolean;
    readonly isInvalidWithdrawalAmount: boolean;
    readonly isFailedToBindSessionAndWorker: boolean;
    readonly isInternalSubsidyPoolCannotWithdraw: boolean;
    readonly isPoolBankrupt: boolean;
    readonly isNoRewardToClaim: boolean;
    readonly isFeatureNotEnabled: boolean;
    readonly isWorkersExceedLimit: boolean;
    readonly isCannotRestartWithLessStake: boolean;
    readonly isInvalidForceRewardAmount: boolean;
    readonly isWithdrawQueueNotEmpty: boolean;
    readonly isMissingCollectionId: boolean;
    readonly isVaultIsLocked: boolean;
    readonly isSessionDoesNotExist: boolean;
    readonly isWorkerIsNotReady: boolean;
    readonly isLockAccountStakeError: boolean;
    readonly isNoLegacyRewardToClaim: boolean;
    readonly type: 'WorkerNotRegistered' | 'BenchmarkMissing' | 'WorkerExists' | 'WorkerAlreadyStopped' | 'WorkerDoesNotExist' | 'WorkerInAnotherPool' | 'UnauthorizedOperator' | 'UnauthorizedPoolOwner' | 'InadequateCapacity' | 'StakeExceedsCapacity' | 'PoolDoesNotExist' | 'PoolIsBusy' | 'InsufficientContribution' | 'NoNftToWithdraw' | 'InsufficientBalance' | 'PoolStakeNotFound' | 'InsufficientFreeStake' | 'InvalidWithdrawalAmount' | 'FailedToBindSessionAndWorker' | 'InternalSubsidyPoolCannotWithdraw' | 'PoolBankrupt' | 'NoRewardToClaim' | 'FeatureNotEnabled' | 'WorkersExceedLimit' | 'CannotRestartWithLessStake' | 'InvalidForceRewardAmount' | 'WithdrawQueueNotEmpty' | 'MissingCollectionId' | 'VaultIsLocked' | 'SessionDoesNotExist' | 'WorkerIsNotReady' | 'LockAccountStakeError' | 'NoLegacyRewardToClaim';
  }

  /** @name PhalaPalletsComputeVaultPalletError (600) */
  interface PhalaPalletsComputeVaultPalletError extends Enum {
    readonly isUnauthorizedPoolOwner: boolean;
    readonly isNoEnoughShareToClaim: boolean;
    readonly isNoRewardToClaim: boolean;
    readonly isAssetAccountNotExist: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isInsufficientContribution: boolean;
    readonly isVaultBankrupt: boolean;
    readonly isNoNftToWithdraw: boolean;
    readonly type: 'UnauthorizedPoolOwner' | 'NoEnoughShareToClaim' | 'NoRewardToClaim' | 'AssetAccountNotExist' | 'InsufficientBalance' | 'InsufficientContribution' | 'VaultBankrupt' | 'NoNftToWithdraw';
  }

  /** @name PhalaPalletsComputeWrappedBalancesPalletFinanceAccount (603) */
  interface PhalaPalletsComputeWrappedBalancesPalletFinanceAccount extends Struct {
    readonly investPools: Vec<ITuple<[u64, u32]>>;
    readonly locked: u128;
  }

  /** @name PhalaPalletsComputeWrappedBalancesPalletError (606) */
  interface PhalaPalletsComputeWrappedBalancesPalletError extends Enum {
    readonly isStakerAccountNotFound: boolean;
    readonly isUnwrapAmountExceedsAvaliableStake: boolean;
    readonly isVoteAmountLargerThanTotalStakes: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isReferendumOngoing: boolean;
    readonly isIterationsIsNotVaild: boolean;
    readonly type: 'StakerAccountNotFound' | 'UnwrapAmountExceedsAvaliableStake' | 'VoteAmountLargerThanTotalStakes' | 'ReferendumInvalid' | 'ReferendumOngoing' | 'IterationsIsNotVaild';
  }

  /** @name PhalaPalletsComputePoolProxy (607) */
  interface PhalaPalletsComputePoolProxy extends Enum {
    readonly isStakePool: boolean;
    readonly asStakePool: PhalaPalletsComputePoolProxyStakePool;
    readonly isVault: boolean;
    readonly asVault: PhalaPalletsComputePoolProxyVault;
    readonly type: 'StakePool' | 'Vault';
  }

  /** @name PhalaPalletsComputePoolProxyStakePool (608) */
  interface PhalaPalletsComputePoolProxyStakePool extends Struct {
    readonly basepool: PhalaPalletsComputeBasePoolPalletBasePool;
    readonly payoutCommission: Option<Permill>;
    readonly cap: Option<u128>;
    readonly workers: Vec<SpCoreSr25519Public>;
    readonly cdWorkers: Vec<SpCoreSr25519Public>;
    readonly lockAccount: AccountId32;
    readonly ownerRewardAccount: AccountId32;
  }

  /** @name PhalaPalletsComputeBasePoolPalletBasePool (609) */
  interface PhalaPalletsComputeBasePoolPalletBasePool extends Struct {
    readonly pid: u64;
    readonly owner: AccountId32;
    readonly totalShares: u128;
    readonly totalValue: u128;
    readonly withdrawQueue: Vec<PhalaPalletsComputeBasePoolPalletWithdrawInfo>;
    readonly valueSubscribers: Vec<u64>;
    readonly cid: u32;
    readonly poolAccountId: AccountId32;
  }

  /** @name PhalaPalletsComputeBasePoolPalletWithdrawInfo (611) */
  interface PhalaPalletsComputeBasePoolPalletWithdrawInfo extends Struct {
    readonly user: AccountId32;
    readonly startTime: u64;
    readonly nftId: u32;
  }

  /** @name PhalaPalletsComputePoolProxyVault (612) */
  interface PhalaPalletsComputePoolProxyVault extends Struct {
    readonly basepool: PhalaPalletsComputeBasePoolPalletBasePool;
    readonly lastSharePriceCheckpoint: u128;
    readonly commission: Option<Permill>;
    readonly ownerShares: u128;
    readonly investPools: Vec<u64>;
  }

  /** @name PhalaPalletsComputeBasePoolPalletError (613) */
  interface PhalaPalletsComputeBasePoolPalletError extends Enum {
    readonly isMissCollectionId: boolean;
    readonly isPoolBankrupt: boolean;
    readonly isInvalidShareToWithdraw: boolean;
    readonly isInvalidWithdrawalAmount: boolean;
    readonly isRmrkError: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isPoolTypeNotMatch: boolean;
    readonly isNftIdNotFound: boolean;
    readonly isInvalidSharePrice: boolean;
    readonly isAttrLocked: boolean;
    readonly isUnauthorizedPoolOwner: boolean;
    readonly isAlreadyInContributeWhitelist: boolean;
    readonly isNotInContributeWhitelist: boolean;
    readonly isExceedWhitelistMaxLen: boolean;
    readonly isNoWhitelistCreated: boolean;
    readonly isExceedMaxDescriptionLen: boolean;
    readonly isNotMigrationRoot: boolean;
    readonly isBurnNftFailed: boolean;
    readonly isTransferSharesAmountInvalid: boolean;
    readonly type: 'MissCollectionId' | 'PoolBankrupt' | 'InvalidShareToWithdraw' | 'InvalidWithdrawalAmount' | 'RmrkError' | 'PoolDoesNotExist' | 'PoolTypeNotMatch' | 'NftIdNotFound' | 'InvalidSharePrice' | 'AttrLocked' | 'UnauthorizedPoolOwner' | 'AlreadyInContributeWhitelist' | 'NotInContributeWhitelist' | 'ExceedWhitelistMaxLen' | 'NoWhitelistCreated' | 'ExceedMaxDescriptionLen' | 'NotMigrationRoot' | 'BurnNftFailed' | 'TransferSharesAmountInvalid';
  }

  /** @name PhalaPalletsPhatPalletBasicContractInfo (614) */
  interface PhalaPalletsPhatPalletBasicContractInfo extends Struct {
    readonly deployer: AccountId32;
    readonly cluster: H256;
  }

  /** @name PhalaTypesContractClusterInfo (615) */
  interface PhalaTypesContractClusterInfo extends Struct {
    readonly owner: AccountId32;
    readonly permission: PhalaTypesContractClusterPermission;
    readonly workers: Vec<SpCoreSr25519Public>;
    readonly systemContract: H256;
    readonly gasPrice: u128;
    readonly depositPerItem: u128;
    readonly depositPerByte: u128;
  }

  /** @name PhalaPalletsPhatPalletError (617) */
  interface PhalaPalletsPhatPalletError extends Enum {
    readonly isCodeNotFound: boolean;
    readonly isClusterNotFound: boolean;
    readonly isClusterNotDeployed: boolean;
    readonly isClusterPermissionDenied: boolean;
    readonly isDuplicatedContract: boolean;
    readonly isDuplicatedDeployment: boolean;
    readonly isNoWorkerSpecified: boolean;
    readonly isInvalidSender: boolean;
    readonly isWorkerNotFound: boolean;
    readonly isPayloadTooLarge: boolean;
    readonly isNoPinkSystemCode: boolean;
    readonly isContractNotFound: boolean;
    readonly isWorkerIsBusy: boolean;
    readonly type: 'CodeNotFound' | 'ClusterNotFound' | 'ClusterNotDeployed' | 'ClusterPermissionDenied' | 'DuplicatedContract' | 'DuplicatedDeployment' | 'NoWorkerSpecified' | 'InvalidSender' | 'WorkerNotFound' | 'PayloadTooLarge' | 'NoPinkSystemCode' | 'ContractNotFound' | 'WorkerIsBusy';
  }

  /** @name PhalaPalletsPhatTokenomicPalletError (619) */
  interface PhalaPalletsPhatTokenomicPalletError extends Enum {
    readonly isInvalidAmountOfStake: boolean;
    readonly type: 'InvalidAmountOfStake';
  }

  /** @name PalletUniquesCollectionDetails (620) */
  interface PalletUniquesCollectionDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly totalDeposit: u128;
    readonly freeHolding: bool;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly attributes: u32;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemDetails (622) */
  interface PalletUniquesItemDetails extends Struct {
    readonly owner: AccountId32;
    readonly approved: Option<AccountId32>;
    readonly isFrozen: bool;
    readonly deposit: u128;
  }

  /** @name PalletUniquesCollectionMetadata (623) */
  interface PalletUniquesCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemMetadata (624) */
  interface PalletUniquesItemMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesError (628) */
  interface PalletUniquesError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isInUse: boolean;
    readonly isFrozen: boolean;
    readonly isWrongDelegate: boolean;
    readonly isNoDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isLocked: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyAlreadySet: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'WrongOwner' | 'BadWitness' | 'InUse' | 'Frozen' | 'WrongDelegate' | 'NoDelegate' | 'Unapproved' | 'Unaccepted' | 'Locked' | 'MaxSupplyReached' | 'MaxSupplyAlreadySet' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'NotForSale' | 'BidTooLow';
  }

  /** @name RmrkTraitsCollectionCollectionInfo (629) */
  interface RmrkTraitsCollectionCollectionInfo extends Struct {
    readonly issuer: AccountId32;
    readonly metadata: Bytes;
    readonly max: Option<u32>;
    readonly symbol: Bytes;
    readonly nftsCount: u32;
  }

  /** @name RmrkTraitsNftNftInfo (630) */
  interface RmrkTraitsNftNftInfo extends Struct {
    readonly owner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
    readonly royalty: Option<RmrkTraitsNftRoyaltyInfo>;
    readonly metadata: Bytes;
    readonly equipped: Option<ITuple<[u32, u32]>>;
    readonly pending: bool;
    readonly transferable: bool;
  }

  /** @name RmrkTraitsNftRoyaltyInfo (632) */
  interface RmrkTraitsNftRoyaltyInfo extends Struct {
    readonly recipient: AccountId32;
    readonly amount: Permill;
  }

  /** @name RmrkTraitsResourceResourceInfo (634) */
  interface RmrkTraitsResourceResourceInfo extends Struct {
    readonly id: u32;
    readonly resource: RmrkTraitsResourceResourceTypes;
    readonly pending: bool;
    readonly pendingRemoval: bool;
  }

  /** @name RmrkTraitsNftNftChild (637) */
  interface RmrkTraitsNftNftChild extends Struct {
    readonly collectionId: u32;
    readonly nftId: u32;
  }

  /** @name PhantomType (638) */
  interface PhantomType extends Vec<RmrkTraitsPropertyPropertyInfo> {}

  /** @name RmrkTraitsPropertyPropertyInfo (639) */
  interface RmrkTraitsPropertyPropertyInfo extends Struct {
    readonly key: Bytes;
    readonly value: Bytes;
  }

  /** @name PalletRmrkCoreError (641) */
  interface PalletRmrkCoreError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly isTooLong: boolean;
    readonly isNoAvailableCollectionId: boolean;
    readonly isNoAvailableResourceId: boolean;
    readonly isMetadataNotSet: boolean;
    readonly isRecipientNotSet: boolean;
    readonly isNoAvailableNftId: boolean;
    readonly isNotInRange: boolean;
    readonly isRoyaltyNotSet: boolean;
    readonly isCollectionUnknown: boolean;
    readonly isNoPermission: boolean;
    readonly isNoWitness: boolean;
    readonly isCollectionNotEmpty: boolean;
    readonly isCollectionFullOrLocked: boolean;
    readonly isCannotSendToDescendentOrSelf: boolean;
    readonly isResourceAlreadyExists: boolean;
    readonly isNftAlreadyExists: boolean;
    readonly isEmptyResource: boolean;
    readonly isTooManyRecursions: boolean;
    readonly isNftIsLocked: boolean;
    readonly isCannotAcceptNonOwnedNft: boolean;
    readonly isCannotRejectNonOwnedNft: boolean;
    readonly isCannotRejectNonPendingNft: boolean;
    readonly isResourceDoesntExist: boolean;
    readonly isResourceNotPending: boolean;
    readonly isNonTransferable: boolean;
    readonly isCannotSendEquippedItem: boolean;
    readonly isCannotAcceptToNewOwner: boolean;
    readonly isFailedTransferHooksPreCheck: boolean;
    readonly isFailedTransferHooksPostTransfer: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow' | 'TooLong' | 'NoAvailableCollectionId' | 'NoAvailableResourceId' | 'MetadataNotSet' | 'RecipientNotSet' | 'NoAvailableNftId' | 'NotInRange' | 'RoyaltyNotSet' | 'CollectionUnknown' | 'NoPermission' | 'NoWitness' | 'CollectionNotEmpty' | 'CollectionFullOrLocked' | 'CannotSendToDescendentOrSelf' | 'ResourceAlreadyExists' | 'NftAlreadyExists' | 'EmptyResource' | 'TooManyRecursions' | 'NftIsLocked' | 'CannotAcceptNonOwnedNft' | 'CannotRejectNonOwnedNft' | 'CannotRejectNonPendingNft' | 'ResourceDoesntExist' | 'ResourceNotPending' | 'NonTransferable' | 'CannotSendEquippedItem' | 'CannotAcceptToNewOwner' | 'FailedTransferHooksPreCheck' | 'FailedTransferHooksPostTransfer';
  }

  /** @name RmrkTraitsBaseBaseInfo (642) */
  interface RmrkTraitsBaseBaseInfo extends Struct {
    readonly issuer: AccountId32;
    readonly baseType: Bytes;
    readonly symbol: Bytes;
  }

  /** @name PalletRmrkEquipError (645) */
  interface PalletRmrkEquipError extends Enum {
    readonly isPermissionError: boolean;
    readonly isItemDoesntExist: boolean;
    readonly isEquipperDoesntExist: boolean;
    readonly isNoAvailableBaseId: boolean;
    readonly isTooManyEquippables: boolean;
    readonly isNoAvailablePartId: boolean;
    readonly isMustBeDirectParent: boolean;
    readonly isPartDoesntExist: boolean;
    readonly isBaseDoesntExist: boolean;
    readonly isCantEquipFixedPart: boolean;
    readonly isNoResourceForThisBaseFoundOnNft: boolean;
    readonly isCollectionNotEquippable: boolean;
    readonly isItemHasNoResourceToEquipThere: boolean;
    readonly isNoEquippableOnFixedPart: boolean;
    readonly isNeedsDefaultThemeFirst: boolean;
    readonly isItemAlreadyEquipped: boolean;
    readonly isSlotAlreadyEquipped: boolean;
    readonly isSlotNotEquipped: boolean;
    readonly isUnknownError: boolean;
    readonly isExceedsMaxPartsPerBase: boolean;
    readonly isTooManyProperties: boolean;
    readonly isItemNotEquipped: boolean;
    readonly isUnequipperMustOwnEitherItemOrEquipper: boolean;
    readonly isUnexpectedTryFromIntError: boolean;
    readonly isUnexpectedVecConversionError: boolean;
    readonly type: 'PermissionError' | 'ItemDoesntExist' | 'EquipperDoesntExist' | 'NoAvailableBaseId' | 'TooManyEquippables' | 'NoAvailablePartId' | 'MustBeDirectParent' | 'PartDoesntExist' | 'BaseDoesntExist' | 'CantEquipFixedPart' | 'NoResourceForThisBaseFoundOnNft' | 'CollectionNotEquippable' | 'ItemHasNoResourceToEquipThere' | 'NoEquippableOnFixedPart' | 'NeedsDefaultThemeFirst' | 'ItemAlreadyEquipped' | 'SlotAlreadyEquipped' | 'SlotNotEquipped' | 'UnknownError' | 'ExceedsMaxPartsPerBase' | 'TooManyProperties' | 'ItemNotEquipped' | 'UnequipperMustOwnEitherItemOrEquipper' | 'UnexpectedTryFromIntError' | 'UnexpectedVecConversionError';
  }

  /** @name PalletRmrkMarketListInfo (646) */
  interface PalletRmrkMarketListInfo extends Struct {
    readonly listedBy: AccountId32;
    readonly amount: u128;
    readonly expires: Option<u32>;
  }

  /** @name PalletRmrkMarketOffer (648) */
  interface PalletRmrkMarketOffer extends Struct {
    readonly maker: AccountId32;
    readonly amount: u128;
    readonly expires: Option<u32>;
  }

  /** @name PalletRmrkMarketError (649) */
  interface PalletRmrkMarketError extends Enum {
    readonly isNoPermission: boolean;
    readonly isTokenNotForSale: boolean;
    readonly isCannotWithdrawOffer: boolean;
    readonly isCannotUnlistToken: boolean;
    readonly isCannotOfferOnOwnToken: boolean;
    readonly isCannotBuyOwnToken: boolean;
    readonly isUnknownOffer: boolean;
    readonly isCannotListNftOwnedByNft: boolean;
    readonly isTokenDoesNotExist: boolean;
    readonly isOfferTooLow: boolean;
    readonly isAlreadyOffered: boolean;
    readonly isOfferHasExpired: boolean;
    readonly isListingHasExpired: boolean;
    readonly isPriceDiffersFromExpected: boolean;
    readonly isNonTransferable: boolean;
    readonly isMarketplaceOwnerNotSet: boolean;
    readonly isCannotListNft: boolean;
    readonly type: 'NoPermission' | 'TokenNotForSale' | 'CannotWithdrawOffer' | 'CannotUnlistToken' | 'CannotOfferOnOwnToken' | 'CannotBuyOwnToken' | 'UnknownOffer' | 'CannotListNftOwnedByNft' | 'TokenDoesNotExist' | 'OfferTooLow' | 'AlreadyOffered' | 'OfferHasExpired' | 'ListingHasExpired' | 'PriceDiffersFromExpected' | 'NonTransferable' | 'MarketplaceOwnerNotSet' | 'CannotListNft';
  }

  /** @name SygmaAccessSegregatorError (651) */
  interface SygmaAccessSegregatorError extends Enum {
    readonly isUnimplemented: boolean;
    readonly isGrantAccessFailed: boolean;
    readonly type: 'Unimplemented' | 'GrantAccessFailed';
  }

  /** @name SygmaBasicFeehandlerError (653) */
  interface SygmaBasicFeehandlerError extends Enum {
    readonly isUnimplemented: boolean;
    readonly isAccessDenied: boolean;
    readonly type: 'Unimplemented' | 'AccessDenied';
  }

  /** @name SygmaBridgeError (656) */
  interface SygmaBridgeError extends Enum {
    readonly isAccessDenied: boolean;
    readonly isBadMpcSignature: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isTransactFailed: boolean;
    readonly isFeeTooExpensive: boolean;
    readonly isMissingMpcAddress: boolean;
    readonly isMpcAddrNotUpdatable: boolean;
    readonly isBridgePaused: boolean;
    readonly isBridgeUnpaused: boolean;
    readonly isMissingFeeConfig: boolean;
    readonly isAssetNotBound: boolean;
    readonly isProposalAlreadyComplete: boolean;
    readonly isEmptyProposalList: boolean;
    readonly isTransactorFailed: boolean;
    readonly isInvalidDepositData: boolean;
    readonly isDestDomainNotSupported: boolean;
    readonly isDestChainIDNotMatch: boolean;
    readonly isExtractDestDataFailed: boolean;
    readonly isDecimalConversionFail: boolean;
    readonly isDepositNonceOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly type: 'AccessDenied' | 'BadMpcSignature' | 'InsufficientBalance' | 'TransactFailed' | 'FeeTooExpensive' | 'MissingMpcAddress' | 'MpcAddrNotUpdatable' | 'BridgePaused' | 'BridgeUnpaused' | 'MissingFeeConfig' | 'AssetNotBound' | 'ProposalAlreadyComplete' | 'EmptyProposalList' | 'TransactorFailed' | 'InvalidDepositData' | 'DestDomainNotSupported' | 'DestChainIDNotMatch' | 'ExtractDestDataFailed' | 'DecimalConversionFail' | 'DepositNonceOverflow' | 'Unimplemented';
  }

  /** @name SygmaFeeHandlerRouterError (657) */
  interface SygmaFeeHandlerRouterError extends Enum {
    readonly isAccessDenied: boolean;
    readonly isUnimplemented: boolean;
    readonly type: 'AccessDenied' | 'Unimplemented';
  }

  /** @name SubbridgePalletsSygmaWrapperPalletError (658) */
  interface SubbridgePalletsSygmaWrapperPalletError extends Enum {
    readonly isCannotDepositAsset: boolean;
    readonly isUnimplemented: boolean;
    readonly type: 'CannotDepositAsset' | 'Unimplemented';
  }

  /** @name PalletIndexError (659) */
  interface PalletIndexError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isWorkerAlreadySet: boolean;
    readonly isWorkerNotSet: boolean;
    readonly isWorkerMismatch: boolean;
    readonly isTaskAlreadyExist: boolean;
    readonly isNotFoundInTaskQueue: boolean;
    readonly isTaskQueueEmpty: boolean;
    readonly isTransactFailed: boolean;
    readonly type: 'AssetNotFound' | 'WorkerAlreadySet' | 'WorkerNotSet' | 'WorkerMismatch' | 'TaskAlreadyExist' | 'NotFoundInTaskQueue' | 'TaskQueueEmpty' | 'TransactFailed';
  }

  /** @name SpRuntimeMultiSignature (661) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (662) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (664) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (665) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (668) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (669) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (670) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (671) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (674) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (675) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PhalaPalletsMqCheckSeqCheckMqSequence (676) */
  type PhalaPalletsMqCheckSeqCheckMqSequence = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (677) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PhalaParachainRuntimeRuntime (678) */
  type PhalaParachainRuntimeRuntime = Null;

} // declare module
