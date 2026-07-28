import type {
  StudentLongNote,
  StudentProgress,
  StudentShortNote,
} from "@asea/shared";
import { setServers } from "node:dns";
import { MongoClient, type Db } from "mongodb";

export interface MongoDatabaseConfig {
  uri: string;
  databaseName: string;
  dnsServers?: string[];
}

type StoredShortNote = Omit<StudentShortNote, "id"> & { id: string };
type StoredLongNote = Omit<StudentLongNote, "id"> & { id: string };

const globalMongo = globalThis as typeof globalThis & {
  __aseaMongoClientPromise?: Promise<MongoClient>;
};

async function getClient(uri: string) {
  if (!globalMongo.__aseaMongoClientPromise) {
    const client = new MongoClient(uri, {
      appName: "asea-student-app",
      maxPoolSize: 10,
    });
    globalMongo.__aseaMongoClientPromise = client.connect().catch((error) => {
      delete globalMongo.__aseaMongoClientPromise;
      throw error;
    });
  }
  return globalMongo.__aseaMongoClientPromise;
}

export async function getAseaDatabase(
  config: MongoDatabaseConfig,
): Promise<Db> {
  if (!config.uri) {
    throw new Error("MONGODB_URI is not configured.");
  }
  if (config.dnsServers?.length) {
    setServers(config.dnsServers);
  }
  const client = await getClient(config.uri);
  return client.db(config.databaseName || "asea");
}

export async function pingMongoDatabase(config: MongoDatabaseConfig) {
  const database = await getAseaDatabase(config);
  await database.command({ ping: 1 });
  return { ok: true as const, database: database.databaseName };
}

export async function listShortNotes(
  config: MongoDatabaseConfig,
  userId: string,
): Promise<StudentShortNote[]> {
  const database = await getAseaDatabase(config);
  return database
    .collection<StoredShortNote>("short_notes")
    .find({ userId })
    .project<StoredShortNote>({ _id: 0 })
    .sort({ createdAt: -1 })
    .toArray();
}

export async function createShortNote(
  config: MongoDatabaseConfig,
  input: Omit<StudentShortNote, "id" | "createdAt" | "updatedAt">,
): Promise<StudentShortNote> {
  const database = await getAseaDatabase(config);
  const now = new Date().toISOString();
  const note: StudentShortNote = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
  await database.collection<StoredShortNote>("short_notes").insertOne(note);
  return note;
}

export async function listLongNotes(
  config: MongoDatabaseConfig,
  userId: string,
): Promise<StudentLongNote[]> {
  const database = await getAseaDatabase(config);
  return database
    .collection<StoredLongNote>("long_notes")
    .find({ userId })
    .project<StoredLongNote>({ _id: 0 })
    .sort({ updatedAt: -1 })
    .toArray();
}

export async function upsertLongNote(
  config: MongoDatabaseConfig,
  note: StudentLongNote,
): Promise<StudentLongNote> {
  const database = await getAseaDatabase(config);
  const updated = { ...note, updatedAt: new Date().toISOString() };
  await database
    .collection<StoredLongNote>("long_notes")
    .replaceOne({ id: note.id, userId: note.userId }, updated, {
      upsert: true,
    });
  return updated;
}

export async function getStudentProgress(
  config: MongoDatabaseConfig,
  userId: string,
  chapterId: string,
): Promise<StudentProgress | null> {
  const database = await getAseaDatabase(config);
  return database
    .collection<StudentProgress>("student_progress")
    .findOne({ userId, chapterId }, { projection: { _id: 0 } });
}

export async function upsertStudentProgress(
  config: MongoDatabaseConfig,
  progress: StudentProgress,
): Promise<StudentProgress> {
  const database = await getAseaDatabase(config);
  const updated = { ...progress, updatedAt: new Date().toISOString() };
  await database
    .collection<StudentProgress>("student_progress")
    .replaceOne(
      { userId: progress.userId, chapterId: progress.chapterId },
      updated,
      { upsert: true },
    );
  return updated;
}

export async function ensureMongoIndexes(config: MongoDatabaseConfig) {
  const database = await getAseaDatabase(config);
  await Promise.all([
    database
      .collection("short_notes")
      .createIndex({ userId: 1, createdAt: -1 }),
    database.collection("long_notes").createIndex({ userId: 1, updatedAt: -1 }),
    database
      .collection("student_progress")
      .createIndex({ userId: 1, chapterId: 1 }, { unique: true }),
  ]);
}
