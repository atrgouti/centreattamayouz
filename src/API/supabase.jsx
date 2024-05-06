import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nakjdtcugewpxktqtvho.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ha2pkdGN1Z2V3cHhrdHF0dmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2MDg0MjgsImV4cCI6MjAzMDE4NDQyOH0.Vzs8ZUuz06_YZ2csmdshRnFYvkWBQqa6yjVpMJBapkc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
