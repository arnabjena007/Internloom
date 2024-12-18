import { PrismaClient } from "@prisma/client";

// Ensure that PrismaClient is only instantiated once
export const db = globalThis.prisma || new PrismaClient();

// In non-production environments, make the Prisma client globally accessible
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
