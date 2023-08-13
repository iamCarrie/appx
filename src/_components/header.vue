<script setup>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

// const count = ref(0)
</script>

<template>
    <header class="flex items-center py-[28px] px-[25px]">
      <div class="flex items-center pr-[52px]">
        <button 
          type="button" 
          class="
            m-nav-btn j-menu-btn
            flex-shrink-0 relative w-[20px] h-[16px] mr-[35px]
          "
          @click="isNav = !isNav; subNav = '';"
        >
          <i></i>
        </button>
        <a href="/" class="block w-[164px]">
          <ImgSrc src="logo.jpg"/>
        
        </a>
      </div>
      <div class="flex items-center space-x-[8px]">
        <div class="relative h-[48px] w-[245px]">
          <input type="text" class="w-full h-full border-[#737791] border-solid border-[1px] rounded-[8px] py-[2px] pr-[32px] pl-[24px]" placeholder="Serch here...">
          <i class="flex items-center text-[#000] absolute cursor-pointer border-solid border-[#000] border-l-[1px] my-[10px] pl-[10px] pr-[15px] py-[5px] top-0 right-0 ">
            <svgIco name="serch" />
            <!-- <%- require('svg.ejs')({
              name: 'serch',
              className:'w-[20px] h-[20px]'
            })%> -->
          </i>
        </div>
        <div class="relative overflow-hidden h-[48px] w-[100px]">
          <select name="" id="" class="w-full h-full appearance-none border-[#737791] text-[#737791] border-solid border-[1px] rounded-[8px] py-[2px] px-[16px]">
            <option value="By All">By All</option>
            <option value="By Station">By Station</option>
            <option value="By Country">By Country</option>
          </select>
          <i class="absolute transform -translate-y-1/2 top-1/2 flex-shrink-0 right-[10px] ml-[5px]">
            <!-- <%- require('svg.ejs')({
              name: 'arrow',
              className:'w-[10px] h-[5px]'
            })%> -->
          </i>
        </div>
      </div>
      <div class="flex flex-grow items-center justify-end space-x-[50px]">
        <div class="flex items-center space-x-[14px]">
          <div class="flex items-center">
            <i>
              <!-- <%- require('svg.ejs')({
                name: 'weather',
                className:'w-[20px] h-[20px]'
              })%> -->
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
              <!-- <%- require('svg.ejs')({
                name: 'arrow',
                className:'w-[10px] h-[5px]'
              })%> -->
            </i>
          </div>
        </div>
        <button type="button">
          <i>
            <!-- <%- require('svg.ejs')({
              name: 'sys',
              className:'w-[28px] h-[28px]'
            })%> -->
          </i>
        </button>
        <button type="button" class="relative">
          <i>
            <!-- <%- require('svg.ejs')({
              name: 'alert',
              className:'w-[26px] h-[28px]'
            })%> -->
          </i>
          <small class="rounded-full block absolute right-0 top-0 bg-[#000] w-[7px] h-[7px]"></small>
        </button>
        <div>
          <button type="button" class="flex items-center">
            <ImgSrc
              src="account.png"
              class="overflow-hidden rounded-full w-[50px] h-[50px]"
            />
            <i class="flex-shrink-0 ml-[5px]">
              <!-- <%- require('svg.ejs')({
                name: 'arrow',
                className:'w-[10px] h-[5px]'
              })%> -->
            </i>
          </button>
        </div>
      </div>
    </header>
</template>

<style scoped>

</style>
