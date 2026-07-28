import "server-only";

import type { MongoDatabaseConfig } from "@asea/database";

export const DEMO_USER_ID = process.env.ASEA_DEMO_USER_ID || "demo-onur";

export function getMongoConfig(): MongoDatabaseConfig {
  return {
    uri: process.env.MONGODB_URI ?? "",
    databaseName: process.env.MONGODB_DB || "asea",
    dnsServers: process.env.MONGODB_DNS_SERVERS?.split(",")
      .map((server) => server.trim())
      .filter(Boolean),
  };
}
