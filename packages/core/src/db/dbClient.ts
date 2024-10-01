import * as dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config(); // Load environment variables from .env

const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(
  supabaseUrl as string,
  supabaseKey as string
);
