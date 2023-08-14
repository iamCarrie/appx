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
 <nav class="overflow-hidden flex-shrink-0 transition-all" :class="{ 'p:w-[293px] tm:w-full' : props.isNavActive , 'p:w-[80px] tm:w-[0]' : !props.isNavActive}">
    <ul class="p:space-y-[30px] tm:space-y-[20px] tm:pt-[20px]">
      <li class="group/nav" v-for="item in props.data" :key="item.key">
        <a 
          href="javascript:;" class="flex px-[26px] py-[15px]"
          :class="{ 
            'group-hover/nav:bg-[#d8dde8]'
            :props.isNavActive
          }"
          @click="subNavActive !== item.key && props.isNavActive ? subNavActive = item.key : subNavActive = ''"
        >
          <i 
            
           class="relative flex items-center w-[22px] h-[22px]"
            :class="{ 
              'p:before:transition-all p:before:absolute p:before:rounded-[10px] p:before:w-[40px] p:before:h-[40px] p:before:-translate-x-1/2 p:before:-translate-y-1/2 p:before:top-1/2 p:before:left-1/2 p:hover:before:bg-[#d8dde8]' 
              : !props.isNavActive}"
          >
            <svgIco :name="item.ico" class="relative z-1"/>
          </i>
          <div class="flex items-center  transition-all max-h-auto p:w-[223px] p:flex-shrink-0" :class="{'max-h-[30px] overflow-hidden' :!props.isNavActive}">
            <p 
              class="break-all flex-grow  ml-[10px] text-[16px] font-[600] pr-[34px] "
              :class="{'opacity-0 pointer-events-none':!props.isNavActive}"
            >{{ item.text }}</p>
            <i v-if="item.children" class="flex-shrink-0 ml-[5px]" :class="{'opacity-0 pointer-events-none':!props.isNavActive}">
              <svgIco name="arrow" class="w-[10px] h-[5px]"/>
            </i>
          </div>
        </a>
        <subNav v-if="item.children" :data="item.children" :isNavActive="subNavActive === item.key && props.isNavActive" :nested="nested"/>
        
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
