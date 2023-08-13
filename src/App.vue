<script setup>

import { getNav } from "@js/_axios";
import { ref, reactive, onMounted, provide } from "vue";
import Nav from '@components/nav.vue'


const isNavActive = ref(false)
const toggleActive = (data) => {
  data = !data
  console.log(data)
}
const menu = reactive({
  data:''
})

onMounted(() => {
  getApi();
});

async function getApi(){
  const getNavApi = await getNav()
  if(getNavApi.status === 200){
    menu.data = getNavApi.data

    console.log(getNavApi)
    console.log(typeof getNavApi.data)
  }

}


</script>

<template>
  <div v-if="menu.data" class="lBd w-full p:max-w-[1440px] m-auto">
    <header class="flex items-center top-0 z-[10] p:py-[28px] p:px-[25px] tm:sticky tm:bg-[#fff] tm:py-[20px] tm:px-[15px]">
      <div class="flex items-center p:pr-[52px]">
        <button 
          type="button" 
          class="
            m-nav-btn j-menu-btn
            flex-shrink-0 relative w-[20px] h-[16px] mr-[30px]
          "
          @click="isNavActive = !isNavActive"
        >
          <i></i>
        </button>
        <a href="/" class="block p:w-[164px] tm:w-[93px]">
          <ImgSrc src="logo.jpg"/>
        </a>
      </div>
      <div class="flex items-center p:space-x-[8px] tm:flex-grow tm:justify-end">
        <div class="relative p:h-[48px] p:w-[245px] tm:hidden">
          <input type="text" class="w-full h-full border-[#737791] border-solid border-[1px] rounded-[8px] py-[2px] pr-[32px] pl-[24px] tm:opacity-0 tm:absolute tm:right-0 tm:w-[0]" placeholder="Serch here...">
          <i class="flex items-center text-[#000] absolute cursor-pointer p:border-solid p:border-[#000] p:border-l-[1px] my-[10px] pl-[10px] pr-[15px] py-[5px] top-0 right-0 ">
            <svgIco name="serch" class="w-[20px] h-[20px]"/>
          </i>
        </div>
        <div class="relative overflow-hidden h-[48px] w-[100px] tm:hidden">
          <select name="" id="" class="w-full h-full appearance-none border-[#737791] text-[#737791] border-solid border-[1px] rounded-[8px] py-[2px] px-[16px]">
            <option value="By All">By All</option>
            <option value="By Station">By Station</option>
            <option value="By Country">By Country</option>
          </select>
          <i class="absolute transform -translate-y-1/2 top-1/2 flex-shrink-0 right-[10px] ml-[5px]">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </div>
      </div>
      <div class="flex items-center justify-end p:space-x-[50px] p:flex-grow tm:space-x-[20px]">
        <div class="flex items-center space-x-[14px] tm:hidden">
          <div class="flex items-center">
            <i>
              <svgIco name="weather" class="w-[20px] h-[20px]"/>
            </i>
            <p class="font-bold ml-[12px]">09:54 am</p>
          </div>
          <div class="relative overflow-hidden h-[48px] w-[170px]">
            <select name="" id="" class="w-full h-full appearance-none bg-[#f2f2f7] text-[#737791] py-[2px] px-[16px]">
              <option value="Antananarivo">Antananarivo</option> 
              <option value="Hongkong">Hongkong</option>
              <option value="Taipei">Taipei</option>
              <option value="Tokyo">Tokyo</option>
            </select>
            <i class="absolute transform -translate-y-1/2 top-1/2 flex-shrink-0 right-0 ml-[5px]">
              <svgIco name="arrow" class="w-[10px] h-[5px]"/>
            </i>
          </div>
        </div>
        <button type="button">
          <i>
            <svgIco name="serch" class="p:w-[28px] p:h-[28px] tm:w-[18px] tm:h-[18px]"/>
          </i>
        </button>
        <button type="button">
          <i>
            <svgIco name="sys" class="p:w-[28px] p:h-[28px] tm:w-[20px] tm:h-[20px]"/>
          </i>
        </button>
        <button type="button" class="relative tm:hidden">
          <i>
            <svgIco name="alert" class="w-[26px] h-[28px]"/>
          </i>
          <small class="rounded-full block absolute right-0 top-0 bg-[#000] w-[7px] h-[7px]"></small>
        </button>
        <div>
          <button type="button" class="flex items-center">
            <ImgSrc
              src="account.png"
              class="overflow-hidden rounded-full p:w-[50px] p:h-[50px] tm:w-[28px] tm:h-[28px]"
            />
            <i class="flex-shrink-0 ml-[5px] tm:hidden">
              <svgIco name="arrow" class="w-[10px] h-[5px]"/>
            </i>
          </button>
        </div>
      </div>
    </header>
    <main class="flex overflow-hidden p:pr-[26px]">
      <Nav :data="menu.data" :isNavActive="isNavActive"/>
      <div class="flex-grow p:pt-[20px] tm:px-[15px]">
        <ul class="flex font-[500] text-[14px] mb-[25px] px-[8px]">
          <li>
            <p class="text-[#737791] after:content-['>'] after:mx-[15px]">Home</p>
          </li>
          <li>
            <a href="#" class="font-bold text-[#121212]">My Collection</a>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>
