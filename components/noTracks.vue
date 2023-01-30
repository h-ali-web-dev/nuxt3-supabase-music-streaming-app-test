<template>
  <div>
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            No tracks found
          </h1>
          <p class="mb-8 leading-relaxed">Start adding tracks!</p>
          <div class="flex justify-center">
            <NuxtLink
              to="/add"
              class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
            >
              Add tracks
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
