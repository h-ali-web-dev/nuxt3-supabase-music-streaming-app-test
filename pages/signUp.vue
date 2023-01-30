<template>
  <div>
    <h2>Sign Up Page</h2>
    <form>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          v-model="emailRef"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="email@domain.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          v-model="passRef"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <button
        @click.prevent="signUpUser"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
// import { usePiniaStore } from "@/stores/store";
// const storeS = usePiniaStore();
const client = useSupabaseClient();
const user = useSupabaseUser();

const emailRef = ref("");
const passRef = ref("");

const signUpUser = async () => {
  console.log("responce");

  await client.auth.initialize();
  const responce = await client.auth.signUp({
    email: emailRef.value,
    password: passRef.value,
  });
  console.log(responce);
  if (responce.error == null) {
    await client.auth.signInWithPassword({
      email: emailRef.value,
      password: passRef.value,
    });
    // storeS.setLoggedInState(true);
    piniaState(true);

    navigateTo("/");
  }
};

const signInUser = async () => {
  console.log("responce");

  await client.auth.initialize();
  const responce = await client.auth.signInWithPassword({
    email: emailRef.value,
    password: passRef.value,
  });
  console.log(responce);
};

const signOutUser = async () => {
  console.log("signing out");
  const responce = await client.auth.signOut();
  console.log(responce);
};

const checkUser = async () => {
  const stat = await user.value;
  console.log(stat);
};
</script>
