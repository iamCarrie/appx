<script setup>
import { getNav } from "@js/_axios";
import { ref, reactive, onMounted, provide } from "vue";
import Nav from "@components/nav.vue";

const isNavActive = ref(false);
const menu = reactive({
  data: "",
});

onMounted(() => {
  getApi();
});

async function getApi() {
  const getNavApi = await getNav();
  if (getNavApi.status === 200) {
    menu.data = getNavApi.data;
  }
}
</script>

<template>
  <div v-if="menu.data" class="lBd m-auto w-full p:max-w-[1440px]">
    <header
      class="top-0 z-[10] flex items-center tm:sticky tm:bg-[#fff] tm:px-[15px] tm:py-[20px] p:px-[25px] p:py-[28px]"
    >
      <div class="flex items-center p:pr-[52px]">
        <button
          type="button"
          class="m-nav-btn j-menu-btn relative mr-[30px] h-[16px] w-[20px] flex-shrink-0"
          @click="isNavActive = !isNavActive"
        >
          <i></i>
        </button>
        <a href="/" class="block tm:w-[93px] p:w-[164px]">
          <ImgSrc src="logo.jpg" />
        </a>
      </div>
      <div
        class="flex items-center tm:flex-grow tm:justify-end p:space-x-[8px]"
      >
        <div class="relative tm:hidden p:h-[48px] p:w-[245px]">
          <input
            type="text"
            class="h-full w-full rounded-[8px] border-[1px] border-solid border-[#737791] py-[2px] pl-[24px] pr-[32px] tm:absolute tm:right-0 tm:w-[0] tm:opacity-0"
            placeholder="Serch here..."
          />
          <i
            class="absolute right-0 top-0 my-[10px] flex cursor-pointer items-center py-[5px] pl-[10px] pr-[15px] text-[#000] p:border-l-[1px] p:border-solid p:border-[#000]"
          >
            <svgIco name="serch" class="h-[20px] w-[20px]" />
          </i>
        </div>
        <div class="relative h-[48px] w-[100px] overflow-hidden tm:hidden">
          <select
            name=""
            id=""
            class="h-full w-full appearance-none rounded-[8px] border-[1px] border-solid border-[#737791] px-[16px] py-[2px] text-[#737791]"
          >
            <option value="By All">By All</option>
            <option value="By Station">By Station</option>
            <option value="By Country">By Country</option>
          </select>
          <i
            class="absolute right-[10px] top-1/2 ml-[5px] flex-shrink-0 -translate-y-1/2 transform"
          >
            <svgIco name="arrow" class="h-[5px] w-[10px]" />
          </i>
        </div>
      </div>
      <div
        class="flex items-center justify-end tm:space-x-[20px] p:flex-grow p:space-x-[50px]"
      >
        <div class="flex items-center space-x-[14px] tm:hidden">
          <div class="flex items-center">
            <i>
              <svgIco name="weather" class="h-[20px] w-[20px]" />
            </i>
            <p class="ml-[12px] font-bold text-[#374557]">09:54 am</p>
          </div>
          <div class="relative h-[48px] w-[170px] overflow-hidden">
            <select
              name=""
              id=""
              class="h-full w-full appearance-none bg-[#f2f2f7] px-[16px] py-[2px] text-[#737791]"
            >
              <option value="Antananarivo">Antananarivo</option>
              <option value="Hongkong">Hongkong</option>
              <option value="Taipei">Taipei</option>
              <option value="Tokyo">Tokyo</option>
            </select>
            <i
              class="absolute right-0 top-1/2 ml-[5px] flex-shrink-0 -translate-y-1/2 transform"
            >
              <svgIco name="arrow" class="h-[5px] w-[10px]" />
            </i>
          </div>
        </div>
        <button type="button" class="p:hidden">
          <i>
            <svgIco
              name="serch"
              class="tm:h-[18px] tm:w-[18px] p:h-[28px] p:w-[28px]"
            />
          </i>
        </button>
        <button type="button">
          <i>
            <svgIco
              name="sys"
              class="tm:h-[20px] tm:w-[20px] p:h-[28px] p:w-[28px]"
            />
          </i>
        </button>
        <button type="button" class="relative tm:hidden">
          <i>
            <svgIco name="alert" class="h-[28px] w-[26px]" />
          </i>
          <small
            class="absolute right-0 top-0 block h-[7px] w-[7px] rounded-full bg-[#000]"
          ></small>
        </button>
        <div>
          <button type="button" class="flex items-center">
            <ImgSrc
              src="account.png"
              class="overflow-hidden rounded-full tm:h-[28px] tm:w-[28px] p:h-[50px] p:w-[50px]"
            />
            <i class="ml-[5px] flex-shrink-0 tm:hidden">
              <svgIco name="arrow" class="h-[5px] w-[10px]" />
            </i>
          </button>
        </div>
      </div>
    </header>
    <main class="relative flex overflow-hidden p:pb-[20px] p:pr-[26px]">
      <Nav
        :data="menu.data"
        :isNavActive="isNavActive"
        class="tm:fixed tm:left-0 tm:top-[68px] tm:z-10 tm:h-full tm:bg-[#f2f2f7]"
      />
      <div class="flex-grow tm:px-[15px] tm:py-[20px] p:pt-[20px]">
        <ul
          class="flex items-center px-[8px] text-[14px] font-[500] tm:mb-[20px] p:mb-[25px]"
        >
          <li>
            <p
              class="text-[#737791] after:mx-[15px] after:content-['>'] m:text-[12px]"
            >
              Home
            </p>
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

<style scoped></style>
