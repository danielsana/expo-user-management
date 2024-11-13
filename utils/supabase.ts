import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ynspbdnareugflcgzcgj.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluc3BiZG5hcmV1Z2ZsY2d6Y2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MzA3MDEsImV4cCI6MjA0NzAwNjcwMX0.yobt46EWbU8lQG3yjzKjDVZ-9gVyMTsYqaau2PSX6Wc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})