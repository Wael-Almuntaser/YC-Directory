import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID ? "Set" : "Not set",
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET ? "Set" : "Not set",
    AUTH_SECRET: process.env.AUTH_SECRET ? "Set" : "Not set",
    NODE_ENV: process.env.NODE_ENV,
  });
} 