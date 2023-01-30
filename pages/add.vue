<template>
  <div>
    <div>
      <form>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Upload Audio file</label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="audioFile"
            type="file"
            accept="audio/*"
            required
            v-on:change="fileChange"
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Add title for audio file</label
          >
          <input
            type="text"
            id="audioName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="audioName"
            required
          />
        </div>
        <div class="flex justify-center">
          <button
            @click.prevent="fileSender"
            class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
          >
            Add Audio
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
const client = useSupabaseClient();

const audioName = ref("");

const Files = new FormData();

const fileChange = (e: any) => {
  console.log(e.target.files[0]);
  Files.append("file", e.target.files[0]);
};

async function fileSender() {
  if (audioName.value != "") {
    const data = await client.storage
      .from("music-files")
      .upload(`music/${audioName.value}`, Files);
    console.log(data);
    navigateTo("/");
  }
}
</script>
