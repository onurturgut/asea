---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-049"
supporting_document_type: "Compatibility Report"
title: "V01-C04 Research Collection"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "ASEA-SRC-000001"
generated_date: "2026-07-22"
language: "tr"
---

# V01-C04 Research Collection

## Purpose

Bu ham koleksiyon, lesson prose üretmeden önce algoritma, sözde kod, sözleşme,
trace ve sonlanma konularındaki kaynak bulgularını bir araya getirir.

## Source Inventory

| RC ID | Kaynak | Otorite | Tarih/durum | Lisans/erişim | Kullanım |
|---|---|---|---|---|---|
| `C04-RC-001` | NISTIR 8318, DADS | ABD ulusal standart kurumu | 2020 | Public citation | Algorithm terminology |
| `C04-RC-002` | NIST DADS online dictionary | NIST | Updated 2024 | Public web | Algorithm and termination lookup |
| `C04-RC-003` | ISO 5807:1985 | International Standard | Confirmed 2019 | Abstract public, standard restricted | Flowchart symbol boundary |
| `C04-RC-004` | ACM/IEEE-CS CS2023, Computing Foundations | Professional curriculum authority | 2025 web edition | Public web | Curriculum competency |
| `C04-RC-005` | ACM CCECC Computer Science I | Professional curriculum authority | Current web | Public web | Produce algorithms and trace execution |
| `C04-RC-006` | MIT 6.046J syllabus | University primary courseware | 2005 | OCW license | Describe algorithm + correctness argument |
| `C04-RC-007` | MIT 6.046J lecture notes | University primary notes | 2012 | OCW license | Invariant, correctness, termination |
| `C04-RC-008` | MIT 6.006 lecture 1 | University primary notes | 2020 | OCW license | Correctness and machine-independent reasoning |
| `C04-RC-009` | CMU 15-122 Contracts | University primary notes | Current archive | Educational access | Preconditions, postconditions, termination |
| `C04-RC-010` | CMU Hoare Logic notes | University primary notes | Course archive | Educational access | Partial/total correctness boundary |
| `C04-RC-011` | OpenStax Introduction to CS 4.2 | Institutional textbook | 2024 edition | CC BY-NC-SA 4.0 | Problem → algorithm → program workflow |
| `C04-RC-012` | OpenStax Introduction to CS 5.2 | Institutional textbook | 2024 edition | CC BY-NC-SA 4.0 | Algorithm representation and properties |
| `C04-RC-013` | Teach Computing: Tracing Algorithms | National Centre for Computing Education | Current 2025 unit | Reuse subject to site terms | Trace table purpose |
| `C04-RC-014` | NCCE Pedagogy Quick Read: Code Tracing | National Centre for Computing Education | 2021 | Public PDF | Prediction-first trace pedagogy |
| `C04-RC-015` | Teach Computing: Flowcharts and Pseudocode | National Centre for Computing Education | Current web | Course page | Representation and tracing |
| `C04-RC-016` | Computer Science Field Guide: Algorithms | University of Canterbury project | Current web | CC BY-NC-SA | Supporting pseudocode explanation |

## Raw Findings by Topic

### Algorithm

- NIST DADS treats algorithms as named, inspectable computational procedures and
  distinguishes them from data structures and archetypal problems.
- OpenStax places algorithm development between precise problem definition and
  program development.
- ACM curriculum guidance expects learners to produce algorithms for simple
  problems and trace execution, confirming that design and trace are distinct but
  connected skills.
- C04 should use a bounded definition: a precise, finite procedure for producing
  the required output from contract-valid inputs.
- Non-example: a goal statement such as “find the cheapest ticket” without steps.

### Pseudocode

- MIT course guidance accepts English and pseudocode for describing an algorithm,
  provided the reasoning is inspectable.
- Pseudocode is not governed by one universal syntax; different institutions use
  different conventions.
- Language independence does not permit ambiguity. Operations, decision
  conditions, state changes and termination must remain clear.
- Pseudocode cannot be executed directly unless a separate tool defines a dialect;
  this chapter treats it as a human review artefact.
- Formatting contract proposed for ASEA C04: uppercase structural keywords,
  indentation, one operation per line, explicit inputs/outputs and named stop
  conditions.

### Preconditions and postconditions

- CMU notes define a precondition as what must hold before correct execution and a
  postcondition as what the operation establishes on successful completion.
- A contract separates caller obligations from algorithm guarantees.
- If a precondition excludes an input, a trace for that input should record
  rejection or out-of-contract status rather than inventing normal behavior.
- Total correctness combines result correctness with termination; C04 teaches this
  as an intuition, not a formal proof system.

### Trace and dry run

- A trace records selected state values and outputs after relevant steps for one
  concrete input.
- NCCE uses trace tables to build program comprehension, reveal misconceptions and
  detect logic errors.
- Prediction should happen before execution or answer inspection.
- One successful trace is evidence for that path only; it is not proof for all
  possible inputs.
- Minimum C04 set: two normal cases and one boundary or invalid case.

### Termination

- A finite-looking pseudocode listing can still fail to terminate if progress is
  absent or the stopping condition is unreachable.
- Beginner termination argument: name the bounded quantity, show that every
  repetition moves it toward a bound, and show the stopping condition is reached.
- CMU distinguishes partial correctness from total correctness; a correct answer
  conditional on termination is insufficient if termination is required.
- NIST’s recursion termination entry concerns recursion specifically; C04 uses the
  broader canonical contract already owned by `ASEA-CLM-000019`.

### Correctness intuition

- Preconditions define covered inputs; postconditions define required results.
- Trace cases can falsify a claim by finding a counterexample, but a small set of
  traces cannot prove a universal claim.
- Invariant intuition is introduced only as “what remains true after each step”;
  formal loop invariant proof is deferred.
- Correctness, readability and efficiency are separate dimensions. Complexity is
  reserved for C23.

### Flowcharts

- ISO 5807 defines documentation symbols and conventions for program flowcharts.
- Flowcharts can clarify branch and repetition structure but become difficult to
  maintain when algorithms grow.
- The canonical assessment requires pseudocode and traces; flowchart is a
  supporting representation, not a replacement.

### AI-assisted algorithm work

- AI output must be handled as an untrusted proposal.
- Audit dimensions: contract preservation, missing input, invented rule, ambiguous
  operation, unreachable branch, failure to progress, wrong boundary output and
  mismatch between pseudocode and trace.
- The learner must create and version an independent algorithm before comparison.

## Coverage Matrix

| Target | Primary support | Secondary support | Production implication |
|---|---|---|---|
| `ASEA-CON-000016` Pseudocode | MIT, ACM | OpenStax, CS Field Guide | Precise but syntax-neutral notation |
| `ASEA-CON-000017` Pre/Postconditions | CMU 15-122, Hoare notes | MIT examples | Caller obligation vs guarantee |
| `ASEA-CON-000018` Algorithm Trace | NCCE tracing | ACM CCECC | Prediction-first state table |
| `ASEA-CON-000019` Termination | CMU, MIT | NIST DADS | Progress + bound + stop condition |
| `V01-LO006` | ACM CCECC, Blueprint | All above | Pseudocode + three traces + defense |

## Known Tensions

1. Bazı başlangıç kaynakları determinizmi her algoritmanın zorunlu özelliği gibi
   anlatır. C04 yalnız kendi deterministik örnekleri için bu sınırı kullanır.
2. Pseudocode syntax kaynaklar arasında farklıdır. ASEA bir yazım sözleşmesi
   önerir fakat bunu uluslararası standart olarak sunmaz.
3. Trace pedagojik olarak güçlüdür fakat formal proof değildir.
4. ISO standardının tam metni açık değildir; yalnızca ISO’nun herkese açık
   metadata ve abstract bilgisi kullanılır.

## Source URLs

1. NIST, [DADS NISTIR 8318](https://www.nist.gov/publications/dads-line-dictionary-algorithms-and-data-structures).
2. NIST, [Dictionary of Algorithms and Data Structures](https://xlinux.nist.gov/dads/).
3. ISO, [ISO 5807:1985](https://www.iso.org/standard/11955.html).
4. ACM/IEEE-CS, [CS2023 Computer Science Foundations](https://csed.acm.org/computer-science-foundations/).
5. ACM CCECC, [Computer Science I](https://ccecc.acm.org/guidance/software-engineering/courses/computer-science-i).
6. MIT OCW, [6.046J Syllabus](https://ocw.mit.edu/courses/6-046j-introduction-to-algorithms-sma-5503-fall-2005/pages/syllabus/).
7. MIT OCW, [6.046J Design and Analysis Notes](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2012/).
8. MIT OCW, [6.006 Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/).
9. CMU, [15-122 Principles of Imperative Computation](https://www.cs.cmu.edu/~15122/syllabus.shtml).
10. CMU, [Hoare Logic Notes](https://www.cs.cmu.edu/~aldrich/courses/654-sp08/notes/3-hoare-notes.pdf).
11. OpenStax, [Building C Programs](https://openstax.org/books/introduction-computer-science/pages/4-2-building-c-programs).
12. OpenStax, [Computer Levels of Abstraction](https://openstax.org/books/introduction-computer-science/pages/5-2-computer-levels-of-abstraction).
13. NCCE, [Tracing Algorithms](https://teachcomputing.org/curriculum/key-stage-4/algorithms-part-1/tracing-algorithms).
14. NCCE, [Code Tracing Quick Read](https://media.teachcomputing.org/QR_14_Code_tracing_8eb7c3b366.pdf).
15. NCCE, [Flowcharts and Pseudocode](https://teachcomputing.org/courses/CO420/representing-algorithms-using-flowcharts-and-pseudocode).
16. Computer Science Field Guide, [Algorithms](https://www.csfieldguide.org.nz/en/chapters/algorithms/whats-the-big-picture/).

## Collection Decision

Kapsam, `V01-LO006` için yeterlidir. Kaynaklar research packet içinde
otoritelerine göre ayrılmalı; formal verification ayrıntıları ve complexity
analizi lesson kapsamına alınmamalıdır.

## References

- [Source Strategy](./source-strategy.md)
- [Chapter Blueprint](../../../chapter-blueprints/04-algorithms-pseudocode-and-tracing.md)
