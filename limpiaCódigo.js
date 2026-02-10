// Estas variables las configuraremos en el panel de Vercel luego
const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || window._env_?.SUPABASE_URL; 
const SUPABASE_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || window._env_?.SUPABASE_KEY;

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
