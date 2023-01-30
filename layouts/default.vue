<template>
  <div>
    <div class="flex flex-col sm:flex-row relative">
      <div class="flex-none w-64">
        <Sidebar />
      </div>
      <div class="flex-auto m-5 md:m-14">
        <slot />
      </div>
      <AudioPlayer class="fixed bottom-0 right-0" />
    </div>
  </div>
</template>
