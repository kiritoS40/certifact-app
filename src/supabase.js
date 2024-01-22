import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wcfkenmpydolwuzgjpra.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjZmtlbm1weWRvbHd1emdqcHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NTc1MzgsImV4cCI6MjAyMDUzMzUzOH0.BhHQY3HlMW3SpKQJt-kT-A2TbCVN8YMfKf8bZb6NlCg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
