<template>
  <div>
    <div>
      <!-- <div>Pinia State {{ storeS.logState }}</div> -->
      <!-- <div>signed in as: {{ user ? user.email : "None" }}</div> -->
      <div v-if="musicData.data?.length! != 0" v-for="file in musicData.data">
        <div v-if="file.metadata.size != 0">
          <div>
            <button
              @click="setAudio(file.name, file.name)"
              class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ file.name }}
              </h5>
            </button>
          </div>
        </div>
      </div>

      <div v-else>
        <NoTracks />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePiniaStore } from "@/stores/store";
definePageMeta({
  middleware: ["auth"],
});
const storeS = usePiniaStore();
const config = useRuntimeConfig();
const client = useSupabaseClient();
const user = useSupabaseUser();

const musicData = await client.storage.from("music-files").list("music");
console.log(musicData);

function setAudio(name: string, title: string) {
  console.log(`setting audio ${name}`);
  storeS.setAudio(name, title);
}
</script>
