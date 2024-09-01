import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wwjbpjltmwcvsmrnfexq.supabase.co";

const supabaseServisKey = process.env.VITE_SUPABASE_SERVICE_KEY;

export const supabase = createClient(supabaseUrl, supabaseServisKey);
