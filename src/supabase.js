import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://apojxjkbflgoshkaijyn.supabase.co";

const supabaseKey = "sb_publishable_BP54pIBtUzRnK1N4fYIspA_uuejPn6K";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);