<script setup>

import { getList } from "@js/_axios";
import { ref, reactive, onMounted, provide, computed } from "vue";



const list = reactive({
  data:''
})
const pageNum = ref(1)
const limit = ref(10)
const pages = computed(()=> { return Math.ceil(list.data.length / limit.value)})

onMounted(() => {
  getApi();
});

async function getApi(){
  const getNavList = await getList()
  if(getNavList.status === 200){
    list.data = getNavList.data
  }
}

function changePage(pageNum , data){
  const firstList = limit.value * (pageNum-1)
  const lastList = firstList+limit.value
  const pageList =[]

  for (let i = firstList; i < lastList; i++) {
    const obj = data[i];
    if(obj){
      obj.number = i
      pageList.push(obj)
    }
  }
  return pageList
}
</script>

<template>
  <form class="bg-[#fff] w-full p:flex p:items-end p:px-[22px] p:py-[25px] p:space-x-[15px] tm:px-[17px] tm:py-[24px] tm:space-y-[20px]">
  <div>
    <p class="text-[#737791] text-[14px] leading-[21px] mb-[8px]">Category</p>
    <div class="relative p:h-[48px] p:w-[222px] tm:w-full tm:h-[38px]">
      <select name="Announcement" class="block w-full h-full overflow-hidden border-solid border-[1px] border-[#F2F2F7] rounded-[8px] appearance-none text-[#151D48] py-[2px] px-[16px] text-[14px]">
        <option value="HR Announcemen">HR Announcement</option> 
        <option value="News">News</option> 
        <option value="HR Announcemen">All</option> 
      </select>
      <i class="absolute transform -translate-y-1/2 top-1/2 flex-shrink-0 right-[15px] ml-[5px]">
        <svgIco name="arrow" class="w-[10px] h-[5px]"/>
      </i>
    </div>
  </div>
  <div>
    <p class="text-[#737791] font-poppins text-[14px] font-[400] leading-[21px] mb-[5px]">Subtitle</p>
    <input type="text" class="block overflow-hidden border-solid border-[1px] border-[#F2F2F7] rounded-[8px] px-[15px] p:h-[48px] p:w-[218px] tm:w-full tm:h-[38px]">
  </div>
  <button type="submit" class="flex items-center justify-center bg-[#F2F2F7] rounded-[8px] px-[15px] h-[48px] tm:w-full">
    <p>Search</p>
  </button>
</form>
<section v-if="list.data" class="mt-[30px] p:space-y-[15px] tm:bg-[#fff] tm:px-[10px] tm:py-[15px]">
  <header class="flex items-center">
    <p class="flex-grow text-[#11263C] font-[600] text-[16px]">My Collection</p>
    <div class="flex items-center tm:hidden">
      <p class="text-[#737791] font-[600] text-[16px]">Total {{ list.data.length }} |</p>
      <div class="flex items-center space-x-[20px] ml-[26px]">
        <button type="button" class="rotate-90 disabled:opacity-20" @click="changePage(pageNum--, list.data)" :disabled="pageNum === 1">
          <i class="block">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </button>
        <div class="relative h-[32px] w-[40px]">
          <select 
          v-model="pageNum" 
          name="Announcement" 
          class="block w-full h-full overflow-hidden rounded-[5px] appearance-none text-[#737791] px-[10px] text-[14px]"
          @change="changePage(pageNum,list.data)"
        >
            <option v-for="i in pages" :value="i" :key="`page${i}`">{{ i }}</option> 
          </select>
          <i class="absolute transform -translate-y-1/2 top-1/2 flex-shrink-0 right-[5px] ml-[5px]">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </div>
        <button type="button" class="rotate-[270deg] disabled:opacity-20" @click="changePage(pageNum++, list.data)" :disabled="pageNum === pages">
          <i class="block">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </button>
      </div>
    </div>
  </header>
  <div class="bg-[#fff] p:border-solid p:border-[1px] p:border-[#d5d5da] ">
    <ul>
      <li v-for="item,i in changePage(pageNum,list.data)" :key="`list_${i}`" class="border-solid border-[#d5d5da] border-b-[1px] last:border-none p:px-[15px] p:py-[18px] tm:px-[8px]">
        <div class="relative p:pl-[50px] tm:space-y-[10px] tm:pt-[26px] tm:pb-[10px]">
          <div class="tm:flex items-center">
            <button type="button" class="p:absolute p:left-[15px] p:top-[3px]">
              <i class="block align-top h-[19px]">
                <svgIco name="mark" class="w-[13px] h-[19px]"/>
              </i>
            </button>
            <p class="bg-[#ededed] text-[#11263C] top-0 right-0 rounded-[38px] py-[2px] px-[8px] text-[12px] p:absolute tm:ml-[17px]">News</p>
          </div>
          <div class="p:flex p:flex-wrap tm:space-y-[10px]">
            <p class="w-full font-[500] text-[14px] leading-[24px] p:mb-[10px] p:pr-[100px]">{{ item.number+1 }} {{ item.text }}</p>
            <div class="flex items-center space-x-[25px]">
              <button type="button" class="flex items-center">
                <i>
                  <svgIco name="like" class="w-[15px] h-[15px]"/>
                </i>
                <p class="text-[#737791] ml-[6px] text-[12px]">150 Likes</p>
              </button>
              <button type="button" class="flex items-center">
                <i>
                  <svgIco name="comment" class="w-[15px] h-[15px]"/>
                </i>
                <p class="text-[#737791] ml-[6px] text-[12px]">10 Comments</p>
              </button>
              <button type="button" class="flex items-center">
                <i>
                  <svgIco name="up-right" class="w-[12px] h-[15px]"/>
                </i>
                <p class="text-[#737791] ml-[6px] text-[12px]">5 Shares</p>
              </button>
            </div>
            <time datetime="2022-12-19" class="block text-[#737791] font-[400] text-[12px] p:flex-grow p:text-right">Dec 19, 2022</time>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
</template>
