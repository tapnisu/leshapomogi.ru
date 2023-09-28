<template>
  <BasePageLayout>
    <article class="prose lg:prose-xl prose-neutral prose-invert">
      <ContentDoc v-slot="{ doc }">
        <h1>
          {{ doc.title }}
        </h1>

        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </BasePageLayout>
</template>
