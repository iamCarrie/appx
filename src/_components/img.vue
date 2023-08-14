<script setup>
import { computed } from "vue";

const props = defineProps({
  src: {
    type: String,
    require: true,
  },
  alt: {
    type: String,
    require: true,
  },
  addCss: {
    type: Object,
    default() {
      return {};
    },
  },
});

// const imgPath = computed(() =>
//   /^http/.test(props.src)
//     ? props.src
//     : import.meta.env.MODE === "dev"
//     ? new URL(`/src/assets/imgs/${props.src}`, import.meta.url)
//     : new URL(`/assets/${props.src}`, import.meta.url).href
// );

function getImageUrl(img) {
  return new URL(`/src/assets/imgs/${img}`, import.meta.url).href;
}

// const cssStyle = computed(() => {
//   if (props.addCss) {
//     console.log(props.addCss.length);
//     const style = {};

//     return style;
//   }
//   return "";
// });
</script>
<template>
  <figure :class="addCss.figure">
    <img
      :src="getImageUrl(props.src)"
      :alt="alt"
      :class="`h-full w-full ${addCss.img}`"
    />
  </figure>
</template>

<style lang="postcss"></style>
