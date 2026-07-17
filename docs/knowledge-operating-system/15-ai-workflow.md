---
document_type: "standard"
standard_id: "ASEA-STD-KOS-015"
title: "ASEA AI-Assisted Knowledge Workflow"
version: "1.0.1"
status: "Review"
supersedes: []
---

# ASEA AI-Assisted Knowledge Workflow

## Purpose

This standard defines where AI may assist KOS work and establishes human, provenance, privacy, and verification controls.

## Permitted Uses

AI may propose search terms, classify verified sources, suggest extraction candidates, detect possible contradictions, draft graph-edge candidates, transform an approved specification into a draft, propose tests, check consistency, and generate candidate accessibility descriptions. Outputs remain untrusted until verified.

## Prohibited Uses

AI MUST NOT:

- invent, repair, or guess citations;
- serve as an evidence source;
- promote records or approve reviews;
- resolve contradictions without human rationale;
- change canonical IDs, outcomes, or standards autonomously;
- ingest secrets, private learner data, or restricted sources;
- reproduce copyrighted source text beyond authorized use;
- conceal AI involvement in an assessed learner artifact where disclosure is required.

## Human-Controlled Workflow

```text
Approved input set → AI task contract → Candidate output
→ Source-by-source verification → Tests and comparison
→ Human revision → Reviewer decision → Provenance log
```

The task contract pins model/tool identifier when available, date, prompt or instruction version, input record IDs, expected schema, prohibited behavior, and acceptance tests. Model output is stored only when retention and licensing policy permit.

## Verification by Activity

- Extracted statements are checked against exact source locators.
- Citations are resolved independently.
- Code is reviewed, executed, tested, and security-scanned as applicable.
- Graph candidates pass ID, semantic, and cycle checks.
- Draft content is checked claim by claim against the CPP.
- Translations receive terminology and meaning review.
- Visual descriptions are checked against the actual visual.

## Learner-Facing AI Design

Activities require a learner attempt before comparison, ask the learner to challenge the result, provide verification methods rather than answers, avoid model-specific dependency, and assess the learner’s reasoning. Prompt injection or unsafe generated code is treated as a realistic risk.

## Privacy and Security

Use the minimum data required. Record provider, retention setting, data classification, and approval where external processing occurs. Sensitive inputs require an authorized environment; otherwise AI assistance is not used.

## Failure Handling

Unsupported claims, citation fabrication, leakage, biased output, non-reproducibility, or policy breach creates a finding and invalidates affected output. Repeated failures trigger suspension of the workflow until controls are reviewed.

## Definition of Done

AI-assisted work is done when its inputs and tool context are logged, every output is independently verified, reviewers—not AI—own decisions, data handling is compliant, and the final artifact is reproducible without treating generated text as evidence.

## References

### Internal Standards

- [Knowledge Standards](./02-knowledge-standards.md)
- [Review Process](./11-review-process.md)

### Evidence Sources

- National Institute of Standards and Technology, *Artificial Intelligence Risk
  Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023:
  <https://doi.org/10.6028/NIST.AI.100-1>
