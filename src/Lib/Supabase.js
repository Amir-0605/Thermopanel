import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qtscpptnapihwdeckwne.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0c2NwcHRuYXBpaHdkZWNrd25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1NzQ2MjIsImV4cCI6MjA5OTE1MDYyMn0.GnAZaB9RTIaLWc_FjtGyAq1XQlJwckvBvPZfJrc6N-k";

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);



// Вариант 1 (рекомендую) — Supabase Storage

// Дядя сможет загружать фотографии прямо с телефона.

// Как это работает:

// Открывает Supabase в браузере телефона.
// Заходит в Storage → images.
// Нажимает Upload.
// Выбирает фотографию из галереи.
// После загрузки нажимает на файл → Copy public URL.
// Открывает Table Editor → catalog.
// Вставляет ссылку в поле image.

// Это работает, но нужно копировать ссылку вручную.