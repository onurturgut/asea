---
document_type: "standard"
standard_id: "ASEA-STD-KOS-018"
title: "ASEA Knowledge Operating System Contributor Guide"
version: "1.0.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Operating System Contributor Guide

## Purpose

This guide provides the minimum safe workflow for contributors researching, designing, producing, reviewing, or maintaining ASEA knowledge.

## Before Starting

Read the [KOS Vision](./01-vision.md), relevant KOS standards, repository governance, and the canonical Volume and Chapter specifications. Confirm the issue or work item identifies scope, owner, expected records, and prohibited changes.

## Contribution Workflow

1. Create or accept an approved research brief.
2. Register sources under [Source Priority](./04-source-priority.md).
3. Extract evidence, claims, and concepts using [Knowledge Extraction](./06-knowledge-extraction.md).
4. Obtain independent validation under [Source Validation](./05-source-validation.md).
5. Propose graph and curriculum mappings without editing canonical outcomes directly.
6. Prepare and approve a Chapter Production Packet.
7. Produce only the authorized content and assets.
8. Run validation and request the required reviews.
9. Resolve findings with evidence.
10. Publish only through the release workflow; monitor update triggers afterward.

## Contributor Checklist

- IDs are valid, unique, and immutable.
- Front matter matches the registered document schema.
- Technical claims have approved evidence and precise scope.
- Source records use canonical URLs and record usage rights.
- No copied prose, fabricated citation, secret, or personal data is present.
- Internal links are relative and resolve.
- Code and diagrams reproduce in the declared environment.
- Accessibility requirements and text alternatives are present.
- Canonical learning outcomes, chapter IDs, and standards are unchanged unless separately authorized.
- Versions and changelog impact are correct.

## Pull Request Scope

Keep research records, graph changes, content, generated assets, and migrations reviewable. Large changes may be separated by pipeline gate, but references must resolve in the target branch. Generated output is never submitted without its source and manifest.

## AI-Assisted Contributions

Follow the [AI Workflow](./15-ai-workflow.md). Disclose material AI assistance in the work record, independently verify every claim and citation, test generated code, and never submit model output as evidence.

## Review Requests

State the pipeline stage, exact scope/version, validation commands, known risks, unresolved questions, source or graph changes, and reviewers required. Do not request Final Review while earlier required decisions are missing.

## Reporting Problems

Correctness, security, licensing, accessibility, or source-withdrawal issues create an Update Request. Do not silently patch a Stable artifact or delete history. Use the repository security process for sensitive vulnerabilities.

## Definition of Done

A contribution is done when its authorized scope is complete, validation passes, findings are resolved, provenance and history are intact, required approvals exist, and the contributor reports all created and modified files without committing or pushing unless explicitly requested.

## References

- [Research Pipeline](./03-research-pipeline.md)
- [Review Process](./11-review-process.md)
- [Repository Contribution Guide](../../CONTRIBUTING.md)
- [Repository Standard v2.0](../standards/repository-standard-v2.md)
