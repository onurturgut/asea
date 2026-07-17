---
document_type: "standard"
standard_id: "ASEA-STD-KOS-010"
title: "ASEA Content Asset Standard"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Content Asset Standard

## Purpose

This standard defines reproducible, accessible, traceable assets that support approved chapter learning objectives.

## Supported Asset Types

Markdown, SVG, Mermaid, flowcharts, mind maps, timelines, interactive playgrounds, animations, code samples, labs, quizzes, flashcards, glossary entries, cheat sheets, AI mentor prompts, mini projects, and assessment rubrics are supported.

## Asset Manifest

Every asset has a unique asset ID, type, version, chapter and outcome IDs, concept and claim IDs, source file, generated outputs, toolchain/version, license, owner, accessibility requirements, validation commands, checksum, and status. Generated output records its authoritative source and generation date.

KOS-specific content assets use `ASEA-AST-{NNNNNN}`. Their manifests use
`ASEA-AMF-{NNNNNN}`. Existing Lab, Exercise, Challenge, Quiz, Assessment,
Project, Capstone, Chapter, and Learning Outcome artefacts retain their canonical
Standards v2 IDs and MUST NOT receive duplicate KOS identities.

## Type Requirements

- **Markdown:** valid hierarchy, relative links, original prose, and traceable claims.
- **SVG and diagrams:** meaningful title/description, scalable view box, readable contrast, and text equivalent.
- **Mermaid:** valid fenced source retained as authoritative; exported SVG is derived.
- **Interactive assets:** keyboard access, deterministic reset, fallback explanation, error states, and no hidden telemetry.
- **Animations:** controls, pause support, reduced-motion alternative, and explanatory transcript.
- **Code samples:** pinned environment, complete run command, expected result, explanation, tests where appropriate, and safe defaults.
- **Labs and projects:** objective, requirements, tasks, deliverables, evaluation, and cleanup.
- **Quizzes and flashcards:** outcome mapping, difficulty, rationale, unambiguous scoring, and answer separation.
- **AI prompts:** intended capability, independent-attempt rule, privacy warning, verification steps, and model-independent wording.
- **Rubrics:** observable criteria, performance levels, evidence, weighting, and reassessment policy.

## File and Generation Rules

Authoritative editable sources are version-controlled. Binary derivatives are stored only when repository policy requires them. Generation is deterministic where practical and records commands and tool versions. Manual edits to generated files are forbidden.

## Accessibility Gate

Assets comply with applicable WCAG 2.2 requirements. Automated checks supplement, but do not replace, keyboard, screen-reader, contrast, zoom, and comprehension review.

## Security and Privacy

Assets do not embed secrets, learner personal data, unsafe executable instructions, unlicensed material, or unreviewed remote dependencies. Interactive code runs with documented isolation and resource limits.

## Validation

Validate schema, IDs, links, checksums, rendering, code execution, expected outputs, diagram compilation, accessibility, licensing, and objective alignment. Broken or stale assets block publication of the affected chapter.

## Definition of Done

An asset is done when its source and manifest are committed together, outputs reproduce, accessibility and security checks pass, traceability resolves, and the assigned reviewers approve it.

## References

### Internal Standards

- [Chapter Specification](./09-chapter-specification.md)
- [Validation Standard](../standards/governance/08-validation-standard.md)

### Evidence Sources

- World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG)
  2.2*, W3C Recommendation, 2023:
  <https://www.w3.org/TR/WCAG22/>
