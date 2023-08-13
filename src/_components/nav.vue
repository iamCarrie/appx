<script setup>
import { ref,watchEffect } from "vue";
import subNav from "@components/subNav.vue";


const props = defineProps({
  data:{
    type:Object,
    default(){
      return {}
    }
  },
  isNavActive: {
    type:Boolean,
    default:false
  }
})


const subNavActive = ref('')
const nested = ref(0)

watchEffect(() => {
  if(!props.isNavActive)subNavActive.value = 0
})

</script>

<template>
 <nav class="overflow-hidden flex-shrink-0 transition-all" :class="{ '!w-[260px]' : props.isNavActive , 'w-[80px]' : !props.isNavActive}">
    <ul>
      <li class="group/nav" v-for="item in props.data" :key="item.key">
        <!-- {{ item }} -->
        <a 
          href="javascript:;" class="flex items-center px-[26px] py-[15px]"
          :class="{ 
            'group-hover/nav:bg-[#d8dde8]'
            :props.isNavActive
          }"
          @click="subNavActive !== item.key ? subNavActive = item.key : subNavActive = ''"
        >
          <i class="
              relative 
            "
            :class="{ 
              'p:before:transition-all p:before:absolute p:before:rounded-[10px] p:before:w-[40px] p:before:h-[40px] p:before:-translate-x-1/2 p:before:-translate-y-1/2 p:before:top-1/2 p:before:left-1/2 p:hover:before:bg-[#d8dde8]' 
              : !props.isNavActive}"
          >
            <svgIco name="home" class="relative z-1 w-[18px] h-[20px]"/>
          </i>
          <p 
            class="flex-shrink-0 ml-[10px] text-[16px] font-[600] flex-grow"
            :class="{'opacity-0 pointer-events-none':!props.isNavActive}"
          >{{ item.text }}</p>
          <i class="flex-shrink-0 ml-[5px]">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </a>
        <subNav v-if="item.children" :data="item.children" :isNavActive="subNavActive === item.key && props.isNavActive" :nested="nested"/>
        
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
