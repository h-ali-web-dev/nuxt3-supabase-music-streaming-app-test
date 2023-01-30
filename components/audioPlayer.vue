<template>
  <div>
    <div class="max-w-md bg-slate-400 m-10 p-10">
      <div v-if="storeS.currentAudio != ''">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ storeS.currentTitle }}
        </h5>
        <p class="font-normal text-gray-700">
          <audio
            controls
            autoplay
            :src="`${
                    config.public.supabase.url
                  }/storage/v1/object/public/music-files/music/${storeS.currentAudio!
                    .split(' ')
                    .join('%20')}`"
          >
            ausio
          </audio>
        </p>
      </div>
      <div v-else>No Audio Selected</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePiniaStore } from "@/stores/store";
const storeS = usePiniaStore();
const config = useRuntimeConfig();
</script>
