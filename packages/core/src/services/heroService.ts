// services/userService.ts
import { supabase } from '../db/dbClient';

export const getHeroData = async (Id: string) => {
  const { data, error } = await supabase.from('users').select('*').eq('id', Id).single();
  if (error) throw error;
  return data;
};
