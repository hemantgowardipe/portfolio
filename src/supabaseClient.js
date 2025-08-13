import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gxfrqjyvvjpmgbzodowu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4ZnJxanl2dmpwbWdiem9kb3d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNjIzMTEsImV4cCI6MjA3MDYzODMxMX0.JGbEk0euoKypo9hj2QHyd4_hdFpwlhM3pZPqUWcasUQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
