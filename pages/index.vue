<script setup>
const cpp = [
  { title: "Урок 1 - введение", href: "/cpp/setup" },
  {
    title: "Урок 2 - переменные и работа с математикой",
    href: "/cpp/variables-and-math",
  },
  {
    title: "Урок 3 - случайные числа",
    href: "/cpp/random-numbers",
  },
  {
    title: "Урок 4 - ветвления (if)",
    href: "/cpp/if-else",
  },
];
</script>

<template>
  <BasePageLayout>
    <div class="prose prose-neutral prose-invert">
      <h1 class="text-4xl font-extrabold">Лёша помоги!</h1>
      <p>Сайту лёшапомоги.рф 1 год 🎉</p>

      <h2>C++</h2>
      <ul>
        <li v-for="item in cpp">
          <NuxtLink :to="item.href" `>{{ item.title }}</NuxtLink>
        </li>
      </ul>

      <h3>HTML</h3>
      <ul>
        <li>
          <NuxtLink to="/html/" `>HTML за 8 класс</NuxtLink>
        </li>
      </ul>
    </div>
  </BasePageLayout>
</template>
