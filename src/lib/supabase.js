import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnon) {
  console.error(
    '[CRITICAL ERROR] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
    'The application requires these variables to be set in .env.local for backend operations.'
  );
}

export const supabase = supabaseUrl && supabaseAnon 
  ? createClient(supabaseUrl, supabaseAnon)
  : null;
