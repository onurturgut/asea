---
document_type: "standard"
standard_id: "ASEA-STD-KOS-004"
title: "ASEA Source Priority Standard"
version: "1.0.1"
status: "Review"
supersedes: []
---

# ASEA Source Priority Standard

## Purpose

This standard defines which sources may support which kinds of knowledge and how disagreements are escalated.

## Source Hierarchy

### Tier 1 — Academic

ACM Curriculum, IEEE, SWEBOK, MIT, Stanford, Berkeley, Harvard, Carnegie Mellon University, Oxford, and Cambridge. Use peer-reviewed research, published curricula, standards, and official institutional course materials.

### Tier 2 — Official Documentation

MDN, ECMAScript, WHATWG, W3C, React, Next.js, Node.js, TypeScript Handbook, Docker, Kubernetes, and PostgreSQL documentation. Use the versioned documentation that governs the technology in scope.

### Tier 3 — Industry

Google Engineering, Netflix Tech Blog, Stripe Engineering, GitHub Engineering, Cloudflare, Uber Engineering, Shopify Engineering, Airbnb Engineering, Microsoft Engineering, and Vercel. Use for production practices, operational trade-offs, and documented case studies.

### Tier 4 — Community

Stack Overflow, GitHub Discussions, GitHub Issues, Reddit, Hacker News, and Dev.to. Use for discovery, recurring misconceptions, user experience, and candidate failure modes—not as sole authority for technical claims.

## Selection Rules

- Prefer the original publisher, current version, stable URL, and narrowest directly relevant source.
- Standards and normative specifications govern definitions; official implementation documentation governs supported behavior.
- Vendor claims about their own systems require corroboration before being generalized.
- Educational prestige does not replace evidence quality or relevance.
- Search snippets, AI output, aggregators, copied tutorials, and unattributed summaries are not evidence.
- A source’s tier does not guarantee correctness; every source is validated.

## Minimum Evidence Policy

Normative behavior requires at least one current Tier 1 or Tier 2 source. Material engineering recommendations require authoritative grounding plus independent evidence or a clearly labeled trade-off analysis. Industry case studies require the original company publication and must not be generalized beyond its stated context. Tier 4 observations require corroboration before appearing as facts.

## Conflict Precedence

When sources conflict, apply:

1. applicable current standard or specification;
2. current official documentation for the exact version;
3. reproducible primary evidence;
4. independently corroborated industry evidence;
5. community reports.

Precedence does not silently resolve a contradiction. The contradiction remains recorded with versions, scopes, and reviewer rationale.

## Freshness Classes

| Class | Examples | Default review interval |
|---|---|---|
| Fast | Framework APIs, cloud services, AI tooling | 90 days |
| Moderate | Languages, runtimes, databases | 180 days |
| Slow | Stable standards, foundational algorithms | 365 days |
| Historical | Historical context | Review on factual challenge |

The validator may shorten an interval. A stale record is not automatically false, but cannot support a Stable volatile claim until reviewed.

## Source Record Requirements

Record publisher, author when known, title, canonical URL/DOI, source type, tier, version, publication date, access date, language, license/usage note, freshness class, archive/checksum, and verification owner.

## Definition of Done

Source selection is complete when scope coverage is documented, primary sources are preferred, evidence is sufficiently independent, conflicts are registered, and every source record is reproducible and current for its claim.

## References

### Internal Standards

- [Source Validation](./05-source-validation.md)

### External References

- Institute of Electrical and Electronics Engineers, *IEEE Standards
  Association*, accessed 2026-07-17:
  <https://standards.ieee.org/>
- WHATWG, *Standards*, living standards index, accessed 2026-07-17:
  <https://spec.whatwg.org/>
- Mozilla, *MDN Web Docs*, accessed 2026-07-17:
  <https://developer.mozilla.org/>

### Evidence Sources

- Ecma International, *ECMAScript Language Specification (ECMA-262)*, living
  specification, accessed 2026-07-17:
  <https://tc39.es/ecma262/>
