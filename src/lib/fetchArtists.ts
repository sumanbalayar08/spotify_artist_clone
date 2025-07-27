import type { Artist } from '../types/artist';
import { supabase } from './supabase';

export async function fetchArtists({
  page = 0,
  limit = 6,
  search = '',
}: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<Artist[]> {
  const from = page * limit;
  const to = from + limit - 1;

  let query = supabase.from('artists').select('*');

  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  query = query.order('name', { ascending: true }).range(from, to);

  const { data, error } = await query;
  if (error) throw error;

  return data as Artist[];
}
