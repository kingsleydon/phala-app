// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Option, U256, U8aFixed, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { AccountId32, H160, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmV3MultiLocation } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assets: {
      /**
       * The amount of funds that must be reserved when creating a new approval.
       **/
      approvalDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of funds that must be reserved for a non-provider asset account to be
       * maintained.
       **/
      assetAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an asset.
       **/
      assetDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your asset.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes you store in your
       * metadata.
       **/
      metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
       * 
       * Must be configured to result in a weight that makes each call fit in a block.
       **/
      removeItemsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a name or symbol stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    assetsRegistry: {
      minBalance: u128 & AugmentedConst<ApiType>;
      nativeAssetLocation: XcmV3MultiLocation & AugmentedConst<ApiType>;
      nativeAssetSygmaResourceId: U8aFixed & AugmentedConst<ApiType>;
      nativeExecutionPrice: u128 & AugmentedConst<ApiType>;
      resourceIdGenerationSalt: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of holds that can exist on an account at any time.
       **/
      maxHolds: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Bounty duration in blocks.
       **/
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    chainBridge: {
      /**
       * The identifier for this chain.
       * This must be unique and must not collide with existing IDs within a set of bridged chains.
       **/
      bridgeChainId: u8 & AugmentedConst<ApiType>;
      /**
       * Maximum number of bridge events  allowed to exist in a single block
       **/
      bridgeEventLimit: u32 & AugmentedConst<ApiType>;
      proposalLifetime: u32 & AugmentedConst<ApiType>;
      /**
       * Salt used to generation rid
       **/
      resourceIdGenerationSalt: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    childBounties: {
      /**
       * Minimum value for a child-bounty.
       **/
      childBountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of child bounties that can be added to a parent bounty.
       **/
      maxActiveChildBountyCount: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    council: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of items which can be blacklisted.
       **/
      maxBlacklisted: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of deposits a public proposal may have at any time.
       **/
      maxDeposits: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    lottery: {
      /**
       * The max number of calls available in a single lottery.
       **/
      maxCalls: u32 & AugmentedConst<ApiType>;
      /**
       * Number of time we should try to generate a random number that has no modulo bias.
       * The larger this number, the more potential computation is used for picking the winner,
       * but also the more likely that the chosen winner is done fairly.
       **/
      maxGenerateRandom: u32 & AugmentedConst<ApiType>;
      /**
       * The Lottery's pallet id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    phalaRegistry: {
      /**
       * Enable None Attestation, SHOULD BE SET TO FALSE ON PRODUCTION !!!
       **/
      noneAttestationEnabled: bool & AugmentedConst<ApiType>;
      /**
       * Verify attestation
       * 
       * SHOULD NOT SET TO FALSE ON PRODUCTION!!!
       **/
      verifyPRuntime: bool & AugmentedConst<ApiType>;
      /**
       * Verify relaychain genesis
       * 
       * SHOULD NOT SET TO FALSE ON PRODUCTION!!!
       **/
      verifyRelaychainGenesisBlockHash: bool & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    phalaStakePoolv2: {
      /**
       * The grace period for force withdraw request, in seconds.
       **/
      gracePeriod: u64 & AugmentedConst<ApiType>;
      /**
       * The max allowed workers in a pool
       **/
      maxPoolWorkers: u32 & AugmentedConst<ApiType>;
      minContribution: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    phalaVault: {
      initialPriceCheckPoint: u128 & AugmentedConst<ApiType>;
      vaultQueuePeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    phalaWrappedBalances: {
      /**
       * W-PHA's asset id
       **/
      wPhaAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Pha's global fund pool
       **/
      wrappedBalancesAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    phragmenElection: {
      /**
       * How much should be locked up in order to submit one's candidacy.
       **/
      candidacyBond: u128 & AugmentedConst<ApiType>;
      /**
       * Number of members to elect.
       **/
      desiredMembers: u32 & AugmentedConst<ApiType>;
      /**
       * Number of runners_up to keep.
       **/
      desiredRunnersUp: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of candidates in a phragmen election.
       * 
       * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
       * consider how it will impact `T::WeightInfo::election_phragmen`.
       * 
       * When this limit is reached no more candidates are accepted in the election.
       **/
      maxCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of voters to allow in a phragmen election.
       * 
       * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
       * consider how it will impact `T::WeightInfo::election_phragmen`.
       * 
       * When the limit is reached the new voters are ignored.
       **/
      maxVoters: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum numbers of votes per voter.
       * 
       * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
       * consider how it will impact `T::WeightInfo::election_phragmen`.
       **/
      maxVotesPerVoter: u32 & AugmentedConst<ApiType>;
      /**
       * Identifier for the elections-phragmen pallet's lock
       **/
      palletId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * How long each seat is kept. This defines the next block number at which an election
       * round will happen. If set to zero, no elections are ever triggered and the module will
       * be in passive mode.
       **/
      termDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Base deposit associated with voting.
       * 
       * This should be sensibly high to economically ensure the pallet cannot be attacked by
       * creating a gigantic number of votes.
       **/
      votingBondBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of bond that need to be locked for each vote (32 bytes).
       **/
      votingBondFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    rmrkCore: {
      /**
       * The maximum number of resources that can be included in a setpriority extrinsic
       **/
      maxPriorities: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum nesting allowed in the pallet extrinsics.
       **/
      nestingBudget: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of parts each resource may have
       **/
      partsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of properties each can have
       **/
      propertiesLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum resource symbol length
       **/
      resourceSymbolLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    rmrkEquip: {
      /**
       * Maximum number of Properties allowed for any Theme
       **/
      maxCollectionsEquippablePerPart: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum allowed Parts (either Fixed or Slot) per Base
       **/
      maxPropertiesPerTheme: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    rmrkMarket: {
      /**
       * Market fee to be implemented downstream.
       **/
      marketFee: Permill & AugmentedConst<ApiType>;
      /**
       * Minimum offer amount as a valid offer
       **/
      minimumOfferAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * 
       * NOTE:
       * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
       * higher limit under `runtime-benchmarks` feature.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    sygmaBridge: {
      /**
       * EIP712 Verifying contract address
       * This is used in EIP712 typed data domain
       **/
      destVerifyingContractAddress: H160 & AugmentedConst<ApiType>;
      /**
       * Pallet ChainID
       * This is used in EIP712 typed data domain
       **/
      eip712ChainID: U256 & AugmentedConst<ApiType>;
      /**
       * Fee reserve account
       **/
      feeReserveAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Bridge transfer reserve account
       **/
      transferReserveAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    technicalCommittee: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tips: {
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: u32 & AugmentedConst<ApiType>;
      /**
       * The percent of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    uniques: {
      /**
       * The basic amount of funds that must be reserved when adding an attribute to an item.
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for collection.
       **/
      collectionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes store in metadata,
       * either "normal" metadata or attribute metadata.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an item.
       **/
      itemDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute key.
       **/
      keyLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your item.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of data stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute value.
       **/
      valueLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      maxVestingSchedules: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
