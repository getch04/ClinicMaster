// auth/authService.ts
import { supabase } from "../db/dbClient";

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data.user;
};
