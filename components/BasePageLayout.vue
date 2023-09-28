<script setup lang="ts">
useHead({
  title: "Лёша помоги",
  meta: [
    { name: "description", content: "Леша помоги!!!!" },
    {
      name: "og:description",
      content: "Леша помоги!!!!",
    },
    { name: "og:title", content: "Лёша помоги" },
    { name: "og:url", content: "https://leshapomogi.ru" },
    { name: "og:image", content: "https://leshapomogi.ru/og.png" },
    { name: "twitter:image", content: "https://leshapomogi.ru" },
    { name: "twitter:card", content: "summary_large_image" },
  ],

  htmlAttrs: {
    lang: "ru",
  },
});
</script>

<template>
  <main class="min-h-screen flex justify-center bg-black text-white">
    <div class="w-[768px] flex flex-col justify-between">
      <Header />
      <div class="flex justify-center">
        <slot />
      </div>
      <Footer />
    </div>
  </main>
</template>
