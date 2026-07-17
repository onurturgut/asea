import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const repositoryRoot = path.resolve(root, "..");
const errors = [];
const records = new Map();
const groups = {
  source: [],
  evidence: [],
  claim: [],
  concept: [],
  edge: [],
  "research-brief": [],
  "production-packet": [],
};

const requiredByType = {
  source: [
    "publisher",
    "canonical_url",
    "source_type",
    "tier",
    "publication_or_version_date",
    "accessed_on",
    "usage_rights",
    "freshness_class",
    "verification_status",
  ],
  evidence: [
    "source_id",
    "locator",
    "paraphrase",
    "scope",
    "observed_on",
    "extractor_role",
    "independence_group",
  ],
  claim: [
    "proposition",
    "scope",
    "exceptions",
    "evidence_ids",
    "academic_score",
    "official_score",
    "industry_score",
    "community_score",
    "confidence_score",
    "freshness_score",
    "evidence_count",
    "confidence_components",
    "score_rationale",
    "contradiction_ids",
    "next_review_on",
    "review_decision",
  ],
  concept: [
    "definition",
    "purpose",
    "history",
    "mental_model",
    "analogy",
    "terminology",
    "relationships",
    "prerequisite_ids",
    "real_world_usage",
    "common_mistakes",
    "industry_notes",
    "ai_notes",
    "interview_notes",
    "exercise_candidates",
    "lab_candidates",
    "project_candidates",
    "claim_ids",
    "learning_outcome_ids",
    "difficulty",
    "knowledge_area",
  ],
  edge: [
    "source_concept_id",
    "target_id",
    "relation_type",
    "rationale",
    "evidence_or_decision_ids",
  ],
  "research-brief": [
    "scope_id",
    "target_outcome_ids",
    "prerequisite_ids",
    "in_scope",
    "out_of_scope",
    "required_source_tiers",
    "search_queries",
    "volatile_topics",
    "deliverables",
    "stop_conditions",
  ],
  "production-packet": [
    "chapter_id",
    "chapter_version",
    "blueprint_id",
    "learning_outcome_ids",
    "prerequisite_ids",
    "source_ids",
    "evidence_ids",
    "claim_ids",
    "concept_ids",
    "graph_version",
    "required_components",
    "required_asset_types",
    "assessment_alignment",
    "accessibility_requirements",
    "known_risks",
    "exclusions",
    "review_owners",
    "production_decision",
  ],
};

const commonRequired = [
  "id",
  "record_type",
  "version",
  "workflow_state",
  "title",
  "owner_role",
  "created_on",
  "updated_on",
  "supersedes",
  "tags",
];

const recordLocations = [
  ["registry/sources", "source"],
  ["registry/evidence", "evidence"],
  ["registry/claims", "claim"],
  ["registry/concepts", "concept"],
  ["registry/edges", "edge"],
  ["research-briefs", "research-brief"],
  ["production-packets", "production-packet"],
];

async function jsonFiles(directory) {
  const absolute = path.join(root, directory);
  if (!existsSync(absolute)) return [];
  return (await readdir(absolute, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => path.join(absolute, entry.name));
}

function requireFields(record, fields, file) {
  for (const field of fields) {
    if (!(field in record)) errors.push(`${file}: missing ${field}`);
  }
}

function validSemver(value) {
  return /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(value);
}

for (const schemaFile of await jsonFiles("schemas")) {
  try {
    JSON.parse(await readFile(schemaFile, "utf8"));
  } catch (error) {
    errors.push(`${schemaFile}: invalid schema JSON (${error.message})`);
  }
}

for (const [directory, expectedType] of recordLocations) {
  for (const file of await jsonFiles(directory)) {
    let record;
    try {
      record = JSON.parse(await readFile(file, "utf8"));
    } catch (error) {
      errors.push(`${file}: invalid JSON (${error.message})`);
      continue;
    }

    requireFields(record, commonRequired, file);
    requireFields(record, requiredByType[expectedType], file);
    if (record.record_type !== expectedType) {
      errors.push(`${file}: record_type must be ${expectedType}`);
    }
    if (!validSemver(record.version ?? "")) {
      errors.push(`${file}: invalid SemVer`);
    }
    if (records.has(record.id)) {
      errors.push(`${file}: duplicate ID ${record.id}`);
    } else {
      records.set(record.id, { record, file });
      groups[expectedType].push(record);
    }
    const expectedFilename = `${record.id?.toLowerCase()}.json`;
    if (path.basename(file) !== expectedFilename) {
      errors.push(`${file}: filename must be ${expectedFilename}`);
    }
  }
}

function requireReference(sourceId, targetId, expectedType) {
  const target = records.get(targetId);
  if (!target) {
    errors.push(`${sourceId}: unresolved reference ${targetId}`);
  } else if (expectedType && target.record.record_type !== expectedType) {
    errors.push(`${sourceId}: ${targetId} must reference ${expectedType}`);
  }
}

for (const evidence of groups.evidence) {
  requireReference(evidence.id, evidence.source_id, "source");
}

for (const claim of groups.claim) {
  for (const id of claim.evidence_ids ?? []) requireReference(claim.id, id, "evidence");
  if ((claim.evidence_ids?.length ?? 0) !== claim.evidence_count) {
    errors.push(`${claim.id}: evidence_count does not match evidence_ids`);
  }
  if (claim.review_decision === "Approved" && claim.confidence_score < 80) {
    errors.push(`${claim.id}: Approved claims require confidence_score >= 80`);
  }
}

for (const concept of groups.concept) {
  for (const id of concept.claim_ids ?? []) requireReference(concept.id, id, "claim");
  for (const id of concept.prerequisite_ids ?? []) {
    if (id.startsWith("ASEA-CON-")) requireReference(concept.id, id, "concept");
  }
}

for (const edge of groups.edge) {
  requireReference(edge.id, edge.source_concept_id, "concept");
  if (edge.target_id.startsWith("ASEA-CON-")) {
    requireReference(edge.id, edge.target_id, "concept");
  }
}

const canonicalText = (
  await Promise.all(
    [
      "docs/01-programming/assessment.md",
      "docs/01-programming/learning-outcomes.md",
      "docs/01-programming/chapter-map.md",
    ].map((file) => readFile(path.join(repositoryRoot, file), "utf8")),
  )
).join("\n");

for (const packet of groups["production-packet"]) {
  for (const id of packet.source_ids ?? []) requireReference(packet.id, id, "source");
  for (const id of packet.evidence_ids ?? []) requireReference(packet.id, id, "evidence");
  for (const id of packet.claim_ids ?? []) requireReference(packet.id, id, "claim");
  for (const id of packet.concept_ids ?? []) requireReference(packet.id, id, "concept");
  for (const id of packet.learning_outcome_ids ?? []) {
    if (!canonicalText.includes(id)) errors.push(`${packet.id}: unknown outcome ${id}`);
  }
}

for (const brief of groups["research-brief"]) {
  for (const id of brief.target_outcome_ids ?? []) {
    if (!canonicalText.includes(id)) errors.push(`${brief.id}: unknown outcome ${id}`);
  }
}

const prerequisiteGraph = new Map();
for (const edge of groups.edge.filter(
  (item) =>
    item.relation_type === "prerequisite-of" &&
    item.target_id.startsWith("ASEA-CON-"),
)) {
  const targets = prerequisiteGraph.get(edge.source_concept_id) ?? [];
  targets.push(edge.target_id);
  prerequisiteGraph.set(edge.source_concept_id, targets);
}

const visiting = new Set();
const visited = new Set();
function visit(node) {
  if (visiting.has(node)) {
    errors.push(`prerequisite cycle detected at ${node}`);
    return;
  }
  if (visited.has(node)) return;
  visiting.add(node);
  for (const target of prerequisiteGraph.get(node) ?? []) visit(target);
  visiting.delete(node);
  visited.add(node);
}
for (const node of prerequisiteGraph.keys()) visit(node);

const summary = Object.fromEntries(
  Object.entries(groups).map(([type, items]) => [type, items.length]),
);

if (errors.length) {
  console.error(JSON.stringify({ result: "Fail", summary, errors }, null, 2));
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({ result: "Pass", summary, errors: [] }, null, 2));
}
