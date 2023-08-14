<script setup>
import { watchEffect, ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default() {
      return {};
    },
  },
  isNavActive: {
    type: Boolean,
    default: false,
  },
  nested: {
    type: Number,
    default: 0,
  },
});

const subNavActive = ref("");
let subNested = ref(props.nested + 1);

watchEffect(() => {
  if (!props.isNavActive) subNavActive.value = 0;
});
</script>

<template>
  <ul
    class="h-0 max-h-0 overflow-hidden transition-all"
    :class="{
      'pointer-events-none opacity-0': !props.isNavActive,
      'h-auto max-h-[1000px]': props.isNavActive,
    }"
  >
    <li v-for="item in data" :key="item.key">
      <a
        href="javascript:;"
        class="flex items-center py-[10px] pl-[55px]"
        :class="`hover:bg-[#ededed]`"
        :style="`padding-left:${55 + 10 * subNested}px`"
        @click="
          subNavActive !== item.key
            ? (subNavActive = item.key)
            : (subNavActive = '')
        "
      >
        <p
          class="text-[14px]"
          :class="{
            'font-[500] text-[#565867]': subNested >= 2,
            'font-[600]': subNested < 2,
          }"
        >
          {{ item.text }}
        </p>
        <i v-if="item.children" class="ml-[5px] flex-shrink-0">
          <svgIco name="arrow" class="ml-[30px] h-[5px] w-[10px]" />
        </i>
      </a>
      <subNav
        :data="item.children"
        :isNavActive="subNavActive === item.key"
        :nested="subNested"
      ></subNav>
    </li>
  </ul>
</template>

<style scoped></style>
