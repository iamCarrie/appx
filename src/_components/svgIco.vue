<script setup>
const props = defineProps({
  name: {
    type: String,
    require: true,
  },
  style: {
    type: String,
    default: "",
  }
});
</script>
<template>
  <svg
    class="h-full w-full fill-current align-middle"
    :class="props.style"
  >
    <use :xlink:href="`#${props.name}`" />
  </svg>
</template>

<style lang="postcss"></style>
