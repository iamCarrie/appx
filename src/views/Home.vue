<script setup>
import { getList } from "@js/_axios";
import { ref, reactive, onMounted, provide, computed } from "vue";

const list = reactive({
  data: "",
});
const pageNum = ref(1);
const limit = ref(10);
const pages = computed(() => {
  return Math.ceil(list.data.length / limit.value);
});

onMounted(() => {
  getApi();
});

async function getApi() {
  const getNavList = await getList();
  if (getNavList.status === 200) {
    list.data = getNavList.data;
    for (let i = 0; i < list.data.length; i++) {
      const obj = list.data[i];
      if (obj) {
        obj.number = i;
      }
    }
  }
}

function changePage(pageNum, data) {
  const firstList = limit.value * (pageNum - 1);
  const lastList = firstList + limit.value;
  const pageList = [];

  for (let i = firstList; i < lastList; i++) {
    const obj = data[i];
    if (obj) {
      pageList.push(obj);
    }
  }
  return pageList;
}

function cacelList(num) {
  let idx = list.data.findIndex((obj) => obj.number === num);
  list.data.splice(idx, 1);
  changePage(pageNum, list.data);
}
</script>

<template>
  <div class="tm:relative tm:mb-[15px] p:hidden">
    <input
      type="text"
      class="block overflow-hidden rounded-[8px] border-[1px] border-solid border-[#F2F2F7] px-[15px] tm:h-[42px] tm:w-full tm:text-[14px] p:h-[48px] p:w-[218px]"
      placeholder="Search here..."
    />
    <i
      class="absolute right-0 top-0 flex h-full cursor-pointer items-center py-[5px] pl-[10px] pr-[15px] text-[#000]"
    >
      <svgIco name="serch" class="h-[20px] w-[20px]" />
    </i>
  </div>
  <form
    class="w-full bg-[#fff] tm:space-y-[20px] tm:px-[17px] tm:py-[24px] p:flex p:items-end p:space-x-[15px] p:px-[22px] p:py-[25px]"
  >
    <div>
      <p class="mb-[8px] text-[14px] leading-[21px] text-[#737791]">Category</p>
      <div class="relative tm:h-[38px] tm:w-full p:h-[48px] p:w-[222px]">
        <select
          name="Announcement"
          class="block h-full w-full appearance-none overflow-hidden rounded-[8px] border-[1px] border-solid border-[#F2F2F7] px-[16px] py-[2px] text-[#151D48] tm:text-[14px]"
        >
          <option value="HR Announcemen">HR Announcement</option>
          <option value="News">News</option>
          <option value="HR Announcemen">All</option>
        </select>
        <i
          class="absolute right-[15px] top-1/2 ml-[5px] flex-shrink-0 -translate-y-1/2 transform"
        >
          <svgIco name="arrow" class="h-[5px] w-[10px]" />
        </i>
      </div>
    </div>
    <div>
      <p
        class="font-poppins mb-[5px] text-[14px] font-[400] leading-[21px] text-[#737791]"
      >
        Subtitle
      </p>
      <input
        type="text"
        class="block overflow-hidden rounded-[8px] border-[1px] border-solid border-[#F2F2F7] px-[15px] tm:h-[38px] tm:w-full tm:text-[14px] p:h-[48px] p:w-[218px]"
      />
    </div>
    <button
      type="submit"
      class="flex h-[48px] items-center justify-center rounded-[8px] bg-[#F2F2F7] px-[15px] tm:w-full"
    >
      <p>Search</p>
    </button>
  </form>
  <section
    v-if="list.data"
    class="mt-[30px] tm:bg-[#fff] tm:px-[10px] tm:py-[15px] p:space-y-[15px]"
  >
    <header class="flex items-center">
      <p class="flex-grow text-[16px] font-[600] text-[#11263C]">
        My Collection
      </p>
      <div class="flex items-center tm:hidden">
        <p class="text-[16px] font-[600] text-[#737791]">
          Total {{ list.data.length }} |
        </p>
        <div class="ml-[26px] flex items-center space-x-[20px]">
          <button
            type="button"
            class="rotate-90 disabled:opacity-20"
            @click="changePage(pageNum--, list.data)"
            :disabled="pageNum === 1"
          >
            <i class="block">
              <svgIco name="arrow" class="h-[5px] w-[10px]" />
            </i>
          </button>
          <div class="relative h-[32px] w-[40px]">
            <select
              v-model="pageNum"
              name="Announcement"
              class="block h-full w-full appearance-none overflow-hidden rounded-[5px] px-[10px] text-[14px] text-[#737791]"
              @change="changePage(pageNum, list.data)"
            >
              <option v-for="i in pages" :value="i" :key="`page${i}`">
                {{ i }}
              </option>
            </select>
            <i
              class="absolute right-[5px] top-1/2 ml-[5px] flex-shrink-0 -translate-y-1/2 transform"
            >
              <svgIco name="arrow" class="h-[5px] w-[10px]" />
            </i>
          </div>
          <button
            type="button"
            class="rotate-[270deg] disabled:opacity-20"
            @click="changePage(pageNum++, list.data)"
            :disabled="pageNum === pages"
          >
            <i class="block">
              <svgIco name="arrow" class="h-[5px] w-[10px]" />
            </i>
          </button>
        </div>
      </div>
    </header>
    <div class="bg-[#fff] p:border-[1px] p:border-solid p:border-[#d5d5da]">
      <ul>
        <li
          v-for="(item, i) in changePage(pageNum, list.data)"
          :key="`list_${i}`"
          class="border-b-[1px] border-solid border-[#d5d5da] last:border-none tm:px-[8px] p:px-[15px] p:py-[18px]"
        >
          <div
            class="relative tm:space-y-[10px] tm:pb-[10px] tm:pt-[26px] p:pl-[50px]"
          >
            <div class="items-center tm:flex">
              <button
                type="button"
                class="p:absolute p:left-[15px] p:top-[3px]"
                @click="cacelList(item.number)"
              >
                <i class="block h-[19px] align-top">
                  <svgIco name="mark" class="h-[19px] w-[13px]" />
                </i>
              </button>
              <p
                class="right-0 top-0 rounded-[38px] bg-[#ededed] px-[8px] py-[2px] text-[12px] text-[#11263C] tm:ml-[17px] p:absolute"
              >
                News
              </p>
            </div>
            <div class="tm:space-y-[10px] p:flex p:flex-wrap">
              <p
                class="w-full text-[14px] font-[500] leading-[24px] p:mb-[10px] p:pr-[100px]"
              >
                {{ item.number + 1 }} {{ item.text }}
              </p>
              <div class="flex items-center space-x-[25px]">
                <button type="button" class="flex items-center">
                  <i>
                    <svgIco name="like" class="h-[15px] w-[15px]" />
                  </i>
                  <p class="ml-[6px] text-[12px] text-[#737791]">150 Likes</p>
                </button>
                <button type="button" class="flex items-center">
                  <i>
                    <svgIco name="comment" class="h-[15px] w-[15px]" />
                  </i>
                  <p class="ml-[6px] text-[12px] text-[#737791]">10 Comments</p>
                </button>
                <button type="button" class="flex items-center">
                  <i>
                    <svgIco name="up-right" class="h-[15px] w-[12px]" />
                  </i>
                  <p class="ml-[6px] text-[12px] text-[#737791]">5 Shares</p>
                </button>
              </div>
              <time
                datetime="2022-12-19"
                class="block text-[12px] font-[400] text-[#737791] p:flex-grow p:text-right"
                >Dec 19, 2022</time
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
