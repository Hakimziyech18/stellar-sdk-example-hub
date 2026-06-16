# ISSUE-001: Implement Path Payments Example (Horizon)

**EPIC:** 1 — SDK Examples
**Labels:** `enhancement`, `good first issue`, `epic-examples`
**Difficulty:** easy

## Description

Stellar supports path payments (sending one asset and having the recipient receive a different asset through DEX paths). We need a runnable script demonstrating how to construct, simulate, and submit a path payment operation using the SDK.

## Tasks

- [ ] Create `src/examples/06-path-payment.ts`
- [ ] Incorporate `Operation.pathPaymentStrictSend` or `Operation.pathPaymentStrictReceive`
- [ ] Connect to Horizon, find path options, and execute the payment
- [ ] Print exchange rate and transaction hash on success
- [ ] Register the new example in the runner catalog

## Acceptance Criteria

- Executing `npm run run-example 06-path-payment` executes the path payment script
- Thorough inline documentation explains the concept of paths and limits
