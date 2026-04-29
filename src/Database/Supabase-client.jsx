import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://eztfksunzwapvbtzhkya.supabase.co"
const supbaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY

export const Supabse =  createClient(supabaseURL,supbaseApiKey)