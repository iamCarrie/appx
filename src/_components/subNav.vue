<script setup>
import { watchEffect, ref } from 'vue'


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
  },
  nested:{
    type:Number,
    default:0
  }
})

const subNavActive = ref('')
let subNested = ref(props.nested+1)

watchEffect(() => {
  if(!props.isNavActive)subNavActive.value = 0
})


</script>

<template>
  <ul class="overflow-hidden transition-all max-h-0 h-0" :class="{'opacity-0 pointer-events-none':!props.isNavActive , 'h-auto max-h-[1000px]' : props.isNavActive}">
    <li v-for="item in data" :key="item.key">
      <a 
        href="javascript:;" class="flex items-center pl-[55px] py-[10px]" :class="`hover:bg-[#ededed]`"  
        :style="`padding-left:${55+10*subNested}px`"
        @click="subNavActive !== item.key ? subNavActive = item.key : subNavActive = ''"
      >
        <p class="text-[14px]" :class="{ 'text-[#565867] font-[500]' : subNested >= 2 , 'font-[600]' : subNested < 2}">{{ item.text }}</p>
        <i v-if="item.children" class="flex-shrink-0 ml-[5px]">
          <svgIco name="arrow" class="w-[10px] h-[5px] ml-[30px]"/>
        </i>
      </a>
      <subNav :data="item.children" :isNavActive="subNavActive === item.key" :nested="subNested"></subNav>
    </li>
  </ul>
</template>

<style scoped>

</style>
