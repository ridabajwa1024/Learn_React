import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yimktcoebcyekpjtqqfu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbWt0Y29lYmN5ZWtwanRxcWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNTU1ODIsImV4cCI6MjA3MTczMTU4Mn0.AASWlfj7JpXER97CaTuqDyF6-Ywqz80kUnbXLgHpLsA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
