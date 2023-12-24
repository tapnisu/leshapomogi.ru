<template>
  <div>
    <select
      v-model="$colorMode.preference"
      class="bg-white text-black dark:bg-black dark:text-white"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<style>
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
