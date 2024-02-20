import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;


export const supabase = createClientComponentClient();