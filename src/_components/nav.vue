<script setup>
import { ref, watchEffect } from "vue";
import subNav from "@components/subNav.vue";

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
});

const subNavActive = ref("");
const nested = ref(0);

watchEffect(() => {
  if (!props.isNavActive) subNavActive.value = 0;
});
</script>

<template>
  <nav
    class="flex-shrink-0 overflow-hidden transition-all"
    :class="{
      'tm:w-full p:w-[293px]': props.isNavActive,
      'tm:w-[0] p:w-[80px]': !props.isNavActive,
    }"
  >
    <ul
      class="tm:space-y-[20px] tm:pt-[20px] tm:opacity-0 tm:transition-all tm:delay-100 tm:duration-300 p:space-y-[30px]"
      :class="{ 'tm:opacity-100': props.isNavActive }"
    >
      <li class="group/nav" v-for="item in props.data" :key="item.key">
        <a
          href="javascript:;"
          class="flex px-[26px] py-[15px]"
          :class="{
            'group-hover/nav:bg-[#d8dde8]': props.isNavActive,
          }"
          @click="
            subNavActive !== item.key && props.isNavActive
              ? (subNavActive = item.key)
              : (subNavActive = '')
          "
        >
          <i
            class="relative flex h-[22px] w-[22px] items-center"
            :class="{
              'p:before:absolute p:before:left-1/2 p:before:top-1/2 p:before:h-[40px] p:before:w-[40px] p:before:-translate-x-1/2 p:before:-translate-y-1/2 p:before:rounded-[10px] p:before:transition-all p:hover:before:bg-[#d8dde8]':
                !props.isNavActive,
            }"
          >
            <svgIco :name="item.ico" class="z-1 relative" />
          </i>
          <div
            class="max-h-auto flex flex-shrink-0 items-center transition-all tm:w-[90%] p:w-[223px]"
            :class="{ 'max-h-[30px] overflow-hidden': !props.isNavActive }"
          >
            <p
              class="ml-[10px] flex-grow break-all pr-[34px] text-[16px] font-[600]"
              :class="{ 'pointer-events-none opacity-0': !props.isNavActive }"
            >
              {{ item.text }}
            </p>
            <i
              v-if="item.children"
              class="ml-[5px] flex-shrink-0"
              :class="{ 'pointer-events-none opacity-0': !props.isNavActive }"
            >
              <svgIco name="arrow" class="h-[5px] w-[10px]" />
            </i>
          </div>
        </a>
        <subNav
          v-if="item.children"
          :data="item.children"
          :isNavActive="subNavActive === item.key && props.isNavActive"
          :nested="nested"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
