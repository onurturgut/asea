---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-003"
supporting_document_type: "Index"
title: "Volume 01 Concept Candidate Registry"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-CMAP-001"
  - "V01-SD-LO-001"
  - "V01-SD-ASMT-001"
  - "ASEA-STD-KOS-002"
derived_from:
  - "V01-BP01"
  - "V01-SD-CMAP-001"
  - "V01-SD-LO-001"
  - "V01-SD-ASMT-001"
---

# Volume 01 Concept Candidate Registry

## Purpose

This registry provides the complete human-readable concept inventory extracted
from the frozen Volume 01 architecture. It normalizes repeated terminology,
allocates existing KOS Concept IDs, and records curriculum mappings without
creating Knowledge Graph edges.

## Scope

The inventory covers all 28 Chapters, seven Modules, 46 Learning Outcomes,
28 Chapter Assessments, 28 Labs, six Mini Projects, and one Capstone in
`V01-BP01` version `1.1.0`.

## Ownership

- **Document authority:** Derived candidate inventory.
- **Atomic Concept authority:** [`knowledge/registry/concepts/`](../../knowledge/registry/concepts/).
- **Owner:** Knowledge Architect.
- **Existing Approved records:** 6.
- **New Candidate allocations:** 95.
- **Graph status:** Not created by this sprint.

## Content

The three tables below form one joined record set keyed by Concept ID. Together
they provide every required Concept field.

### Concept Semantics

| Concept ID | Canonical Name | Aliases | Definition | Category | Subcategory | Difficulty |
| --- | --- | --- | --- | --- | --- | --- |
| `ASEA-CON-000001` | Source Code and Running Program | source code; program representation; running program; execution | Source code is a human-authored program representation; a running program is the dynamic execution of a translated or interpreted representation within an execution environment. | Execution Model | Runtime Model | Beginner |
| `ASEA-CON-000002` | Program Translation | compiler; interpreter; just-in-time compilation; intermediate representation | Program translation is the implementation-dependent transformation or interpretation that connects source representation to executable behavior. | Execution Model | Runtime Model | Beginner |
| `ASEA-CON-000003` | Program State | state; state transition; trace; initial state | Program state is the information an execution model must retain at a particular step to determine permitted next behavior. | Execution Model | Runtime Model | Beginner |
| `ASEA-CON-000004` | Instruction Sequence and Control Flow | instruction sequence; next instruction; control flow | An instruction sequence is an ordered representation whose next executed instruction is determined by the execution model and explicit control-flow rules. | Execution Model | Runtime Model | Beginner |
| `ASEA-CON-000005` | Execution Memory | memory; address; load; store | Execution memory is the addressable or named state exposed by a selected machine model for instructions to read and modify. | Execution Model | Memory | Beginner |
| `ASEA-CON-000006` | CPU Abstraction | central processing unit; instruction set architecture; architectural state; implementation | A CPU abstraction is a deliberately simplified architectural model that exposes instructions, selected state, and state-transition rules while hiding implementation detail. | Execution Model | Processor Model | Beginner |
| `ASEA-CON-000007` | Program | software program | A program is a finite representation of instructions and data intended to produce defined behavior when executed by a compatible computing system. | Programming Fundamentals | Program Model | Beginner |
| `ASEA-CON-000008` | Programming | program construction; software programming | Programming is the engineering activity of specifying, implementing, verifying, and maintaining executable solutions to defined problems. | Programming Fundamentals | Engineering Activity | Beginner |
| `ASEA-CON-000009` | Instruction | program instruction; executable step | An instruction is an explicitly represented operation whose permitted effect is defined by an execution model. | Programming Fundamentals | Program Model | Beginner |
| `ASEA-CON-000010` | Computation | computational process | Computation is the rule-governed transformation of inputs and state into outputs or new state. | Programming Fundamentals | Computation | Beginner |
| `ASEA-CON-000011` | Algorithm | solution procedure; algorithmic procedure | An algorithm is a finite and unambiguous procedure that transforms valid inputs into specified outputs and terminates under its stated conditions. | Algorithms | Algorithm Foundations | Beginner |
| `ASEA-CON-000012` | Problem Definition and Requirements | problem statement; requirements specification | Problem definition establishes the required outcome, stakeholders, inputs, outputs, constraints, and acceptance boundaries before a solution is designed. | Problem Solving | Problem Framing | Beginner |
| `ASEA-CON-000013` | Constraint and Assumption | design constraint; working assumption | A constraint limits an acceptable solution, while an assumption is a condition treated as true until evidence confirms or invalidates it. | Problem Solving | Problem Framing | Beginner |
| `ASEA-CON-000014` | Edge Case | boundary scenario; exceptional case | An edge case is a valid or invalid scenario near a behavioral boundary where ordinary assumptions are most likely to fail. | Problem Solving | Boundary Analysis | Beginner |
| `ASEA-CON-000015` | Problem Decomposition | decomposition tree; subproblem analysis | Problem decomposition divides a bounded problem into smaller responsibilities whose inputs, outputs, and interactions can be reasoned about independently. | Problem Solving | Decomposition | Beginner |
| `ASEA-CON-000016` | Pseudocode | structured pseudocode; language-independent algorithm | Pseudocode is a language-independent notation for expressing algorithmic control and data operations precisely enough to inspect and trace. | Algorithms | Algorithm Representation | Beginner |
| `ASEA-CON-000017` | Preconditions and Postconditions | precondition; postcondition | Preconditions define what must hold before an operation, and postconditions define the guarantees expected after successful completion. | Algorithms | Contracts | Beginner |
| `ASEA-CON-000018` | Algorithm Trace | dry run; trace table | An algorithm trace records each relevant step and state transition for a chosen input so that behavior can be verified. | Algorithms | Verification | Beginner |
| `ASEA-CON-000019` | Termination | termination condition; progress condition | Termination is the property that an algorithm reaches a defined stopping state for every input covered by its contract. | Algorithms | Correctness | Beginner |
| `ASEA-CON-000020` | Value | runtime value; literal value | A value is a represented piece of information that a program can store, compare, transform, or communicate. | Data and State | Values | Beginner |
| `ASEA-CON-000021` | Data Type | type; primitive type | A data type defines a set of values together with the operations and constraints applicable to those values. | Data and State | Types | Beginner |
| `ASEA-CON-000022` | Data Representation | value representation; encoded data | Data representation is the chosen encoding through which values are stored, transmitted, or interpreted by a system. | Data and State | Representation | Beginner |
| `ASEA-CON-000023` | Type Conversion | conversion; coercion | Type conversion transforms a value from one representation or type domain to another while exposing possible loss of precision or meaning. | Data and State | Types | Beginner |
| `ASEA-CON-000024` | Variable and Assignment | program variable; assignment operation | A variable is a named binding to program state, and assignment establishes or changes the value associated with that binding. | Data and State | State | Beginner |
| `ASEA-CON-000025` | Mutability and Constant | mutable state; constant binding; reassignment | Mutability permits state to change after initialization, while a constant binding prevents a defined class of reassignment. | Data and State | State | Beginner |
| `ASEA-CON-000026` | Operator and Operand | operator; operand | An operator denotes an operation, while its operands are the values or expressions to which that operation is applied. | Language Concepts | Expressions | Beginner |
| `ASEA-CON-000027` | Expression Evaluation | expression; evaluation | Expression evaluation applies language-defined operator and conversion rules to produce a value or effect. | Language Concepts | Expressions | Beginner |
| `ASEA-CON-000028` | Precedence and Grouping | operator precedence; explicit grouping | Precedence and grouping determine the order in which parts of a compound expression are evaluated. | Language Concepts | Expressions | Beginner |
| `ASEA-CON-000029` | Data Transformation Pipeline | data pipeline; input-process-output pipeline | A data transformation pipeline separates the stages that receive, interpret, validate, transform, and present data. | Data and State | Data Flow | Beginner |
| `ASEA-CON-000030` | Parsing and Validation | input parsing; input validation | Parsing converts an external representation into structured data, while validation checks that the result satisfies required constraints. | Data and State | Input Boundaries | Beginner |
| `ASEA-CON-000031` | Normalization and Formatting | normalization; output formatting | Normalization converts equivalent inputs to a consistent internal form, while formatting converts internal values into an intended output representation. | Data and State | Data Flow | Beginner |
| `ASEA-CON-000032` | Boolean Logic | Boolean algebra; logical expression | Boolean logic combines true and false propositions through formally defined logical operations. | Control Flow | Boolean Reasoning | Beginner |
| `ASEA-CON-000033` | Predicate | Boolean predicate; condition expression | A predicate is an expression that evaluates a proposition to a Boolean result for a given input or state. | Control Flow | Boolean Reasoning | Beginner |
| `ASEA-CON-000034` | Truth Table | Boolean truth table | A truth table enumerates input truth combinations and the resulting value of a Boolean expression. | Control Flow | Boolean Reasoning | Beginner |
| `ASEA-CON-000035` | Short-Circuit Evaluation | short-circuit logic | Short-circuit evaluation stops evaluating a compound Boolean expression when the final result is already determined. | Control Flow | Boolean Reasoning | Beginner |
| `ASEA-CON-000036` | Conditional Execution | if/else; conditional branch | Conditional execution selects which instructions run according to the evaluated result of one or more predicates. | Control Flow | Branching | Beginner |
| `ASEA-CON-000037` | Decision Table | rule table; condition-action table | A decision table enumerates relevant condition combinations and the action expected for each combination. | Control Flow | Branching | Beginner |
| `ASEA-CON-000038` | Branch Coverage | branch completeness; decision coverage | Branch coverage measures whether tests or examples exercise each relevant outcome of a conditional decision. | Testing | Coverage | Beginner |
| `ASEA-CON-000039` | Loop and Iteration | loop; repetition | A loop repeatedly executes a defined body while its continuation rule permits another iteration. | Control Flow | Iteration | Beginner |
| `ASEA-CON-000040` | Iteration State | loop state; iteration variable | Iteration state is the information that changes or is inspected between loop repetitions to determine progress and results. | Control Flow | Iteration | Beginner |
| `ASEA-CON-000041` | Counter, Accumulator, and Sentinel | counter; accumulator; sentinel | Counters track occurrences, accumulators combine successive values, and sentinels signal a distinguished control condition. | Control Flow | Iteration Patterns | Beginner |
| `ASEA-CON-000042` | Loop Termination | loop exit condition; loop progress | Loop termination requires a reachable exit condition and state changes that make progress toward it. | Control Flow | Iteration | Beginner |
| `ASEA-CON-000043` | Nested Control Flow | nested branch; nested loop | Nested control flow places one branching or iteration structure inside another to represent composite decisions or repeated dimensions. | Control Flow | Composite Flow | Beginner |
| `ASEA-CON-000044` | Control-Flow Complexity | branching complexity; cognitive complexity | Control-flow complexity describes the reasoning burden created by multiple interacting execution paths. | Control Flow | Composite Flow | Beginner |
| `ASEA-CON-000045` | Guard Clause and Early Exit | guard clause; early return | A guard clause handles a boundary or invalid condition early so that the main execution path remains simpler. | Control Flow | Flow Simplification | Beginner |
| `ASEA-CON-000046` | Function | procedure; callable behavior | A function is a named or addressable unit of behavior that accepts defined inputs, performs a responsibility, and may produce a result. | Functions and Modularity | Functions | Beginner |
| `ASEA-CON-000047` | Function Contract | behavioral contract; function specification | A function contract defines accepted inputs, preconditions, outputs, postconditions, effects, and failure behavior. | Functions and Modularity | Contracts | Beginner |
| `ASEA-CON-000048` | Function Invocation | function call; invocation | Function invocation transfers control to a function under a calling convention and later returns control with a result or failure. | Functions and Modularity | Functions | Beginner |
| `ASEA-CON-000049` | Parameter and Argument | formal parameter; actual argument | A parameter declares an input position in a function contract, while an argument supplies a value for that position during invocation. | Functions and Modularity | Interfaces | Beginner |
| `ASEA-CON-000050` | Return Value | function result; returned value | A return value is the explicit result communicated by a function to its caller. | Functions and Modularity | Interfaces | Beginner |
| `ASEA-CON-000051` | Function Signature | call signature; function interface | A function signature identifies the callable interface through its name, parameters, and result contract as defined by the language or design notation. | Functions and Modularity | Interfaces | Beginner |
| `ASEA-CON-000052` | Scope and Lifetime | lexical scope; binding lifetime | Scope determines where a binding is accessible, while lifetime determines when its associated state exists. | Language Concepts | Bindings | Beginner |
| `ASEA-CON-000053` | Shadowing | name shadowing | Shadowing occurs when a nearer binding uses the same name and temporarily hides another accessible binding. | Language Concepts | Bindings | Beginner |
| `ASEA-CON-000054` | Side Effect and Purity | side effect; pure function | A side effect changes or observes state outside a function's explicit result, while purity restricts behavior to result computation from declared inputs. | Functions and Modularity | Effects | Beginner |
| `ASEA-CON-000055` | Functional Decomposition | function decomposition; responsibility decomposition | Functional decomposition divides a solution into cohesive functions with explicit responsibilities and interfaces. | Functions and Modularity | Modularity | Beginner |
| `ASEA-CON-000056` | Cohesion and Coupling | module cohesion; dependency coupling | Cohesion measures how strongly elements serve one responsibility, while coupling measures reliance between separate units. | Functions and Modularity | Modularity | Beginner |
| `ASEA-CON-000057` | Reuse and Composition | behavior reuse; function composition | Reuse applies an existing unit in another context, while composition builds larger behavior by connecting smaller contracts. | Functions and Modularity | Modularity | Beginner |
| `ASEA-CON-000058` | Collection | array; sequence collection | A collection is a data structure that groups multiple values under defined access and organization rules. | Data Structures | Collections | Beginner |
| `ASEA-CON-000059` | Collection Traversal | iteration over data; collection iteration | Collection traversal visits elements according to a defined order or access rule. | Data Structures | Collections | Beginner |
| `ASEA-CON-000060` | Mapping, Filtering, and Reduction | mapping operation; filtering operation; aggregation | Mapping transforms elements, filtering selects elements, and reduction combines elements into a summary result. | Data Structures | Collection Operations | Beginner |
| `ASEA-CON-000061` | Record and Field | record; data field | A record groups named fields that describe one structured entity or event. | Data Structures | Records | Beginner |
| `ASEA-CON-000062` | Data Model and Schema | data model; record schema | A data model defines entities, fields, relationships, constraints, and representations, while a schema records those structural rules. | Data Structures | Modeling | Beginner |
| `ASEA-CON-000063` | Invariant and Invalid State | data invariant; invalid state | An invariant is a condition that must remain true for a valid model, and an invalid state violates one or more such conditions. | Software Engineering | Correctness | Beginner |
| `ASEA-CON-000064` | Recursion | recursive computation | Recursion defines a solution in terms of smaller instances of the same problem under a terminating structure. | Algorithms | Recursion | Beginner |
| `ASEA-CON-000065` | Base Case and Recursive Case | base case; recursive case | The base case returns without further recursion, while the recursive case reduces the problem and invokes the same contract on a smaller instance. | Algorithms | Recursion | Beginner |
| `ASEA-CON-000066` | Call Stack | runtime call stack; stack frame | A call stack records active function invocations and the information required to resume each caller. | Execution Model | Runtime State | Beginner |
| `ASEA-CON-000067` | Structural Recursion | recursive structure traversal | Structural recursion follows the shape of nested data by reducing each call to a direct substructure. | Algorithms | Recursion | Beginner |
| `ASEA-CON-000068` | String and Text | string value; text data | A string is an ordered sequence of text units interpreted under a character encoding and language-specific representation. | Text Processing | Text Representation | Beginner |
| `ASEA-CON-000069` | Tokenization and Delimiters | tokenization; delimiter parsing | Tokenization divides text into meaningful units according to delimiter and lexical rules. | Text Processing | Text Pipeline | Beginner |
| `ASEA-CON-000070` | Text Normalization | case folding; whitespace normalization | Text normalization transforms representational variations into a documented comparison or processing form without silently changing intended meaning. | Text Processing | Text Pipeline | Beginner |
| `ASEA-CON-000071` | Linear Search | sequential search | Linear search examines candidate elements in sequence until a match is found or the search space is exhausted. | Algorithms | Searching | Intermediate |
| `ASEA-CON-000072` | Binary Search | interval-halving search | Binary search repeatedly narrows an ordered search interval and requires a valid ordering invariant. | Algorithms | Searching | Intermediate |
| `ASEA-CON-000073` | Search Contract | search result contract; not-found contract | A search contract defines the target, input assumptions, equality rule, found result, and not-found behavior. | Algorithms | Searching | Intermediate |
| `ASEA-CON-000074` | Sorting Algorithm | ordering algorithm | A sorting algorithm rearranges elements according to a comparator while preserving the collection's required membership. | Algorithms | Sorting | Intermediate |
| `ASEA-CON-000075` | Selection Sort | selection-based sorting | Selection sort repeatedly selects an extreme element from the unsorted region and places it into its final region. | Algorithms | Sorting | Intermediate |
| `ASEA-CON-000076` | Insertion Sort | insertion-based sorting | Insertion sort grows a sorted prefix by inserting each next element into its proper position. | Algorithms | Sorting | Intermediate |
| `ASEA-CON-000077` | Stability and Mutation | stable sort; in-place mutation | Stability preserves the relative order of equal elements, while mutation describes whether sorting changes the original collection. | Algorithms | Sorting Properties | Intermediate |
| `ASEA-CON-000078` | Algorithmic Complexity | complexity analysis; growth analysis | Algorithmic complexity models how resource requirements change as input size grows. | Algorithms | Complexity | Intermediate |
| `ASEA-CON-000079` | Time and Space Complexity | time complexity; space complexity | Time complexity models computational work, while space complexity models additional storage as functions of input size. | Algorithms | Complexity | Intermediate |
| `ASEA-CON-000080` | Operation Count and Growth | operation count; growth class; Big O | Operation counting defines a repeatable cost model whose growth class summarizes behavior as input size increases. | Algorithms | Complexity | Intermediate |
| `ASEA-CON-000081` | Engineering Trade-off | design trade-off; selection rationale | An engineering trade-off compares valid alternatives against explicit constraints such as correctness, cost, clarity, and change risk. | Software Engineering | Decision Making | Intermediate |
| `ASEA-CON-000082` | Error and Failure Taxonomy | syntax error; runtime error; logic error; contract violation | An error and failure taxonomy classifies defects and observed failures by where they arise and how they affect the program contract. | Software Quality | Failure Models | Intermediate |
| `ASEA-CON-000083` | Error Boundary and Recovery | error boundary; failure recovery | An error boundary contains failure at a defined interface, and recovery specifies the controlled behavior that follows. | Software Quality | Failure Handling | Intermediate |
| `ASEA-CON-000084` | Error Message | diagnostic message; failure message | An error message communicates the failed operation, relevant context, and actionable next step without exposing unsafe information. | Software Quality | Diagnostics | Intermediate |
| `ASEA-CON-000085` | Systematic Debugging | evidence-driven debugging; debugging workflow | Systematic debugging reproduces a failure, forms testable hypotheses, controls experiments, and uses evidence to isolate the cause. | Software Quality | Debugging | Intermediate |
| `ASEA-CON-000086` | Reproduction and Minimal Failing Case | failure reproduction; minimal failing example | Reproduction reliably triggers a failure, while a minimal failing case removes irrelevant conditions without losing the failure. | Software Quality | Debugging | Intermediate |
| `ASEA-CON-000087` | Debugging Hypothesis and Experiment | debug hypothesis; controlled debugging experiment | A debugging hypothesis predicts a cause or observation, and an experiment changes or measures one relevant factor to test it. | Software Quality | Debugging | Intermediate |
| `ASEA-CON-000088` | Root Cause | causal defect; underlying cause | A root cause is the actionable condition whose correction prevents the investigated failure under the validated scope. | Software Quality | Debugging | Intermediate |
| `ASEA-CON-000089` | Test Case and Test Oracle | test case; expected result; test oracle | A test case defines setup, input, action, and expected result, while a test oracle determines whether the observed result is acceptable. | Testing | Test Design | Intermediate |
| `ASEA-CON-000090` | Boundary and Invalid-Input Testing | boundary-value test; invalid-input test; equivalence partition | Boundary and invalid-input testing targets limits, malformed values, and representative input classes where failures are likely. | Testing | Test Design | Intermediate |
| `ASEA-CON-000091` | Unit Test and Test Isolation | unit test; isolated test | A unit test checks a bounded behavior under controlled dependencies so that failure evidence remains attributable. | Testing | Test Execution | Intermediate |
| `ASEA-CON-000092` | Coverage and Regression | test coverage; regression test | Coverage describes exercised behavior or structure, while regression testing checks that previously working behavior remains intact after change. | Testing | Quality Evidence | Intermediate |
| `ASEA-CON-000093` | Refactoring | code restructuring | Refactoring changes internal structure without intentionally changing externally observable behavior. | Software Engineering | Code Improvement | Intermediate |
| `ASEA-CON-000094` | Semantic Preservation | behavior preservation; equivalent behavior | Semantic preservation means a change retains the behavior required by the same contract for the validated input domain. | Software Engineering | Code Improvement | Intermediate |
| `ASEA-CON-000095` | Code Smell | maintainability smell; design smell | A code smell is an observable structural signal that suggests increased maintenance risk and warrants contextual investigation. | Software Engineering | Maintainability | Intermediate |
| `ASEA-CON-000096` | Readability and Naming | code readability; intent-revealing name | Readability is the ease with which intended behavior can be understood, supported by precise naming, structure, and necessary explanation. | Software Engineering | Maintainability | Intermediate |
| `ASEA-CON-000097` | Program Design | software design; implementation plan | Program design transforms requirements into a coherent data model, algorithm, function structure, failure policy, and verification plan. | Software Engineering | Design | Intermediate |
| `ASEA-CON-000098` | Requirements Traceability | requirement trace; verification traceability | Requirements traceability links each requirement to design decisions, implementation evidence, tests, and review outcomes. | Assessment and Delivery | Traceability | Intermediate |
| `ASEA-CON-000099` | Acceptance Criteria | completion criterion; acceptance test condition | Acceptance criteria are measurable conditions used to decide whether a requirement or delivery is complete and acceptable. | Assessment and Delivery | Acceptance | Intermediate |
| `ASEA-CON-000100` | Risk and Delivery | risk register; delivery readiness | Risk and delivery management identifies uncertainty, mitigation, residual limitations, and evidence required for a controlled handoff. | Assessment and Delivery | Delivery | Intermediate |
| `ASEA-CON-000101` | Technical Review | engineering review; design defense | A technical review evaluates correctness, evidence, trade-offs, risks, and maintainability against an explicit scope and decision process. | Assessment and Delivery | Review | Intermediate |

### Learning Mapping

| Concept ID | Learning Stage | Introduced In | Applied In | Mastered In | Related Chapters | Related Modules | Related Learning Outcomes | Related Assessments | Related Labs | Related Projects |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ASEA-CON-000001` | Introduce → Apply → Integrate | `V01-C02` | `V01-C02-L01` | `V01-P01` | `V01-C02` | `V01-M01` | `V01-LO003`, `V01-LO004` | `V01-C02-AS01` | `V01-C02-L01` | `V01-P01` |
| `ASEA-CON-000002` | Introduce → Apply → Integrate | `V01-C02` | `V01-C02-L01` | `V01-P01` | `V01-C02` | `V01-M01` | `V01-LO003`, `V01-LO004` | `V01-C02-AS01` | `V01-C02-L01` | `V01-P01` |
| `ASEA-CON-000003` | Introduce → Apply → Integrate | `V01-C02` | `V01-C02-L01` | `V01-P01` | `V01-C02` | `V01-M01` | `V01-LO003`, `V01-LO004` | `V01-C02-AS01` | `V01-C02-L01` | `V01-P01` |
| `ASEA-CON-000004` | Introduce → Apply → Integrate | `V01-C02` | `V01-C02-L01` | `V01-P01` | `V01-C02` | `V01-M01` | `V01-LO003`, `V01-LO004` | `V01-C02-AS01` | `V01-C02-L01` | `V01-P01` |
| `ASEA-CON-000005` | Introduce → Apply → Integrate | `V01-C02` | `V01-C02-L01` | `V01-P01` | `V01-C02` | `V01-M01` | `V01-LO003`, `V01-LO004` | `V01-C02-AS01` | `V01-C02-L01` | `V01-P01` |
| `ASEA-CON-000006` | Introduce → Apply → Integrate | `V01-C02` | `V01-C02-L01` | `V01-P01` | `V01-C02` | `V01-M01` | `V01-LO003`, `V01-LO004` | `V01-C02-AS01` | `V01-C02-L01` | `V01-P01` |
| `ASEA-CON-000007` | Introduce → Apply → Integrate | `V01-C01` | `V01-C01-L01` | `V01-P01` | `V01-C01` | `V01-M01` | `V01-LO001`, `V01-LO002` | `V01-C01-AS01` | `V01-C01-L01` | `V01-P01` |
| `ASEA-CON-000008` | Introduce → Apply → Integrate | `V01-C01` | `V01-C01-L01` | `V01-P01` | `V01-C01` | `V01-M01` | `V01-LO001`, `V01-LO002` | `V01-C01-AS01` | `V01-C01-L01` | `V01-P01` |
| `ASEA-CON-000009` | Introduce → Apply → Integrate | `V01-C01` | `V01-C01-L01` | `V01-P01` | `V01-C01` | `V01-M01` | `V01-LO001`, `V01-LO002` | `V01-C01-AS01` | `V01-C01-L01` | `V01-P01` |
| `ASEA-CON-000010` | Introduce → Apply → Integrate | `V01-C01` | `V01-C01-L01` | `V01-P01` | `V01-C01` | `V01-M01` | `V01-LO001`, `V01-LO002` | `V01-C01-AS01` | `V01-C01-L01` | `V01-P01` |
| `ASEA-CON-000011` | Introduce → Apply → Integrate | `V01-C01` | `V01-C01-L01` | `V01-P01` | `V01-C01` | `V01-M01` | `V01-LO001`, `V01-LO002` | `V01-C01-AS01` | `V01-C01-L01` | `V01-P01` |
| `ASEA-CON-000012` | Introduce → Apply → Integrate | `V01-C03` | `V01-C03-L01` | `V01-P01` | `V01-C03` | `V01-M01` | `V01-LO005` | `V01-C03-AS01` | `V01-C03-L01` | `V01-P01` |
| `ASEA-CON-000013` | Introduce → Apply → Integrate | `V01-C03` | `V01-C03-L01` | `V01-P01` | `V01-C03` | `V01-M01` | `V01-LO005` | `V01-C03-AS01` | `V01-C03-L01` | `V01-P01` |
| `ASEA-CON-000014` | Introduce → Apply → Integrate | `V01-C03` | `V01-C03-L01` | `V01-P01` | `V01-C03` | `V01-M01` | `V01-LO005` | `V01-C03-AS01` | `V01-C03-L01` | `V01-P01` |
| `ASEA-CON-000015` | Introduce → Apply → Integrate | `V01-C03` | `V01-C03-L01` | `V01-P01` | `V01-C03` | `V01-M01` | `V01-LO005` | `V01-C03-AS01` | `V01-C03-L01` | `V01-P01` |
| `ASEA-CON-000016` | Introduce → Apply → Integrate | `V01-C04` | `V01-C04-L01` | `V01-P01` | `V01-C04` | `V01-M01` | `V01-LO006` | `V01-C04-AS01` | `V01-C04-L01` | `V01-P01` |
| `ASEA-CON-000017` | Introduce → Apply → Integrate | `V01-C04` | `V01-C04-L01` | `V01-P01` | `V01-C04` | `V01-M01` | `V01-LO006` | `V01-C04-AS01` | `V01-C04-L01` | `V01-P01` |
| `ASEA-CON-000018` | Introduce → Apply → Integrate | `V01-C04` | `V01-C04-L01` | `V01-P01` | `V01-C04` | `V01-M01` | `V01-LO006` | `V01-C04-AS01` | `V01-C04-L01` | `V01-P01` |
| `ASEA-CON-000019` | Introduce → Apply → Integrate | `V01-C04` | `V01-C04-L01` | `V01-P01` | `V01-C04` | `V01-M01` | `V01-LO006` | `V01-C04-AS01` | `V01-C04-L01` | `V01-P01` |
| `ASEA-CON-000020` | Introduce → Apply → Integrate | `V01-C05` | `V01-C05-L01` | `V01-P02` | `V01-C05` | `V01-M02` | `V01-LO007`, `V01-LO008` | `V01-C05-AS01` | `V01-C05-L01` | `V01-P02` |
| `ASEA-CON-000021` | Introduce → Apply → Integrate | `V01-C05` | `V01-C05-L01` | `V01-P02` | `V01-C05` | `V01-M02` | `V01-LO007`, `V01-LO008` | `V01-C05-AS01` | `V01-C05-L01` | `V01-P02` |
| `ASEA-CON-000022` | Introduce → Apply → Integrate | `V01-C05` | `V01-C05-L01` | `V01-P02` | `V01-C05` | `V01-M02` | `V01-LO007`, `V01-LO008` | `V01-C05-AS01` | `V01-C05-L01` | `V01-P02` |
| `ASEA-CON-000023` | Introduce → Apply → Integrate | `V01-C05` | `V01-C05-L01` | `V01-P02` | `V01-C05` | `V01-M02` | `V01-LO007`, `V01-LO008` | `V01-C05-AS01` | `V01-C05-L01` | `V01-P02` |
| `ASEA-CON-000024` | Introduce → Apply → Integrate | `V01-C06` | `V01-C06-L01` | `V01-P02` | `V01-C06` | `V01-M02` | `V01-LO009`, `V01-LO010` | `V01-C06-AS01` | `V01-C06-L01` | `V01-P02` |
| `ASEA-CON-000025` | Introduce → Apply → Integrate | `V01-C06` | `V01-C06-L01` | `V01-P02` | `V01-C06` | `V01-M02` | `V01-LO009`, `V01-LO010` | `V01-C06-AS01` | `V01-C06-L01` | `V01-P02` |
| `ASEA-CON-000026` | Introduce → Apply → Integrate | `V01-C07` | `V01-C07-L01` | `V01-P02` | `V01-C07` | `V01-M02` | `V01-LO011` | `V01-C07-AS01` | `V01-C07-L01` | `V01-P02` |
| `ASEA-CON-000027` | Introduce → Apply → Integrate | `V01-C07` | `V01-C07-L01` | `V01-P02` | `V01-C07` | `V01-M02` | `V01-LO011` | `V01-C07-AS01` | `V01-C07-L01` | `V01-P02` |
| `ASEA-CON-000028` | Introduce → Apply → Integrate | `V01-C07` | `V01-C07-L01` | `V01-P02` | `V01-C07` | `V01-M02` | `V01-LO011` | `V01-C07-AS01` | `V01-C07-L01` | `V01-P02` |
| `ASEA-CON-000029` | Introduce → Apply → Integrate | `V01-C08` | `V01-C08-L01` | `V01-P02` | `V01-C08` | `V01-M02` | `V01-LO012` | `V01-C08-AS01` | `V01-C08-L01` | `V01-P02` |
| `ASEA-CON-000030` | Introduce → Apply → Integrate | `V01-C08` | `V01-C08-L01` | `V01-P02` | `V01-C08` | `V01-M02` | `V01-LO012` | `V01-C08-AS01` | `V01-C08-L01` | `V01-P02` |
| `ASEA-CON-000031` | Introduce → Apply → Integrate | `V01-C08` | `V01-C08-L01` | `V01-P02` | `V01-C08` | `V01-M02` | `V01-LO012` | `V01-C08-AS01` | `V01-C08-L01` | `V01-P02` |
| `ASEA-CON-000032` | Introduce → Apply → Integrate | `V01-C09` | `V01-C09-L01` | `V01-P03` | `V01-C09` | `V01-M03` | `V01-LO013`, `V01-LO014` | `V01-C09-AS01` | `V01-C09-L01` | `V01-P03` |
| `ASEA-CON-000033` | Introduce → Apply → Integrate | `V01-C09` | `V01-C09-L01` | `V01-P03` | `V01-C09` | `V01-M03` | `V01-LO013`, `V01-LO014` | `V01-C09-AS01` | `V01-C09-L01` | `V01-P03` |
| `ASEA-CON-000034` | Introduce → Apply → Integrate | `V01-C09` | `V01-C09-L01` | `V01-P03` | `V01-C09` | `V01-M03` | `V01-LO013`, `V01-LO014` | `V01-C09-AS01` | `V01-C09-L01` | `V01-P03` |
| `ASEA-CON-000035` | Introduce → Apply → Integrate | `V01-C09` | `V01-C09-L01` | `V01-P03` | `V01-C09` | `V01-M03` | `V01-LO013`, `V01-LO014` | `V01-C09-AS01` | `V01-C09-L01` | `V01-P03` |
| `ASEA-CON-000036` | Introduce → Apply → Integrate | `V01-C10` | `V01-C10-L01` | `V01-P03` | `V01-C10` | `V01-M03` | `V01-LO015`, `V01-LO016` | `V01-C10-AS01` | `V01-C10-L01` | `V01-P03` |
| `ASEA-CON-000037` | Introduce → Apply → Integrate | `V01-C10` | `V01-C10-L01` | `V01-P03` | `V01-C10` | `V01-M03` | `V01-LO015`, `V01-LO016` | `V01-C10-AS01` | `V01-C10-L01` | `V01-P03` |
| `ASEA-CON-000038` | Introduce → Apply → Integrate | `V01-C10` | `V01-C10-L01` | `V01-P03` | `V01-C10` | `V01-M03` | `V01-LO015`, `V01-LO016` | `V01-C10-AS01` | `V01-C10-L01` | `V01-P03` |
| `ASEA-CON-000039` | Introduce → Apply → Integrate | `V01-C11` | `V01-C11-L01` | `V01-P03` | `V01-C11` | `V01-M03` | `V01-LO017` | `V01-C11-AS01` | `V01-C11-L01` | `V01-P03` |
| `ASEA-CON-000040` | Introduce → Apply → Integrate | `V01-C11` | `V01-C11-L01` | `V01-P03` | `V01-C11` | `V01-M03` | `V01-LO017` | `V01-C11-AS01` | `V01-C11-L01` | `V01-P03` |
| `ASEA-CON-000041` | Introduce → Apply → Integrate | `V01-C11` | `V01-C11-L01` | `V01-P03` | `V01-C11` | `V01-M03` | `V01-LO017` | `V01-C11-AS01` | `V01-C11-L01` | `V01-P03` |
| `ASEA-CON-000042` | Introduce → Apply → Integrate | `V01-C11` | `V01-C11-L01` | `V01-P03` | `V01-C11` | `V01-M03` | `V01-LO017` | `V01-C11-AS01` | `V01-C11-L01` | `V01-P03` |
| `ASEA-CON-000043` | Introduce → Apply → Integrate | `V01-C12` | `V01-C12-L01` | `V01-P03` | `V01-C12` | `V01-M03` | `V01-LO018` | `V01-C12-AS01` | `V01-C12-L01` | `V01-P03` |
| `ASEA-CON-000044` | Introduce → Apply → Integrate | `V01-C12` | `V01-C12-L01` | `V01-P03` | `V01-C12` | `V01-M03` | `V01-LO018` | `V01-C12-AS01` | `V01-C12-L01` | `V01-P03` |
| `ASEA-CON-000045` | Introduce → Apply → Integrate | `V01-C12` | `V01-C12-L01` | `V01-P03` | `V01-C12` | `V01-M03` | `V01-LO018` | `V01-C12-AS01` | `V01-C12-L01` | `V01-P03` |
| `ASEA-CON-000046` | Introduce → Apply → Integrate | `V01-C13` | `V01-C13-L01` | `V01-P04` | `V01-C13` | `V01-M04` | `V01-LO019`, `V01-LO020` | `V01-C13-AS01` | `V01-C13-L01` | `V01-P04` |
| `ASEA-CON-000047` | Introduce → Apply → Integrate | `V01-C13` | `V01-C13-L01` | `V01-P04` | `V01-C13` | `V01-M04` | `V01-LO019`, `V01-LO020` | `V01-C13-AS01` | `V01-C13-L01` | `V01-P04` |
| `ASEA-CON-000048` | Introduce → Apply → Integrate | `V01-C13` | `V01-C13-L01` | `V01-P04` | `V01-C13` | `V01-M04` | `V01-LO019`, `V01-LO020` | `V01-C13-AS01` | `V01-C13-L01` | `V01-P04` |
| `ASEA-CON-000049` | Introduce → Apply → Integrate | `V01-C14` | `V01-C14-L01` | `V01-P04` | `V01-C14` | `V01-M04` | `V01-LO021` | `V01-C14-AS01` | `V01-C14-L01` | `V01-P04` |
| `ASEA-CON-000050` | Introduce → Apply → Integrate | `V01-C14` | `V01-C14-L01` | `V01-P04` | `V01-C14` | `V01-M04` | `V01-LO021` | `V01-C14-AS01` | `V01-C14-L01` | `V01-P04` |
| `ASEA-CON-000051` | Introduce → Apply → Integrate | `V01-C14` | `V01-C14-L01` | `V01-P04` | `V01-C14` | `V01-M04` | `V01-LO021` | `V01-C14-AS01` | `V01-C14-L01` | `V01-P04` |
| `ASEA-CON-000052` | Introduce → Apply → Integrate | `V01-C15` | `V01-C15-L01` | `V01-P04` | `V01-C15` | `V01-M04` | `V01-LO022`, `V01-LO023` | `V01-C15-AS01` | `V01-C15-L01` | `V01-P04` |
| `ASEA-CON-000053` | Introduce → Apply → Integrate | `V01-C15` | `V01-C15-L01` | `V01-P04` | `V01-C15` | `V01-M04` | `V01-LO022`, `V01-LO023` | `V01-C15-AS01` | `V01-C15-L01` | `V01-P04` |
| `ASEA-CON-000054` | Introduce → Apply → Integrate | `V01-C15` | `V01-C15-L01` | `V01-P04` | `V01-C15` | `V01-M04` | `V01-LO022`, `V01-LO023` | `V01-C15-AS01` | `V01-C15-L01` | `V01-P04` |
| `ASEA-CON-000055` | Introduce → Apply → Integrate | `V01-C16` | `V01-C16-L01` | `V01-P04` | `V01-C16` | `V01-M04` | `V01-LO024` | `V01-C16-AS01` | `V01-C16-L01` | `V01-P04` |
| `ASEA-CON-000056` | Introduce → Apply → Integrate | `V01-C16` | `V01-C16-L01` | `V01-P04` | `V01-C16` | `V01-M04` | `V01-LO024` | `V01-C16-AS01` | `V01-C16-L01` | `V01-P04` |
| `ASEA-CON-000057` | Introduce → Apply → Integrate | `V01-C16` | `V01-C16-L01` | `V01-P04` | `V01-C16` | `V01-M04` | `V01-LO024` | `V01-C16-AS01` | `V01-C16-L01` | `V01-P04` |
| `ASEA-CON-000058` | Introduce → Apply → Integrate | `V01-C17` | `V01-C17-L01` | `V01-P05` | `V01-C17` | `V01-M05` | `V01-LO025`, `V01-LO026` | `V01-C17-AS01` | `V01-C17-L01` | `V01-P05` |
| `ASEA-CON-000059` | Introduce → Apply → Integrate | `V01-C17` | `V01-C17-L01` | `V01-P05` | `V01-C17` | `V01-M05` | `V01-LO025`, `V01-LO026` | `V01-C17-AS01` | `V01-C17-L01` | `V01-P05` |
| `ASEA-CON-000060` | Introduce → Apply → Integrate | `V01-C17` | `V01-C17-L01` | `V01-P05` | `V01-C17` | `V01-M05` | `V01-LO025`, `V01-LO026` | `V01-C17-AS01` | `V01-C17-L01` | `V01-P05` |
| `ASEA-CON-000061` | Introduce → Apply → Integrate | `V01-C18` | `V01-C18-L01` | `V01-P05` | `V01-C18` | `V01-M05` | `V01-LO027`, `V01-LO028` | `V01-C18-AS01` | `V01-C18-L01` | `V01-P05` |
| `ASEA-CON-000062` | Introduce → Apply → Integrate | `V01-C18` | `V01-C18-L01` | `V01-P05` | `V01-C18` | `V01-M05` | `V01-LO027`, `V01-LO028` | `V01-C18-AS01` | `V01-C18-L01` | `V01-P05` |
| `ASEA-CON-000063` | Introduce → Apply → Integrate | `V01-C18` | `V01-C18-L01` | `V01-P05` | `V01-C18` | `V01-M05` | `V01-LO027`, `V01-LO028` | `V01-C18-AS01` | `V01-C18-L01` | `V01-P05` |
| `ASEA-CON-000064` | Introduce → Apply → Integrate | `V01-C19` | `V01-C19-L01` | `V01-P05` | `V01-C19` | `V01-M05` | `V01-LO029`, `V01-LO030` | `V01-C19-AS01` | `V01-C19-L01` | `V01-P05` |
| `ASEA-CON-000065` | Introduce → Apply → Integrate | `V01-C19` | `V01-C19-L01` | `V01-P05` | `V01-C19` | `V01-M05` | `V01-LO029`, `V01-LO030` | `V01-C19-AS01` | `V01-C19-L01` | `V01-P05` |
| `ASEA-CON-000066` | Introduce → Apply → Integrate | `V01-C19` | `V01-C19-L01` | `V01-P05` | `V01-C19` | `V01-M05` | `V01-LO029`, `V01-LO030` | `V01-C19-AS01` | `V01-C19-L01` | `V01-P05` |
| `ASEA-CON-000067` | Introduce → Apply → Integrate | `V01-C19` | `V01-C19-L01` | `V01-P05` | `V01-C19` | `V01-M05` | `V01-LO029`, `V01-LO030` | `V01-C19-AS01` | `V01-C19-L01` | `V01-P05` |
| `ASEA-CON-000068` | Introduce → Apply → Integrate | `V01-C20` | `V01-C20-L01` | `V01-P05` | `V01-C20` | `V01-M05` | `V01-LO031` | `V01-C20-AS01` | `V01-C20-L01` | `V01-P05` |
| `ASEA-CON-000069` | Introduce → Apply → Integrate | `V01-C20` | `V01-C20-L01` | `V01-P05` | `V01-C20` | `V01-M05` | `V01-LO031` | `V01-C20-AS01` | `V01-C20-L01` | `V01-P05` |
| `ASEA-CON-000070` | Introduce → Apply → Integrate | `V01-C20` | `V01-C20-L01` | `V01-P05` | `V01-C20` | `V01-M05` | `V01-LO031` | `V01-C20-AS01` | `V01-C20-L01` | `V01-P05` |
| `ASEA-CON-000071` | Introduce → Apply → Integrate | `V01-C21` | `V01-C21-L01` | `V01-P06` | `V01-C21` | `V01-M06` | `V01-LO032`, `V01-LO033` | `V01-C21-AS01` | `V01-C21-L01` | `V01-P06` |
| `ASEA-CON-000072` | Introduce → Apply → Integrate | `V01-C21` | `V01-C21-L01` | `V01-P06` | `V01-C21` | `V01-M06` | `V01-LO032`, `V01-LO033` | `V01-C21-AS01` | `V01-C21-L01` | `V01-P06` |
| `ASEA-CON-000073` | Introduce → Apply → Integrate | `V01-C21` | `V01-C21-L01` | `V01-P06` | `V01-C21` | `V01-M06` | `V01-LO032`, `V01-LO033` | `V01-C21-AS01` | `V01-C21-L01` | `V01-P06` |
| `ASEA-CON-000074` | Introduce → Apply → Integrate | `V01-C22` | `V01-C22-L01` | `V01-P06` | `V01-C22` | `V01-M06` | `V01-LO034`, `V01-LO035` | `V01-C22-AS01` | `V01-C22-L01` | `V01-P06` |
| `ASEA-CON-000075` | Introduce → Apply → Integrate | `V01-C22` | `V01-C22-L01` | `V01-P06` | `V01-C22` | `V01-M06` | `V01-LO034`, `V01-LO035` | `V01-C22-AS01` | `V01-C22-L01` | `V01-P06` |
| `ASEA-CON-000076` | Introduce → Apply → Integrate | `V01-C22` | `V01-C22-L01` | `V01-P06` | `V01-C22` | `V01-M06` | `V01-LO034`, `V01-LO035` | `V01-C22-AS01` | `V01-C22-L01` | `V01-P06` |
| `ASEA-CON-000077` | Introduce → Apply → Integrate | `V01-C22` | `V01-C22-L01` | `V01-P06` | `V01-C22` | `V01-M06` | `V01-LO034`, `V01-LO035` | `V01-C22-AS01` | `V01-C22-L01` | `V01-P06` |
| `ASEA-CON-000078` | Introduce → Apply → Integrate | `V01-C23` | `V01-C23-L01` | `V01-P06` | `V01-C23` | `V01-M06` | `V01-LO036`, `V01-LO037` | `V01-C23-AS01` | `V01-C23-L01` | `V01-P06` |
| `ASEA-CON-000079` | Introduce → Apply → Integrate | `V01-C23` | `V01-C23-L01` | `V01-P06` | `V01-C23` | `V01-M06` | `V01-LO036`, `V01-LO037` | `V01-C23-AS01` | `V01-C23-L01` | `V01-P06` |
| `ASEA-CON-000080` | Introduce → Apply → Integrate | `V01-C23` | `V01-C23-L01` | `V01-P06` | `V01-C23` | `V01-M06` | `V01-LO036`, `V01-LO037` | `V01-C23-AS01` | `V01-C23-L01` | `V01-P06` |
| `ASEA-CON-000081` | Introduce → Apply → Integrate | `V01-C23` | `V01-C23-L01` | `V01-P06` | `V01-C23` | `V01-M06` | `V01-LO036`, `V01-LO037` | `V01-C23-AS01` | `V01-C23-L01` | `V01-P06` |
| `ASEA-CON-000082` | Introduce → Apply → Integrate | `V01-C24` | `V01-C24-L01` | `V01-CP01` | `V01-C24` | `V01-M07` | `V01-LO038`, `V01-LO039` | `V01-C24-AS01` | `V01-C24-L01` | `V01-CP01` |
| `ASEA-CON-000083` | Introduce → Apply → Integrate | `V01-C24` | `V01-C24-L01` | `V01-CP01` | `V01-C24` | `V01-M07` | `V01-LO038`, `V01-LO039` | `V01-C24-AS01` | `V01-C24-L01` | `V01-CP01` |
| `ASEA-CON-000084` | Introduce → Apply → Integrate | `V01-C24` | `V01-C24-L01` | `V01-CP01` | `V01-C24` | `V01-M07` | `V01-LO038`, `V01-LO039` | `V01-C24-AS01` | `V01-C24-L01` | `V01-CP01` |
| `ASEA-CON-000085` | Introduce → Apply → Integrate | `V01-C25` | `V01-C25-L01` | `V01-CP01` | `V01-C25` | `V01-M07` | `V01-LO040`, `V01-LO041` | `V01-C25-AS01` | `V01-C25-L01` | `V01-CP01` |
| `ASEA-CON-000086` | Introduce → Apply → Integrate | `V01-C25` | `V01-C25-L01` | `V01-CP01` | `V01-C25` | `V01-M07` | `V01-LO040`, `V01-LO041` | `V01-C25-AS01` | `V01-C25-L01` | `V01-CP01` |
| `ASEA-CON-000087` | Introduce → Apply → Integrate | `V01-C25` | `V01-C25-L01` | `V01-CP01` | `V01-C25` | `V01-M07` | `V01-LO040`, `V01-LO041` | `V01-C25-AS01` | `V01-C25-L01` | `V01-CP01` |
| `ASEA-CON-000088` | Introduce → Apply → Integrate | `V01-C25` | `V01-C25-L01` | `V01-CP01` | `V01-C25` | `V01-M07` | `V01-LO040`, `V01-LO041` | `V01-C25-AS01` | `V01-C25-L01` | `V01-CP01` |
| `ASEA-CON-000089` | Introduce → Apply → Integrate | `V01-C26` | `V01-C26-L01` | `V01-CP01` | `V01-C26` | `V01-M07` | `V01-LO042`, `V01-LO043` | `V01-C26-AS01` | `V01-C26-L01` | `V01-CP01` |
| `ASEA-CON-000090` | Introduce → Apply → Integrate | `V01-C26` | `V01-C26-L01` | `V01-CP01` | `V01-C26` | `V01-M07` | `V01-LO042`, `V01-LO043` | `V01-C26-AS01` | `V01-C26-L01` | `V01-CP01` |
| `ASEA-CON-000091` | Introduce → Apply → Integrate | `V01-C26` | `V01-C26-L01` | `V01-CP01` | `V01-C26` | `V01-M07` | `V01-LO042`, `V01-LO043` | `V01-C26-AS01` | `V01-C26-L01` | `V01-CP01` |
| `ASEA-CON-000092` | Introduce → Apply → Integrate | `V01-C26` | `V01-C26-L01` | `V01-CP01` | `V01-C26` | `V01-M07` | `V01-LO042`, `V01-LO043` | `V01-C26-AS01` | `V01-C26-L01` | `V01-CP01` |
| `ASEA-CON-000093` | Introduce → Apply → Integrate | `V01-C27` | `V01-C27-L01` | `V01-CP01` | `V01-C27` | `V01-M07` | `V01-LO044`, `V01-LO045` | `V01-C27-AS01` | `V01-C27-L01` | `V01-CP01` |
| `ASEA-CON-000094` | Introduce → Apply → Integrate | `V01-C27` | `V01-C27-L01` | `V01-CP01` | `V01-C27` | `V01-M07` | `V01-LO044`, `V01-LO045` | `V01-C27-AS01` | `V01-C27-L01` | `V01-CP01` |
| `ASEA-CON-000095` | Introduce → Apply → Integrate | `V01-C27` | `V01-C27-L01` | `V01-CP01` | `V01-C27` | `V01-M07` | `V01-LO044`, `V01-LO045` | `V01-C27-AS01` | `V01-C27-L01` | `V01-CP01` |
| `ASEA-CON-000096` | Introduce → Apply → Integrate | `V01-C27` | `V01-C27-L01` | `V01-CP01` | `V01-C27` | `V01-M07` | `V01-LO044`, `V01-LO045` | `V01-C27-AS01` | `V01-C27-L01` | `V01-CP01` |
| `ASEA-CON-000097` | Introduce → Apply → Integrate | `V01-C28` | `V01-C28-L01` | `V01-CP01` | `V01-C28` | `V01-M07` | `V01-LO046` | `V01-C28-AS01` | `V01-C28-L01` | `V01-CP01` |
| `ASEA-CON-000098` | Introduce → Apply → Integrate | `V01-C28` | `V01-C28-L01` | `V01-CP01` | `V01-C28` | `V01-M07` | `V01-LO046` | `V01-C28-AS01` | `V01-C28-L01` | `V01-CP01` |
| `ASEA-CON-000099` | Introduce → Apply → Integrate | `V01-C28` | `V01-C28-L01` | `V01-CP01` | `V01-C28` | `V01-M07` | `V01-LO046` | `V01-C28-AS01` | `V01-C28-L01` | `V01-CP01` |
| `ASEA-CON-000100` | Introduce → Apply → Integrate | `V01-C28` | `V01-C28-L01` | `V01-CP01` | `V01-C28` | `V01-M07` | `V01-LO046` | `V01-C28-AS01` | `V01-C28-L01` | `V01-CP01` |
| `ASEA-CON-000101` | Introduce → Apply → Integrate | `V01-C28` | `V01-C28-L01` | `V01-CP01` | `V01-C28` | `V01-M07` | `V01-LO046` | `V01-C28-AS01` | `V01-C28-L01` | `V01-CP01` |

### Relationships and Lifecycle

| Concept ID | Prerequisites | Related Concepts | Status | Version | Owner | Created | Last Updated | Review Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ASEA-CON-000001` | None | `ASEA-CON-000002`, `ASEA-CON-000003`, `ASEA-CON-000004`, `ASEA-CON-000005`, `ASEA-CON-000006` | Approved | 1.0.0 | Knowledge Architect | 2026-07-17 | 2026-07-17 | Approved |
| `ASEA-CON-000002` | `ASEA-CON-000001` | `ASEA-CON-000001`, `ASEA-CON-000003`, `ASEA-CON-000004`, `ASEA-CON-000005`, `ASEA-CON-000006` | Approved | 1.0.0 | Knowledge Architect | 2026-07-17 | 2026-07-17 | Approved |
| `ASEA-CON-000003` | `ASEA-CON-000001` | `ASEA-CON-000001`, `ASEA-CON-000002`, `ASEA-CON-000004`, `ASEA-CON-000005`, `ASEA-CON-000006` | Approved | 1.0.0 | Knowledge Architect | 2026-07-17 | 2026-07-17 | Approved |
| `ASEA-CON-000004` | `ASEA-CON-000001` | `ASEA-CON-000001`, `ASEA-CON-000002`, `ASEA-CON-000003`, `ASEA-CON-000005`, `ASEA-CON-000006` | Approved | 1.0.0 | Knowledge Architect | 2026-07-17 | 2026-07-17 | Approved |
| `ASEA-CON-000005` | `ASEA-CON-000003` | `ASEA-CON-000003`, `ASEA-CON-000001`, `ASEA-CON-000002`, `ASEA-CON-000004`, `ASEA-CON-000006` | Approved | 1.0.0 | Knowledge Architect | 2026-07-17 | 2026-07-17 | Approved |
| `ASEA-CON-000006` | `ASEA-CON-000003`, `ASEA-CON-000004`, `ASEA-CON-000005` | `ASEA-CON-000003`, `ASEA-CON-000004`, `ASEA-CON-000005`, `ASEA-CON-000001`, `ASEA-CON-000002` | Approved | 1.0.0 | Knowledge Architect | 2026-07-17 | 2026-07-17 | Approved |
| `ASEA-CON-000007` | None | `ASEA-CON-000008`, `ASEA-CON-000009`, `ASEA-CON-000010`, `ASEA-CON-000011` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000008` | `ASEA-CON-000007` | `ASEA-CON-000007`, `ASEA-CON-000009`, `ASEA-CON-000010`, `ASEA-CON-000011` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000009` | `ASEA-CON-000007` | `ASEA-CON-000007`, `ASEA-CON-000008`, `ASEA-CON-000010`, `ASEA-CON-000011` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000010` | `ASEA-CON-000009` | `ASEA-CON-000009`, `ASEA-CON-000007`, `ASEA-CON-000008`, `ASEA-CON-000011` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000011` | `ASEA-CON-000010` | `ASEA-CON-000010`, `ASEA-CON-000007`, `ASEA-CON-000008`, `ASEA-CON-000009` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000012` | `ASEA-CON-000011` | `ASEA-CON-000011`, `ASEA-CON-000013`, `ASEA-CON-000014`, `ASEA-CON-000015` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000013` | `ASEA-CON-000012` | `ASEA-CON-000012`, `ASEA-CON-000014`, `ASEA-CON-000015` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000014` | `ASEA-CON-000012` | `ASEA-CON-000012`, `ASEA-CON-000013`, `ASEA-CON-000015` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000015` | `ASEA-CON-000012` | `ASEA-CON-000012`, `ASEA-CON-000013`, `ASEA-CON-000014` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000016` | `ASEA-CON-000011` | `ASEA-CON-000011`, `ASEA-CON-000017`, `ASEA-CON-000018`, `ASEA-CON-000019` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000017` | `ASEA-CON-000012` | `ASEA-CON-000012`, `ASEA-CON-000016`, `ASEA-CON-000018`, `ASEA-CON-000019` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000018` | `ASEA-CON-000016` | `ASEA-CON-000016`, `ASEA-CON-000017`, `ASEA-CON-000019` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000019` | `ASEA-CON-000018` | `ASEA-CON-000018`, `ASEA-CON-000016`, `ASEA-CON-000017` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000020` | `ASEA-CON-000010` | `ASEA-CON-000010`, `ASEA-CON-000021`, `ASEA-CON-000022`, `ASEA-CON-000023` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000021` | `ASEA-CON-000020` | `ASEA-CON-000020`, `ASEA-CON-000022`, `ASEA-CON-000023` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000022` | `ASEA-CON-000020` | `ASEA-CON-000020`, `ASEA-CON-000021`, `ASEA-CON-000023` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000023` | `ASEA-CON-000021`, `ASEA-CON-000022` | `ASEA-CON-000021`, `ASEA-CON-000022`, `ASEA-CON-000020` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000024` | `ASEA-CON-000020`, `ASEA-CON-000003` | `ASEA-CON-000020`, `ASEA-CON-000003`, `ASEA-CON-000025` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000025` | `ASEA-CON-000024` | `ASEA-CON-000024` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000026` | `ASEA-CON-000020` | `ASEA-CON-000020`, `ASEA-CON-000027`, `ASEA-CON-000028` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000027` | `ASEA-CON-000026` | `ASEA-CON-000026`, `ASEA-CON-000028` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000028` | `ASEA-CON-000027` | `ASEA-CON-000027`, `ASEA-CON-000026` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000029` | `ASEA-CON-000027` | `ASEA-CON-000027`, `ASEA-CON-000030`, `ASEA-CON-000031` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000030` | `ASEA-CON-000021`, `ASEA-CON-000029` | `ASEA-CON-000021`, `ASEA-CON-000029`, `ASEA-CON-000031` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000031` | `ASEA-CON-000030` | `ASEA-CON-000030`, `ASEA-CON-000029` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000032` | `ASEA-CON-000027` | `ASEA-CON-000027`, `ASEA-CON-000033`, `ASEA-CON-000034`, `ASEA-CON-000035` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000033` | `ASEA-CON-000032` | `ASEA-CON-000032`, `ASEA-CON-000034`, `ASEA-CON-000035` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000034` | `ASEA-CON-000032` | `ASEA-CON-000032`, `ASEA-CON-000033`, `ASEA-CON-000035` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000035` | `ASEA-CON-000033` | `ASEA-CON-000033`, `ASEA-CON-000032`, `ASEA-CON-000034` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000036` | `ASEA-CON-000033` | `ASEA-CON-000033`, `ASEA-CON-000037`, `ASEA-CON-000038` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000037` | `ASEA-CON-000034` | `ASEA-CON-000034`, `ASEA-CON-000036`, `ASEA-CON-000038` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000038` | `ASEA-CON-000036` | `ASEA-CON-000036`, `ASEA-CON-000037` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000039` | `ASEA-CON-000036` | `ASEA-CON-000036`, `ASEA-CON-000040`, `ASEA-CON-000041`, `ASEA-CON-000042` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000040` | `ASEA-CON-000039`, `ASEA-CON-000003` | `ASEA-CON-000039`, `ASEA-CON-000003`, `ASEA-CON-000041`, `ASEA-CON-000042` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000041` | `ASEA-CON-000040` | `ASEA-CON-000040`, `ASEA-CON-000039`, `ASEA-CON-000042` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000042` | `ASEA-CON-000039`, `ASEA-CON-000019` | `ASEA-CON-000039`, `ASEA-CON-000019`, `ASEA-CON-000040`, `ASEA-CON-000041` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000043` | `ASEA-CON-000036`, `ASEA-CON-000039` | `ASEA-CON-000036`, `ASEA-CON-000039`, `ASEA-CON-000044`, `ASEA-CON-000045` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000044` | `ASEA-CON-000043` | `ASEA-CON-000043`, `ASEA-CON-000045` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000045` | `ASEA-CON-000036` | `ASEA-CON-000036`, `ASEA-CON-000043`, `ASEA-CON-000044` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000046` | `ASEA-CON-000011` | `ASEA-CON-000011`, `ASEA-CON-000047`, `ASEA-CON-000048` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000047` | `ASEA-CON-000046`, `ASEA-CON-000017` | `ASEA-CON-000046`, `ASEA-CON-000017`, `ASEA-CON-000048` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000048` | `ASEA-CON-000046` | `ASEA-CON-000046`, `ASEA-CON-000047` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000049` | `ASEA-CON-000047`, `ASEA-CON-000048` | `ASEA-CON-000047`, `ASEA-CON-000048`, `ASEA-CON-000050`, `ASEA-CON-000051` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000050` | `ASEA-CON-000048` | `ASEA-CON-000048`, `ASEA-CON-000049`, `ASEA-CON-000051` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000051` | `ASEA-CON-000049`, `ASEA-CON-000050` | `ASEA-CON-000049`, `ASEA-CON-000050` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000052` | `ASEA-CON-000024`, `ASEA-CON-000046` | `ASEA-CON-000024`, `ASEA-CON-000046`, `ASEA-CON-000053`, `ASEA-CON-000054` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000053` | `ASEA-CON-000052` | `ASEA-CON-000052`, `ASEA-CON-000054` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000054` | `ASEA-CON-000047`, `ASEA-CON-000052` | `ASEA-CON-000047`, `ASEA-CON-000052`, `ASEA-CON-000053` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000055` | `ASEA-CON-000015`, `ASEA-CON-000047` | `ASEA-CON-000015`, `ASEA-CON-000047`, `ASEA-CON-000056`, `ASEA-CON-000057` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000056` | `ASEA-CON-000055` | `ASEA-CON-000055`, `ASEA-CON-000057` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000057` | `ASEA-CON-000055` | `ASEA-CON-000055`, `ASEA-CON-000056` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000058` | `ASEA-CON-000021` | `ASEA-CON-000021`, `ASEA-CON-000059`, `ASEA-CON-000060` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000059` | `ASEA-CON-000058`, `ASEA-CON-000039` | `ASEA-CON-000058`, `ASEA-CON-000039`, `ASEA-CON-000060` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000060` | `ASEA-CON-000059` | `ASEA-CON-000059`, `ASEA-CON-000058` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000061` | `ASEA-CON-000058`, `ASEA-CON-000021` | `ASEA-CON-000058`, `ASEA-CON-000021`, `ASEA-CON-000062`, `ASEA-CON-000063` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000062` | `ASEA-CON-000061` | `ASEA-CON-000061`, `ASEA-CON-000063` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000063` | `ASEA-CON-000062` | `ASEA-CON-000062`, `ASEA-CON-000061` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000064` | `ASEA-CON-000046`, `ASEA-CON-000015` | `ASEA-CON-000046`, `ASEA-CON-000015`, `ASEA-CON-000065`, `ASEA-CON-000066`, `ASEA-CON-000067` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000065` | `ASEA-CON-000064` | `ASEA-CON-000064`, `ASEA-CON-000066`, `ASEA-CON-000067` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000066` | `ASEA-CON-000048`, `ASEA-CON-000003` | `ASEA-CON-000048`, `ASEA-CON-000003`, `ASEA-CON-000064`, `ASEA-CON-000065`, `ASEA-CON-000067` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000067` | `ASEA-CON-000065`, `ASEA-CON-000062` | `ASEA-CON-000065`, `ASEA-CON-000062`, `ASEA-CON-000064`, `ASEA-CON-000066` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000068` | `ASEA-CON-000058`, `ASEA-CON-000022` | `ASEA-CON-000058`, `ASEA-CON-000022`, `ASEA-CON-000069`, `ASEA-CON-000070` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000069` | `ASEA-CON-000068`, `ASEA-CON-000030` | `ASEA-CON-000068`, `ASEA-CON-000030`, `ASEA-CON-000070` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000070` | `ASEA-CON-000068`, `ASEA-CON-000031` | `ASEA-CON-000068`, `ASEA-CON-000031`, `ASEA-CON-000069` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000071` | `ASEA-CON-000059` | `ASEA-CON-000059`, `ASEA-CON-000072`, `ASEA-CON-000073` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000072` | `ASEA-CON-000071`, `ASEA-CON-000063` | `ASEA-CON-000071`, `ASEA-CON-000063`, `ASEA-CON-000073` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000073` | `ASEA-CON-000047`, `ASEA-CON-000058` | `ASEA-CON-000047`, `ASEA-CON-000058`, `ASEA-CON-000071`, `ASEA-CON-000072` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000074` | `ASEA-CON-000058`, `ASEA-CON-000073` | `ASEA-CON-000058`, `ASEA-CON-000073`, `ASEA-CON-000075`, `ASEA-CON-000076`, `ASEA-CON-000077` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000075` | `ASEA-CON-000074` | `ASEA-CON-000074`, `ASEA-CON-000076`, `ASEA-CON-000077` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000076` | `ASEA-CON-000074` | `ASEA-CON-000074`, `ASEA-CON-000075`, `ASEA-CON-000077` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000077` | `ASEA-CON-000074` | `ASEA-CON-000074`, `ASEA-CON-000075`, `ASEA-CON-000076` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000078` | `ASEA-CON-000011`, `ASEA-CON-000058` | `ASEA-CON-000011`, `ASEA-CON-000058`, `ASEA-CON-000079`, `ASEA-CON-000080`, `ASEA-CON-000081` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000079` | `ASEA-CON-000078` | `ASEA-CON-000078`, `ASEA-CON-000080`, `ASEA-CON-000081` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000080` | `ASEA-CON-000078` | `ASEA-CON-000078`, `ASEA-CON-000079`, `ASEA-CON-000081` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000081` | `ASEA-CON-000079` | `ASEA-CON-000079`, `ASEA-CON-000078`, `ASEA-CON-000080` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000082` | `ASEA-CON-000063` | `ASEA-CON-000063`, `ASEA-CON-000083`, `ASEA-CON-000084` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000083` | `ASEA-CON-000047`, `ASEA-CON-000082` | `ASEA-CON-000047`, `ASEA-CON-000082`, `ASEA-CON-000084` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000084` | `ASEA-CON-000083` | `ASEA-CON-000083`, `ASEA-CON-000082` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000085` | `ASEA-CON-000082` | `ASEA-CON-000082`, `ASEA-CON-000086`, `ASEA-CON-000087`, `ASEA-CON-000088` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000086` | `ASEA-CON-000085` | `ASEA-CON-000085`, `ASEA-CON-000087`, `ASEA-CON-000088` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000087` | `ASEA-CON-000086` | `ASEA-CON-000086`, `ASEA-CON-000085`, `ASEA-CON-000088` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000088` | `ASEA-CON-000087` | `ASEA-CON-000087`, `ASEA-CON-000085`, `ASEA-CON-000086` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000089` | `ASEA-CON-000047` | `ASEA-CON-000047`, `ASEA-CON-000090`, `ASEA-CON-000091`, `ASEA-CON-000092` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000090` | `ASEA-CON-000014`, `ASEA-CON-000089` | `ASEA-CON-000014`, `ASEA-CON-000089`, `ASEA-CON-000091`, `ASEA-CON-000092` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000091` | `ASEA-CON-000089`, `ASEA-CON-000046` | `ASEA-CON-000089`, `ASEA-CON-000046`, `ASEA-CON-000090`, `ASEA-CON-000092` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000092` | `ASEA-CON-000091` | `ASEA-CON-000091`, `ASEA-CON-000089`, `ASEA-CON-000090` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000093` | `ASEA-CON-000092` | `ASEA-CON-000092`, `ASEA-CON-000094`, `ASEA-CON-000095`, `ASEA-CON-000096` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000094` | `ASEA-CON-000093`, `ASEA-CON-000047` | `ASEA-CON-000093`, `ASEA-CON-000047`, `ASEA-CON-000095`, `ASEA-CON-000096` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000095` | `ASEA-CON-000056` | `ASEA-CON-000056`, `ASEA-CON-000093`, `ASEA-CON-000094`, `ASEA-CON-000096` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000096` | `ASEA-CON-000095` | `ASEA-CON-000095`, `ASEA-CON-000093`, `ASEA-CON-000094` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000097` | `ASEA-CON-000012`, `ASEA-CON-000055` | `ASEA-CON-000012`, `ASEA-CON-000055`, `ASEA-CON-000098`, `ASEA-CON-000099`, `ASEA-CON-000100`, `ASEA-CON-000101` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000098` | `ASEA-CON-000097`, `ASEA-CON-000089` | `ASEA-CON-000097`, `ASEA-CON-000089`, `ASEA-CON-000099`, `ASEA-CON-000100`, `ASEA-CON-000101` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000099` | `ASEA-CON-000012` | `ASEA-CON-000012`, `ASEA-CON-000097`, `ASEA-CON-000098`, `ASEA-CON-000100`, `ASEA-CON-000101` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000100` | `ASEA-CON-000097`, `ASEA-CON-000099` | `ASEA-CON-000097`, `ASEA-CON-000099`, `ASEA-CON-000098`, `ASEA-CON-000101` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |
| `ASEA-CON-000101` | `ASEA-CON-000098`, `ASEA-CON-000081` | `ASEA-CON-000098`, `ASEA-CON-000081`, `ASEA-CON-000097`, `ASEA-CON-000099`, `ASEA-CON-000100` | Candidate | 0.1.0 | Knowledge Architect | 2026-07-18 | 2026-07-18 | Evidence Review Required |

### Chapter Extraction Coverage

The source-term count includes every unique Core Concept and Supporting Concept
declared in each Chapter record. Canonicalization may combine several source
terms into one stable Concept.

| Chapter | Declared source terms | Canonical Concepts | Coverage |
| --- | ---: | --- | ---: |
| `V01-C01` | 10 | `ASEA-CON-000007`, `ASEA-CON-000008`, `ASEA-CON-000009`, `ASEA-CON-000010`, `ASEA-CON-000011` | 100% |
| `V01-C02` | 10 | `ASEA-CON-000001`, `ASEA-CON-000002`, `ASEA-CON-000003`, `ASEA-CON-000004`, `ASEA-CON-000005`, `ASEA-CON-000006` | 100% |
| `V01-C03` | 10 | `ASEA-CON-000012`, `ASEA-CON-000013`, `ASEA-CON-000014`, `ASEA-CON-000015` | 100% |
| `V01-C04` | 10 | `ASEA-CON-000016`, `ASEA-CON-000017`, `ASEA-CON-000018`, `ASEA-CON-000019` | 100% |
| `V01-C05` | 11 | `ASEA-CON-000020`, `ASEA-CON-000021`, `ASEA-CON-000022`, `ASEA-CON-000023` | 100% |
| `V01-C06` | 9 | `ASEA-CON-000024`, `ASEA-CON-000025` | 100% |
| `V01-C07` | 10 | `ASEA-CON-000026`, `ASEA-CON-000027`, `ASEA-CON-000028` | 100% |
| `V01-C08` | 10 | `ASEA-CON-000029`, `ASEA-CON-000030`, `ASEA-CON-000031` | 100% |
| `V01-C09` | 10 | `ASEA-CON-000032`, `ASEA-CON-000033`, `ASEA-CON-000034`, `ASEA-CON-000035` | 100% |
| `V01-C10` | 9 | `ASEA-CON-000036`, `ASEA-CON-000037`, `ASEA-CON-000038` | 100% |
| `V01-C11` | 9 | `ASEA-CON-000039`, `ASEA-CON-000040`, `ASEA-CON-000041`, `ASEA-CON-000042` | 100% |
| `V01-C12` | 8 | `ASEA-CON-000043`, `ASEA-CON-000044`, `ASEA-CON-000045` | 100% |
| `V01-C13` | 10 | `ASEA-CON-000046`, `ASEA-CON-000047`, `ASEA-CON-000048` | 100% |
| `V01-C14` | 9 | `ASEA-CON-000049`, `ASEA-CON-000050`, `ASEA-CON-000051` | 100% |
| `V01-C15` | 9 | `ASEA-CON-000052`, `ASEA-CON-000053`, `ASEA-CON-000054` | 100% |
| `V01-C16` | 9 | `ASEA-CON-000055`, `ASEA-CON-000056`, `ASEA-CON-000057` | 100% |
| `V01-C17` | 10 | `ASEA-CON-000058`, `ASEA-CON-000059`, `ASEA-CON-000060` | 100% |
| `V01-C18` | 10 | `ASEA-CON-000061`, `ASEA-CON-000062`, `ASEA-CON-000063` | 100% |
| `V01-C19` | 9 | `ASEA-CON-000064`, `ASEA-CON-000065`, `ASEA-CON-000066`, `ASEA-CON-000067` | 100% |
| `V01-C20` | 10 | `ASEA-CON-000068`, `ASEA-CON-000069`, `ASEA-CON-000070` | 100% |
| `V01-C21` | 9 | `ASEA-CON-000071`, `ASEA-CON-000072`, `ASEA-CON-000073` | 100% |
| `V01-C22` | 10 | `ASEA-CON-000074`, `ASEA-CON-000075`, `ASEA-CON-000076`, `ASEA-CON-000077` | 100% |
| `V01-C23` | 9 | `ASEA-CON-000078`, `ASEA-CON-000079`, `ASEA-CON-000080`, `ASEA-CON-000081` | 100% |
| `V01-C24` | 10 | `ASEA-CON-000082`, `ASEA-CON-000083`, `ASEA-CON-000084` | 100% |
| `V01-C25` | 10 | `ASEA-CON-000085`, `ASEA-CON-000086`, `ASEA-CON-000087`, `ASEA-CON-000088` | 100% |
| `V01-C26` | 10 | `ASEA-CON-000089`, `ASEA-CON-000090`, `ASEA-CON-000091`, `ASEA-CON-000092` | 100% |
| `V01-C27` | 10 | `ASEA-CON-000093`, `ASEA-CON-000094`, `ASEA-CON-000095`, `ASEA-CON-000096` | 100% |
| `V01-C28` | 10 | `ASEA-CON-000097`, `ASEA-CON-000098`, `ASEA-CON-000099`, `ASEA-CON-000100`, `ASEA-CON-000101` | 100% |

## Validation

- Total Concepts: 101
- Existing Approved Concepts: 6
- New Candidate Concepts: 95
- Declared source terms reviewed: 244
- Duplicate canonical names: 0
- Duplicate aliases: 0
- Missing definitions: 0
- Chapter coverage: 28/28
- Outcome coverage: 46/46
- Assessment coverage: 28/28

See [Concept Validation Report](./concept-validation-report.md).

## References

- [Concept Index](./concept-index.md)
- [Concept Categories](./concept-categories.md)
- [Concept Governance](./concept-governance.md)
- [Volume 01 Blueprint](../01-programming/volume-blueprint.md)
- [Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
