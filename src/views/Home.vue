<script setup>
</script>

<template>
  <form class="bg-[#fff] w-full p:flex p:items-end p:px-[22px] p:py-[25px] p:space-x-[15px] tm:px-[17px] tm:py-[24px]">
  <div>
    <p class="text-[#737791] text-[14px] leading-[21px] mb-[5px]">Category</p>
    <div class="relative h-[48px] w-[222px]">
      <select name="Announcement" class="block w-full h-full overflow-hidden border-solid border-[1px] border-[#F2F2F7] rounded-[8px]  appearance-none text-[#737791] py-[2px] px-[16px] text-[18px]">
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
    <input type="text" class="block overflow-hidden border-solid border-[1px] border-[#F2F2F7] rounded-[8px] px-[15px] h-[48px] w-[218px]">
  </div>
  <button type="submit" class="flex items-center justify-center bg-[#F2F2F7] rounded-[8px] px-[15px] h-[48px] tm:w-full">
    <p>Search</p>
  </button>
</form>
<section class="mt-[30px] p:space-y-[15px] tm:bg-[#fff] tm:px-[10px] tm:py-[15px]">
  <header class="flex items-center">
    <p class="flex-grow text-[#11263C] font-[600] text-[16px]">My Collection</p>
    <div class="flex items-center tm:hidden">
      <p class="text-[#737791] font-[600] text-[16px]">Total 480 |</p>
      <div class="flex items-center space-x-[20px] ml-[26px]">
        <button type="button" class="rotate-90">
          <i class="block">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </button>
        <div class="relative h-[32px] w-[40px]">
          <select name="Announcement" class="block w-full h-full overflow-hidden rounded-[5px] appearance-none text-[#737791] px-[10px] text-[14px]">
            <option value="1">1</option> 
            <option value="10">10</option> 
            <option value="15">15</option> 
          </select>
          <i class="absolute transform -translate-y-1/2 top-1/2 flex-shrink-0 right-[5px] ml-[5px]">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </div>
        <button type="button" class="rotate-[270deg]">
          <i class="block">
            <svgIco name="arrow" class="w-[10px] h-[5px]"/>
          </i>
        </button>
      </div>
    </div>
  </header>
  <div class="bg-[#fff] p:border-solid p:border-[1px] p:border-[#d5d5da] ">
    <ul>
      <li v-for="i in 10" :key="`list_${i}`" class="border-solid border-[#d5d5da] border-b-[1px] last:border-none p:px-[15px] p:py-[18px] tm:px-[8px]">
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
            <p class="w-full font-[500] text-[14px] leading-[24px] p:mb-[10px] p:pr-[100px]"> {{ i }} APPX System New Version Release Announce on APPX System New Version Release Announce onAPPX System New Version Release Announce onAPPX System New Version Release Announce onAPPX System New Version Release Announce onAPPX System New Version Release Announce on  14th Dec...</p>
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
