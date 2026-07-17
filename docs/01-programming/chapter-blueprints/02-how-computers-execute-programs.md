---
document_type: "blueprint"
blueprint_id: "V01-C02-BP01"
blueprint_type: "Chapter"
scope_id: "V01-C02"
title: "Chapter 02 Blueprint — How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
freeze_status: "Unfrozen"
owner_role: "Curriculum Architect"
prerequisites:
  - "V01-C01"
learning_outcomes:
  - "V01-LO003"
  - "V01-LO004"
planned_artifacts:
  - "V01-C02"
  - "V01-C02-L01"
  - "V01-C02-EX01"
  - "V01-C02-CH01"
  - "V01-C02-QZ01"
  - "V01-C02-IV01"
  - "V01-C02-AS01"
review_ids: []
---

# Chapter 02 Blueprint — How Computers Execute Programs — Yürütme Modeli

## Purpose

### Chapter Metadata

| Field | Value |
|---|---|
| Chapter ID | `V01-C02` |
| Module | `V01-M01` — Computational Thinking |
| Difficulty | Beginner |
| Estimated Study Time | 4-5 hours |
| Primary Lab | `V01-C02-L01` — Trace a Tiny Machine |
| Assessment | `V01-C02-AS01` |
| Next Chapter | `V01-C03` |

### Chapter Purpose

Talimat, bellek, processor, runtime, input ve output ilişkisi için doğru başlangıç modeli kurmak.

### Why This Chapter Exists

This Chapter closes the gap between `V01-C01` evidence and the ability to talimat, bellek, processor, runtime, input ve output ilişkisi için doğru başlangıç modeli kurmak. It gives later Chapters a named, traceable capability instead of relying on assumed knowledge.

## Scope

### In Scope

- Plan the mental models, examples, practice, and assessment needed for: CPU abstraction, memory, instruction sequence, runtime, state..
- Introduce supporting concepts only where they explain a core mechanism: Source code, interpreter, compiler, process, storage..
- Preserve the language-independent curriculum; JavaScript may illustrate behavior but may not define the outcome.
- Produce Chapter content that follows the 15 mandatory H2 headings in Chapter Standard v2.0.

### Out of Scope

- Writing the Chapter lesson, complete code, Lab instructions, Quiz questions, Project specification, or Capstone implementation.
- Teaching concepts assigned to later Chapters or technologies excluded by the Volume Blueprint.
- Changing Chapter order, outcomes, project scope, or dependency gates.

### Knowledge Inputs

- `V01-C01`: required evidence defined by the dependency map.
- Volume 00 study, evidence, and reflection discipline.
- Terminology already established by prerequisite Chapters.

### Knowledge Outputs

- **V01-LO003:** Basit bir talimat dizisinin yürütmesini trace etmek.
- **V01-LO004:** source code ile running program farkını açıklamak..
- A reviewable plan connecting concepts, examples, practice, assessment, and project evidence.

## Audience and Level

- **Audience:** Learners who have passed the listed prerequisites and are following Volume 01 in sequence.
- **Entry level:** Beginner; no unstated framework or infrastructure experience.
- **Exit behavior:** The learner can basit bir talimat dizisinin yürütmesini trace etmek; source code ile running program farkını açıklamak..
- **Teaching posture:** Concept first, progressively reduced guidance, explicit trace and reflection.

## Prerequisites

### Required Evidence

- `V01-C01` must be demonstrated through its assessment gate before this Chapter begins.

### Diagnostic Check

Plan a short retrieval task that asks the learner to reproduce the prerequisite evidence without notes. A weak result routes the learner back to the linked Chapter or module gate; it does not silently lower this Chapter's scope.

## Learning Outcomes

### Outcome Mapping

- **V01-LO003:** Basit bir talimat dizisinin yürütmesini trace etmek.
- **V01-LO004:** source code ile running program farkını açıklamak..

### Legacy Source Mapping

- `V01-LO003` maps to the current Volume 01 source identifier `LO-03`.
- `V01-LO004` maps to the current Volume 01 source identifier `LO-04`.

The v2 identifiers are normative inside this Blueprint. The legacy mapping remains visible until the Volume-level learning-outcome and traceability files are migrated.

## Content Map

### Core Concepts

- **CPU abstraction:** Plan definition, boundary, mechanism, trace, and one transfer case.
- **memory:** Plan definition, boundary, mechanism, trace, and one transfer case.
- **instruction sequence:** Plan definition, boundary, mechanism, trace, and one transfer case.
- **runtime:** Plan definition, boundary, mechanism, trace, and one transfer case.
- **state.:** Plan definition, boundary, mechanism, trace, and one transfer case.

### Supporting Concepts

- Source code: introduce only where it clarifies a core concept or engineering decision.
- interpreter: introduce only where it clarifies a core concept or engineering decision.
- compiler: introduce only where it clarifies a core concept or engineering decision.
- process: introduce only where it clarifies a core concept or engineering decision.
- storage.: introduce only where it clarifies a core concept or engineering decision.

### Concept Dependency

- Begin with the prerequisite evidence and make the new conceptual gap explicit.
- Establish CPU abstraction and memory before introducing instruction sequence, runtime, state..
- Use supporting concepts after the learner can predict the core behavior.
- End with a transfer task that connects the Chapter capability to `V01-C03`.

### Terminology

- **CPU abstraction:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **memory:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **instruction sequence:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **runtime:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **state.:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **Source code:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **interpreter:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **compiler:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **process:** Plan the first-use bilingual definition, one non-example, and consistent later usage.
- **storage.:** Plan the first-use bilingual definition, one non-example, and consistent later usage.

### Detailed Outline

1. Problem context and prior knowledge activation
1.1 Observable need for the Chapter capability
1.1.1 Contrast a successful and failed scenario without presenting the final solution
1.2 Scope and vocabulary boundary
1.2.1 Connect prerequisite evidence to the first core concept
2. CPU abstraction mental model
2.1 Definition, purpose, and boundary
2.1.1 Contrast CPU abstraction with the nearest related concept and identify its observable behavior
2.2 Mechanism and representation
2.2.1 Trace CPU abstraction through one normal, one boundary, and one failure-oriented case
3. memory mental model
3.1 Definition, purpose, and boundary
3.1.1 Contrast memory with the nearest related concept and identify its observable behavior
3.2 Mechanism and representation
3.2.1 Trace memory through one normal, one boundary, and one failure-oriented case
4. instruction sequence mental model
4.1 Definition, purpose, and boundary
4.1.1 Contrast instruction sequence with the nearest related concept and identify its observable behavior
4.2 Mechanism and representation
4.2.1 Trace instruction sequence through one normal, one boundary, and one failure-oriented case
5. runtime mental model
5.1 Definition, purpose, and boundary
5.1.1 Contrast runtime with the nearest related concept and identify its observable behavior
5.2 Mechanism and representation
5.2.1 Trace runtime through one normal, one boundary, and one failure-oriented case
6. state. mental model
6.1 Definition, purpose, and boundary
6.1.1 Contrast state. with the nearest related concept and identify its observable behavior
6.2 Mechanism and representation
6.2.1 Trace state. through one normal, one boundary, and one failure-oriented case
7. Engineering application and trade-offs
7.1 Apply the concept to a bounded program decision
7.1.1 Compare correctness, simplicity, readability, and change cost where relevant
7.2 Failure and diagnostic reasoning
7.2.1 Connect each common mistake to a symptom, cause, and verification step
8. Guided-to-independent practice
8.1 Worked example with fading guidance
8.1.1 Prediction, execution trace, comparison, and explanation checkpoints
8.2 Independent exercise and challenge
8.2.1 Require measurable evidence aligned with V01-LO003, V01-LO004
9. Assessment and reflection
9.1 Quiz, open-ended, Lab, and interview evidence
9.1.1 Apply passing criteria and record outcome-level feedback
9.2 Chapter synthesis and forward dependency
9.2.1 Connect retained knowledge to V01-C03

### Planned Diagrams

| Diagram Name | Purpose | Diagram Type | Concepts Covered |
|---|---|---|---|
| How Computers Execute Programs Concept Boundary | Show the Chapter's main concepts and exclusions | Concept map | CPU abstraction, memory, instruction sequence |
| CPU abstraction Behavior Flow | Make state, decision, or transformation order visible | Flow diagram | CPU abstraction, memory, instruction sequence, runtime |
| Dependency to Evidence | Connect prerequisite knowledge to assessment evidence | Traceability flow | V01-C01 → V01-LO003, V01-LO004 |

No Mermaid source is produced at Blueprint stage.

### Planned Tables

| Table | Purpose | Planned Columns |
|---|---|---|
| Concept Comparison | Separate related terms and non-examples | Concept, definition, boundary, example, non-example |
| Behavior Trace | Make intermediate reasoning inspectable | Step, input/state, operation, output/state, invariant |
| Failure Analysis | Link misconceptions to diagnosis | Symptom, likely cause, evidence, correction, prevention |

### Planned Code Examples

| Example ID | Purpose | Concept | Difficulty | Expected Output | Common Failure |
|---|---|---|---|---|---|
| `V01-C02-CODE01` | Demonstrate the smallest observable behavior | CPU abstraction | Guided | Deterministic result with an explained trace | Bilgisayarın niyeti anladığını varsaymak |
| `V01-C02-CODE02` | Expose a boundary or invalid case | memory | Supported | Controlled boundary behavior and diagnostic evidence | memory ile persistent storage'ı eşitlemek. |
| `V01-C02-CODE03` | Compare two valid designs | state. | Transfer | Same required behavior with a justified trade-off | Choosing by syntax preference without evidence |

Only example contracts are planned; no executable code is included.

### Planned Worked Examples

- **Prediction-first example:** Learner predicts the result, then compares it with an explicit trace.
- **Repair example:** Learner identifies the smallest incorrect assumption behind “Bilgisayarın niyeti anladığını varsaymak”.
- **Transfer example:** Learner applies the Chapter model to a new domain and explains which constraints changed.

### Common Mistakes

- Plan a symptom → cause → impact → diagnosis sequence for: Bilgisayarın niyeti anladığını varsaymak.
- Plan a symptom → cause → impact → diagnosis sequence for: memory ile persistent storage'ı eşitlemek..

### Common Misconceptions

- Knowing the syntax is equivalent to demonstrating `V01-LO003`.
- One successful example proves correctness across boundary and invalid cases.
- The Chapter's supporting concepts can be used without the prerequisite mental model.

### Best Practices

- Plan rationale, boundary, and counterexample for: Yürütmeyi adım adım izlemek.
- Plan rationale, boundary, and counterexample for: soyut modelin sınırlarını belirtmek..

### Engineering Perspective

Plan the Chapter discussion around correctness, explicit contracts, inspectable evidence, simplicity, and change cost. The final discussion must show when the recommended practice is appropriate and when another trade-off is defensible.

## Practice and Assessment Map

### Planned Lab

- **Lab ID:** `V01-C02-L01`
- **Objectives:** Basitleştirilmiş instruction ve memory modelini adım adım izlemek.
- **Scenario:** Başlangıç state'ini kaydetmek; her instruction sonrası memory state üretmek; final output'u gerekçelendirmek.
- **Skills Measured:** Chapter 01 kavramları ve sıralı talimat okuma.
- **Estimated Time:** 60-75 minutes
- **Source contract:** [Laboratory Blueprint](../labs.md#lab-02---trace-a-tiny-machine)

The Lab file is not created in this task.

### Planned Independent Exercise

- **Exercise ID:** `V01-C02-EX01`
- **Objective:** Produce one inspectable artifact that demonstrates V01-LO003 and V01-LO004 before the Lab.
- **Evidence:** A trace, decision record, model, or test set appropriate to CPU abstraction.
- **Constraint:** 20-30 minutes, one normal case, one boundary case, and a self-check against the Chapter contract.

### Planned Challenge

- **Challenge ID:** `V01-C02-CH01`
- **Challenge:** Predict the Final Machine State.
- **Purpose:** Transfer the Chapter model to a less guided case without adding new technology.
- **Deliverable:** Decision, artifact, and short evidence-based justification.
- **Evaluation focus:** Correctness, use of prerequisites, boundary handling, and explanation.

### Planned Quiz

- **Quiz ID:** `V01-C02-QZ01`
- **Scope:** CPU abstraction, memory, instruction sequence, runtime, state.; common mistakes; prerequisite-to-output reasoning.
- **Learning Outcomes:** `V01-LO003`, `V01-LO004`
- **Question Types:** Concept distinction, trace/prediction, failure diagnosis, and short scenario selection.
- **Question Count:** 8
- **Difficulty Distribution:** 50% foundational, 35% applied trace/analysis, 15% transfer.
- **Passing Score:** 75%.

No Quiz question or answer key is produced in this task.

### Planned Interview Questions

- **Interview ID:** `V01-C02-IV01`
- **Primary focus:** Source code çalıştığında hangi aşamalardan geçer?
- **Evidence sought:** Accurate terminology, explicit assumptions, stepwise reasoning, and recognition of model limits.
- **Follow-up plan:** Ask for a counterexample, a boundary case, and one alternative design; do not script final questions at Blueprint stage.

### Planned Reflection Questions

- Plan one prompt about the learner's most consequential incorrect assumption.
- Plan one prompt about evidence that changed the learner's decision.
- Plan one prompt requiring a dated next action for retaining CPU abstraction.
- Reflection supports learning but is not the sole evidence for any outcome.

### Assessment Mapping

| Artefact | ID | Outcomes | Evidence |
|---|---|---|---|
| Chapter Assessment | `V01-C02-AS01` | `V01-LO003`, `V01-LO004` | Quiz, open-ended response, Lab, and reflection |
| Quiz | `V01-C02-QZ01` | `V01-LO003`, `V01-LO004` | Concept and trace evidence |
| Lab | `V01-C02-L01` | `V01-LO003`, `V01-LO004` | Applied artifact and explanation |
| Challenge | `V01-C02-CH01` | `V01-LO003`, `V01-LO004` | Independent transfer evidence |
| Interview | `V01-C02-IV01` | `V01-LO003`, `V01-LO004` | Reasoning and communication evidence |

### Project Relationship

- **Mini Project:** V01-P01 — Instruction Simulator; this Chapter supplies the talimat, bellek, processor, runtime, input ve output ilişkisi için doğru başlangıç modeli kurmak capability.
- **Capstone:** V01-CP01 — Reliable Command-Line Problem Solver; contribution: execution-state reasoning for predicting command-line program behavior.

## Dependencies

### Incoming Dependencies

- `V01-C01` supplies required knowledge or assessed evidence.

### Internal Sequence

- Concept definition precedes mechanism.
- Mechanism precedes worked trace.
- Worked trace precedes independent practice.
- Practice precedes challenge and assessment.
- Reflection follows feedback and identifies the next retrieval action.

### Outgoing Dependency

- `V01-C02` supplies assessed evidence to `V01-C03` and later dependent Chapters.

## Traceability

| Source Outcome | v2 Outcome | Chapter | Lab | Assessment | Project |
|---|---|---|---|---|---|
| `LO-03` | `V01-LO003` | `V01-C02` | `V01-C02-L01` | `V01-C02-AS01` | `V01-P01` |
| `LO-04` | `V01-LO004` | `V01-C02` | `V01-C02-L01` | `V01-C02-AS01` | `V01-P01` |

This local trace is derived from `learning-outcomes.md`, `chapter-map.md`, `labs.md`, and `projects.md`. It remains Draft until a canonical Volume-level `traceability-matrix.md` adopts the v2 identifiers.

## Acceptance Criteria

### Definition of Done

- Front Matter matches the v2 Chapter Blueprint schema and all IDs are unique.
- The 13 mandatory Blueprint H2 sections exist in the required order.
- Every requested planning topic is represented at H3 level without lesson prose or complete code.
- The detailed outline has at least three visible levels and supports a 25-40 page Chapter.
- Outcome, prerequisite, Lab, assessment, project, and next-Chapter mappings match the source architecture.
- Planned examples state purpose, concept, difficulty, expected output, and common failure.
- Content production does not begin until review findings are closed and the Blueprint is Frozen.

### Review Evidence Required

- Curriculum review of outcome and assessment alignment.
- Technical review of concept boundaries and example feasibility.
- Repository review of metadata, names, links, and IDs.
- Final review of source migrations and freeze readiness.

## Risks and Constraints

- Volume 01 source documents still use v1 metadata and legacy `LO-XX` identifiers; this Blueprint records but does not modify that migration boundary.
- The requested `traceability-matrix.md`, `blueprint-decisions.md`, and `blueprint-freeze.md` inputs do not currently exist.
- The current Master Blueprint Review has a `Changes Required` decision created before v2 standards resolved its governing conflicts.
- No Chapter, Lab, Quiz, Project, or Capstone content may be inferred from this plan before formal review and freeze.
- JavaScript may be used later only as a reference language; no framework, persistence, network, database, deployment, or other untaught technology may become mandatory.

## Review and Freeze

- **Current status:** Draft / Unfrozen.
- **Review IDs:** None assigned.
- **Freeze condition:** Close the source migration and governance risks, validate the canonical traceability matrix, and record approved Technical, Content, Repository, and Final Review decisions.
- **Change control:** Scope changes after freeze require a new Blueprint MINOR or MAJOR version and a new review cycle.

## References

- [Volume 01 README](../README.md)
- [Volume Blueprint](../volume-blueprint.md)
- [Chapter Map](../chapter-map.md)
- [Module Map](../module-map.md)
- [Dependency Map](../dependency-map.md)
- [Learning Outcomes](../learning-outcomes.md)
- [Laboratory Blueprint](../labs.md)
- [Project Blueprint](../projects.md)
- [Assessment System](../assessment.md)
- [Study Plans](../study-plan.md)
- [Reference Catalog](../references.md)
- [Glossary](../glossary.md)
- [Chapter Standard v2.0](../../standards/chapter-standard-v2.md)
- [Volume Standard v2.0](../../standards/volume-standard-v2.md)
- [Curriculum Standard v2.0](../../standards/curriculum-standard-v2.md)
- [Repository Standard v2.0](../../standards/repository-standard-v2.md)

