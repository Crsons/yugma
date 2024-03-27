import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from "dotenv";
dotenv.config();
// for query purposes
const queryClient = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryClient,{schema});
export {db};