<script setup>
const props = defineProps({
  name: {
    type: String,
    require: true,
  },
});
</script>
<template>
  <svg class="fill-current align-middle">
    <use :xlink:href="`#${props.name}`" />
  </svg>
</template>

<style lang="postcss"></style>
