---
document_type: "standard"
standard_id: "ASEA-STD-KOS-002"
title: "ASEA Knowledge Standards"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Standards

## Purpose

This standard defines the atomic records, identifiers, metadata, and integrity rules used by the KOS.

## Normative Language

MUST, MUST NOT, SHOULD, and MAY express requirement levels. A record is authoritative only when its designated registry declares it authoritative under the governance standards.

## Record Types and IDs

| Record | ID pattern | Example |
|---|---|---|
| Research brief | `ASEA-RB-{YYYY}-{NNNN}` | `ASEA-RB-2026-0001` |
| Source | `ASEA-SRC-{NNNNNN}` | `ASEA-SRC-000001` |
| Evidence | `ASEA-EV-{NNNNNN}` | `ASEA-EV-000001` |
| Claim | `ASEA-CLM-{NNNNNN}` | `ASEA-CLM-000001` |
| Concept | `ASEA-CON-{NNNNNN}` | `ASEA-CON-000001` |
| Contradiction | `ASEA-CTR-{NNNNNN}` | `ASEA-CTR-000001` |
| Graph edge | `ASEA-EDGE-{NNNNNN}` | `ASEA-EDGE-000001` |
| Content asset | `ASEA-AST-{NNNNNN}` | `ASEA-AST-000001` |
| Asset manifest | `ASEA-AMF-{NNNNNN}` | `ASEA-AMF-000001` |
| Production packet | `{CHAPTER-ID}-CPP-{NNN}` | `V01-C01-CPP-001` |
| Update request | `ASEA-UPD-{YYYY}-{NNNN}` | `ASEA-UPD-2026-0001` |

IDs are uppercase ASCII, unique, immutable, and never recycled. A changed meaning receives a new ID and a supersession relation.
Learning Outcome, Chapter, Lab, Exercise, Challenge, Quiz, Assessment, Project, and
Capstone IDs remain owned by Standards v2. KOS does not create a generic activity
ID; it references the applicable canonical artefact ID.

## Common Record Metadata

Each machine-managed record MUST include:

```yaml
id: "ASEA-CLM-000001"
record_type: "claim"
version: "1.0.0"
workflow_state: "Candidate"
title: "Concise record title"
owner_role: "Subject-Matter Reviewer"
created_on: "2026-07-17"
updated_on: "2026-07-17"
supersedes: []
tags: []
```

Dates use `YYYY-MM-DD`; versions use SemVer. Repository document front matter continues to use the canonical Repository Standard status lifecycle. `workflow_state` applies only to KOS registry records.

## Workflow State Ownership

`workflow_state` uses the existing lifecycle for the record type and MUST NOT
contain review names, document status values, or newly invented states.

| Record type | Allowed workflow states |
|---|---|
| Source | `Proposed`, `Verified`, `Active`, `Deprecated`, `Archived` |
| Evidence | `Candidate`, `Extracted`, `Validated`, `Approved`, `Deprecated`, `Archived` |
| Claim | `Candidate`, `Extracted`, `Validated`, `Mapped`, `Approved`, `Deprecated`, `Archived` |
| Concept | `Candidate`, `Extracted`, `Validated`, `Mapped`, `Approved`, `Deprecated`, `Archived` |
| Graph edge | `Candidate`, `Validated`, `Approved`, `Deprecated`, `Archived` |
| Production packet | `Planned`, `Researching`, `Validated`, `Ready for Production`, `Deprecated`, `Archived` |
| Update request | `Open`, `Triaged`, `In Progress`, `Verification`, `Resolved`, `Closed` |

Source verification is recorded by the transition to `Verified`; a second field
must not duplicate the same state. Type-specific validation results, reviewer
decisions, and repository document status remain separate fields.

## Source, Evidence, and Claim Contract

A source record MUST identify title, creator or publisher, canonical URL or persistent identifier, publication/version date, access date, tier, source type, language, usage rights, archive or checksum when available, and verification status.

An evidence record MUST contain an exact locator, a faithful paraphrase or copyright-compliant excerpt, source ID, scope, observed date, and extractor. A claim record MUST contain one testable proposition, evidence IDs, applicable context, exceptions, confidence, freshness, contradiction IDs, and reviewer decision.

Technical claims without evidence IDs cannot enter a production packet. One source mirrored at multiple URLs counts as one independent source.

## Validation Ownership

Validation data belongs to the narrowest record capable of owning it:

- source records own tier, freshness class, identity, usage rights, and source state;
- evidence records own locator fidelity, scope, observation date, and independence group;
- claim records own tier scores, confidence score, freshness score, evidence count,
  contradiction links, and reviewer decision;
- concept records own approved-claim coverage and curriculum disposition;
- graph edges own relation semantics, endpoint integrity, rationale, and graph state.

Scores MUST NOT be copied to another record type merely to satisfy a generic
metadata template. Derived summaries identify their authoritative record IDs and
versions.

## Terminology

- **Verified source:** its identity, version, locator, and usage conditions have
  been checked.
- **Active source:** a Verified source currently eligible to support evidence.
- **Validated item:** its applicable checks passed; this is not production approval.
- **Approved item:** a human reviewer authorized the exact record version for its
  stated downstream use.
- **Material claim:** a proposition whose failure could change technical meaning,
  learner action, assessment, safety, or an engineering decision.

## Concept Contract

A concept record combines validated claims into a stable conceptual unit. It MUST contain the extraction fields in [Knowledge Extraction](./06-knowledge-extraction.md), graph relations from [Knowledge Graph](./07-knowledge-graph.md), and curriculum mappings to canonical learning-outcome IDs. Concept prose is a synthesis, not copied source text.

## Provenance and Licensing

All transformations preserve provenance:

```text
content fragment -> concept -> claim -> evidence -> source
```

Source availability does not imply permission to copy. Contributors MUST record usage rights and use original synthesis. Quotations must be minimal, attributed, and compatible with repository licensing.

## Quality Gates

- Schema-valid metadata and unique IDs.
- No unresolved blocking contradiction.
- Source identity and locator verified.
- Claim scope and exceptions recorded.
- Confidence and freshness calculated under the validation standard.
- Graph and learning-outcome references resolve.
- Human technical approval before production eligibility.

## Definition of Done

A knowledge item is done for production when it is `Approved`, all linked records resolve, provenance is complete, the freshness review date is current, and the item is included in a reviewed production packet.

## References

### Internal Standards

- [Source Validation](./05-source-validation.md)
- [Traceability Standard](../standards/governance/03-traceability-standard.md)
- [Repository Standard v2.0](../standards/repository-standard-v2.md)
