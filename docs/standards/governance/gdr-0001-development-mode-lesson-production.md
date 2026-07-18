---
document_type: "decision-record"
decision_id: "ASEA-ADR-002"
title: "GDR-0001 Development Mode Lesson Production Authorization"
version: "0.1.0"
status: "Draft"
decision_status: "Proposed"
scope_id: "ASEA"
decided_on: "2026-07-18"
owner_role: "Governance Architect"
review_ids: []
superseded_by: []
---

# GDR-0001 Development Mode Lesson Production Authorization

## Decision ID

The canonical decision ID is `ASEA-ADR-002`.

`GDR-0001` is the human-readable governance sequence supplied for this proposal.
The canonical metadata uses `ASEA-ADR-002` because the Decision Record Standard
requires the `ASEA-ADR-{NNN}` format for repository-scoped decisions and
`ASEA-ADR-001` is already assigned.

## Problem

The repository requires a controlled way to authorize draft lesson production
while it is still being developed. The current production workflow requires an
Approved Content Review for the exact Chapter Production Packet (CPP), but a
full production organization and independent release-review capacity may not yet
exist.

Removing the review requirement would weaken Standards v2. Introducing a second
status lifecycle, a parallel approval system, or an unregistered governance
authority would create canonical conflicts.

## Context

Standards Index v2 remains the canonical scope and precedence authority.
Repository Standard v2 owns common metadata, lifecycle, Review, and validation
contracts. The Governance Extension adds managed governance records without
weakening those contracts.

The Lesson Authoring Standard currently permits authoring only when the exact CPP
version:

- passes schema and reference validation;
- resolves to an approved Research Packet;
- covers every target Learning Outcome;
- has `production_decision: Authorized`; and
- has an Approved Content Review.

The KOS Review Process additionally states that AI systems cannot own or approve
reviews and that authors cannot act as the sole Final reviewer for Stable
publication.

## Current Limitation

The canonical Review schema supports the required approval, but the operational
workflow does not explicitly state whether the human Repository Owner may own the
pre-production Content Review that authorizes draft lesson writing.

This ambiguity can cause one of two failures:

1. draft production remains blocked while waiting for a production-stage review
   organization; or
2. content is generated without a canonical Review record and therefore loses
   authorization traceability.

## Decision

### Chosen Decision

Propose a Development Mode authorization profile within the existing Governance
Extension:

1. Development Mode is an operational condition, not a value in the canonical
   `status` lifecycle and not a new document type.
2. A human Repository Owner may serve as the owner of the pre-production Content
   Review for an exact CPP version.
3. Repository Owner approval satisfies the review requirement for beginning
   draft lesson authoring only when it is recorded in the existing canonical
   Review schema with:
   - `document_type: "review"`;
   - a valid repository- or Volume-scoped Review ID;
   - `review_type: "Content"`;
   - `review_domain: "Content"`;
   - the exact CPP scope ID and version;
   - `reviewer_roles` containing `Repository Owner`;
   - `decision: "Approved"`; and
   - links to passing validation evidence and the approved Research Packet.
4. Repository Owner approval does not replace CPP validation, Research Packet
   approval, Learning Outcome coverage, Claim and Evidence traceability, or
   `production_decision: Authorized`.
5. This authorization does not approve technical correctness, pedagogical
   quality, assets, repository conformance, Final Review, Stable publication, or
   release.
6. AI systems may prepare evidence and draft records but cannot be the reviewer,
   Repository Owner, or approval authority.
7. The Repository Owner cannot use this profile to act as the sole Final
   reviewer for content they authored or authorized.
8. Production Mode begins for this profile when a Stable repository release
   explicitly adopts the full production review workflow. No new lifecycle enum
   is created to represent that condition.

Until this proposal receives an Approved Governance Review, it has no
authorization effect.

## Rationale

The proposal uses the existing Review document type, Review ID convention,
decision enum, status lifecycle, and ownership controls. It resolves an
operational role ambiguity without creating a second source of truth.

The Repository Owner authorizes the controlled expenditure of repository effort
on a draft; they do not certify that the resulting lesson is technically correct
or publishable. Existing post-generation review gates retain those
responsibilities.

## Alternatives Considered

### Remove Pre-production Content Review

Rejected because it would directly weaken the Lesson Authoring Standard and the
Governance Extension flow.

### Introduce a New `Development` Lifecycle Status

Rejected because Repository Standard v2 exclusively defines the canonical
status lifecycle.

### Create a Separate Development Approval Document Type

Rejected because it would duplicate the existing Review schema and require a
new schema owner and Standards Index registration.

### Allow AI-generated Approval

Rejected because the KOS Review Process explicitly prohibits AI systems from
owning or approving reviews.

### Require the Full Final Review Board Before Draft Authoring

Rejected because Final Review evaluates publication readiness, while the
decision in this record concerns authorization to begin a traceable draft.

## Consequences

### Benefits

- Draft lesson production can begin through a canonical, auditable approval.
- Standards v2 remains the single authority hierarchy.
- Existing metadata, IDs, decision values, and status values remain valid.
- Authorization is bound to an exact CPP version and cannot silently transfer to
  materially changed scope.
- All post-generation quality and publication gates remain intact.

### Risks

- The Repository Owner may lack subject-matter or learning-design expertise.
- A single-person Development Mode gate creates concentration of authority.
- Teams may incorrectly interpret draft authorization as quality approval.
- The operational condition may persist longer than intended.

Risk controls are exact-version approval, retained validation requirements,
explicit non-publication scope, mandatory post-generation reviews, prohibition
of AI approval, and the removal conditions defined below.

## Migration Impact

### Required Schema Changes

No canonical schema change is required. The proposal uses fields and enums
already owned by Repository Standard v2 and the Governance Review Standard.

If a machine-readable repository-mode field is later required, it must be
introduced through a separately reviewed schema change. This decision does not
authorize such a field.

### Required Standards Index Updates

No Standards Index update is required because this record uses the already
registered `decision-record` and `review` document types and does not alter
authority boundaries or precedence.

### Required Review Workflow Updates

After this decision is accepted:

1. production workflow documentation must map the Development Mode authorization
   gate to the canonical `Content` and `Content` Review pair;
2. review guidance must state that `Repository Owner` is permitted only for
   pre-production draft authorization under this profile;
3. validation must reject authorization records without exact CPP version,
   Research Packet, validation evidence, and human reviewer identity; and
4. Technical, Pedagogical, Repository, and Final Review ownership must remain
   unchanged.

### Required Lesson-authoring Updates

After acceptance, the Draft Lesson Authoring Standard may receive a
backward-compatible clarification that an Approved Content Review owned by the
human Repository Owner satisfies the draft-authoring gate when all conditions in
this decision are met.

The update must not remove or relax any other authorization prerequisite.

### Backward Compatibility

The proposal is backward compatible:

- existing Approved Content Reviews remain valid for their exact scope versions;
- no current ID, metadata field, enum, status, or lifecycle transition changes;
- no existing approval is reinterpreted as Repository Owner approval; and
- publication and release requirements remain unchanged.

### Migration Order

1. Validate this Decision Record against the Decision Record Standard.
2. Execute a repository-scoped Governance Review.
3. If Approved, change this record to `decision_status: "Accepted"`, add the
   Approved Review ID, and advance the document through the canonical lifecycle.
4. Clarify the Draft Lesson Authoring Standard without changing its other gates.
5. Update production workflow guidance with the canonical role mapping.
6. Add validation coverage for exact-version and reviewer-ownership rules.
7. Execute Repository Review of the integrated changes.
8. Use the profile only for new draft-production authorization records.

## Future Removal Conditions

The Development Mode authorization profile must stop being used when any of the
following occurs:

- a Stable repository release explicitly adopts the full production review
  workflow;
- an accepted successor Decision Record supersedes this decision;
- a Governance Review determines that independent pre-production Content Review
  capacity is operational; or
- audit evidence shows repeated misuse, missing independence, or quality-gate
  bypass.

Existing Review records remain immutable historical evidence after removal.

## Repository Impact

If accepted, the immediate impact is limited to governance and production
workflow documentation plus validation rules. It does not modify curriculum,
Learning Outcomes, Chapter IDs, Knowledge Foundation records, frozen
Blueprints, or educational content.

No draft lesson becomes Stable or publishable through this decision alone.

## Status

`Proposed`.

The record is `Draft`, has no Approved Review ID, and does not currently
authorize lesson production.

## Superseded By

None.

## Traceability

This proposal derives authority from and remains subordinate to:

- `ASEA-STD-INDEX-002`;
- `ASEA-STD-REPOSITORY-002`;
- `ASEA-STD-GOV-INDEX-001`;
- `ASEA-STD-GOV-DECISION-001`;
- `ASEA-STD-GOV-REVIEW-001`;
- `ASEA-STD-PROD-LESSON-001`; and
- `ASEA-STD-KOS-011`.

Potential downstream changes after approval are limited to:

- the Draft Lesson Authoring Standard;
- production workflow guidance;
- validation rules for development authorization; and
- a new canonical Review record approving the exact CPP version.

## References

- [Standards Index v2.0](../standards-index-v2.md)
- [Repository Standard v2.0](../repository-standard-v2.md)
- [Governance Extension Index](./09-governance-index.md)
- [Decision Record Standard](./04-decision-record-standard.md)
- [Review Standard](./02-review-standard.md)
- [Migration Standard](./06-migration-standard.md)
- [Lesson Authoring Standard](../../production/lesson-authoring-standard.md)
- [KOS Review Process](../../knowledge-operating-system/11-review-process.md)
