---
document_type: "standard"
standard_id: "ASEA-STD-PROD-RESEARCH-001"
title: "ASEA Research Packet Standard v1.0"
version: "1.0.0"
status: "Draft"
supersedes: []
---

# ASEA Research Packet Standard v1.0

## Purpose

This standard defines the complete Research Packet used as the reviewed input
to Chapter Production Packet design.

## Scope

It governs packet composition, metadata, section order, canonical references,
review evidence, lifecycle, and validation. It supplements the KOS Research
Pipeline and does not duplicate atomic knowledge registries.

## Authority Boundary

The Research Packet is a version-pinned aggregate:

- Research Brief owns scope and collection strategy.
- Source Registry owns Source identity and lifecycle.
- Evidence Registry owns source locators and bounded support.
- Claim Registry owns atomic propositions.
- Concept Registry and Knowledge Graph own conceptual structure.
- Curriculum artefacts own Learning Outcomes and prerequisites.
- Review records own approval.

The packet may summarize these records but cannot redefine them.

## Packet Identity and Metadata

The packet is keyed by the canonical Research Brief ID and packet version. Its
Markdown index uses the Supporting Document `Index` profile and records:

- supporting document ID;
- title and version;
- `status: Draft | Review | Stable | Deprecated | Archived`;
- Chapter and Research Brief IDs;
- target Outcome and prerequisite IDs;
- Knowledge Foundation snapshot version;
- graph snapshot version;
- owner roles;
- source, Evidence, Claim, and Concept IDs;
- generated and updated dates;
- validation report and review IDs;
- superseded packet version, when applicable.

No new `research-packet` document type or parallel knowledge identity is
introduced.

## Required Structure

`research-packet.md` uses the following H2 sections in order:

1. Overview
2. Learning Goals
3. Official Sources
4. Supporting Sources
5. Concept Coverage
6. Claim Coverage
7. Evidence Mapping
8. Terminology
9. Mental Models
10. Historical Context
11. Technical Details
12. Code References
13. Best Practices
14. Common Mistakes
15. Edge Cases
16. Real World Examples
17. Interview Notes
18. Exercise Ideas
19. Quiz Ideas
20. Lab Ideas
21. Animation Ideas
22. Further Reading
23. Review Notes
24. Approval
25. Version
26. Status

Sections must contain evidence-backed production guidance, not learner-facing
lesson prose.

## Section Contracts

### Overview

Declares Chapter scope, version, exclusions, target audience, language boundary,
research question, and Research Brief.

### Learning Goals

Lists canonical Outcome IDs and explains what research evidence is required for
each without changing Outcome wording.

### Official and Supporting Sources

Official Sources contain specifications, standards, primary documentation, and
peer-reviewed work. Supporting Sources contain authoritative secondary,
industry, historical, or community evidence with explicit use limits.

Each entry records Source ID, version, authority, locator, license, freshness,
and intended coverage.

### Concept, Claim, and Evidence Coverage

The packet provides explicit mappings:

```text
Outcome -> Concept -> Claim -> Evidence -> Source
```

Every ID must resolve to its canonical owner. Missing or non-approved material
is labeled and blocks production authorization when it affects scope.

### Terminology and Mental Models

Terminology records canonical names, aliases, first-use language, prohibited
ambiguities, and translation rules. Mental models state instructional value,
limits, and likely misconceptions.

### Context and Technical Detail

Historical Context is included only when it improves technical understanding.
Technical Details record version-specific behavior, invariants, trade-offs,
failure modes, and uncertainty. Code References cite canonical specifications
or runnable reference implementations without copying lesson code.

### Practice and Asset Ideas

Exercise, Quiz, Lab, Interview, and Animation ideas state target Outcome,
difficulty, observable behavior, required knowledge, and validation approach.
They are not final artefacts or answer keys.

### Review, Approval, Version, and Status

Review Notes link findings and resolutions. Approval lists Validation and Review
IDs for the exact packet version. Version explains SemVer impact. Status records
the canonical document lifecycle only.

## Validation Rules

- All required sections exist once and in order.
- Metadata and IDs resolve.
- Every target Outcome has Concept, Claim, Evidence, and Source coverage.
- Source authority, freshness, locator, and license are explicit.
- No unsupported material Claim appears.
- Contradictions and uncertainty are visible.
- Ideas are separated from final educational assets.
- Relative links resolve and Markdown lint passes.
- Validation and Review decisions name the exact packet version.

## Review and Approval

Technical and Educational Reviews use the mappings defined by the KOS Review
Process. The packet becomes `Stable` only after validation passes and required
decisions are `Approved`.

## Versioning

SemVer follows the KOS Knowledge Versioning Standard. A changed Outcome, packet
contract, or incompatible research interpretation is MAJOR; compatible coverage
expansion is MINOR; non-semantic correction is PATCH.

## Definition of Done

A Research Packet is complete when all 26 sections satisfy their contracts,
canonical references resolve, Outcome coverage is complete, risks and
contradictions are owned, validation passes, and Technical and Educational
Reviews approve the exact version.

## References

- [Research Engine](./research-engine.md)
- [KOS Research Pipeline](../knowledge-operating-system/03-research-pipeline.md)
- [KOS Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
- [KOS Review Process](../knowledge-operating-system/11-review-process.md)
- [KOS Versioning](../knowledge-operating-system/12-versioning.md)
- [Supporting Document Standard](../standards/governance/01-supporting-document-standard.md)
