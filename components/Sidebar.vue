<template>
  <div>
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      @click="showSidebar = !showSidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
      <span class="sr-only">Open sidebar</span>
      <Icon
        name="ic:baseline-density-small"
        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
      />
    </button>

    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen sm:block"
      :class="showSidebar ? '' : 'hidden'"
      aria-label="Sidebar"
    >
      <button
        type="button"
        @click="showSidebar = !showSidebar"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open sidebar</span>
        <Icon
          name="ic:baseline-density-small"
          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
        />
      </button>
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <span class="ml-3">Music Streaming App</span>
            </a>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <Icon
                name="ic:round-home"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />

              <span class="flex-1 ml-3 whitespace-nowrap">Home Page</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/add"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <Icon
                name="ic:baseline-library-music"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="flex-1 ml-3 whitespace-nowrap">Add Audio</span>
            </NuxtLink>
          </li>
          <div v-if="!piniaGetLogState()">
            <li>
              <NuxtLink
                to="/signUp"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <Icon
                  name="ic:baseline-contact-mail"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                />
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/signIn"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <Icon
                  name="ic:sharp-contacts"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                />
                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </NuxtLink>
            </li>
          </div>

          <li v-else>
            <button
              @click.prevent="signOutUser"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <Icon
                name="ic:baseline-output"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </button>
          </li>
        </ul>
        <div>signed in as: {{ user ? user.email : "None" }}</div>
      </div>
    </aside>
  </div>
</template>

<script setup>
// import usePiniaStore from "@/stores/store";
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
// const storeS = usePiniaStore();

const showSidebar = ref(false);

const signOutUser = async () => {
  console.log("signing out");
  const responce = await client.auth.signOut();
  // storeS.setLoggedInState(false);
  piniaState(false);
  console.log(responce);
};
</script>
