# Nuxt 3 Supabase - Simple Music Streaming App

Simple Music Streaming App FOR TESTING PURPOSES ONLY.

## Setup for local instance of supabase

install Local instance of Supabase using Supabase-CLI and docker

```bash
supabase init
supabase start
```

copy the API_URL and ANON_KEY into enviroment variables SUPABASE_URL and SUPABASE_KEY.

Open Supabase studio and create a public storage bucket named 'music-files' and create a folder named 'music' inside the bucket.

Open 'policies' under Configuration section.

Under 'Policies under storage.buckets' select template 'Enable read access for all users'.

for 'music-files', click 'New Policy' and 'For Full Customization', select "SELECT" & "INSERT" for Allowed Operations and apply the policy.

Now run the app and sign up with new user. Open "Add Audio" Tab on the sidebar and start adding music. The audio files will be shown in the Home Page Tab.

## issues

auth middleware not working properly and auth not checked properly.
