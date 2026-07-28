import { NextResponse } from "next/server";

import { searchAsea } from "@/server/search";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  return NextResponse.json({
    query,
    results: await searchAsea(query),
  });
}
