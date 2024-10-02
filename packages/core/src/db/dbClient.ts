import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config();

const SUPABASE_PROJECT_URL = "https://wybkfeeirvgrakgsntsc.supabase.co"
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YmtmZWVpcnZncmFrZ3NudHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3ODY3MjMsImV4cCI6MjA0MzM2MjcyM30.zP4LSrGcP4ocvR-Wr_ZhV021iko3ExrbyCPB2Bya88k"

// const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
// const supabaseKey = process.env.SUPABASE_API_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error("Missing Supabase environment variables");
// }

export const supabase = createClient(
    SUPABASE_PROJECT_URL as string,
    SUPABASE_API_KEY as string
);
