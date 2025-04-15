<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCustomStore } from '@/stores/customStore';

const { toggleNavbar } = storeToRefs(useCustomStore());
const { scrollToSection } = useCustomStore();
</script>

<template>
  <header class="bg-[#313131]" :class="{ toggle: toggleNavbar }" id="header">
    <div class="wrapper flex justify-between items-center mx-auto px-4 min-h-[65px]">
      <RouterLink to="/" class="textColor text-white cursor-pointer font-bold text-[35px]">MC</RouterLink>
      <nav>
        <ul class="flex text-white gap-5 max-md:text-[14px]">
          <li><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('banner')">HOME</span></li>
          <li><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('main')">ABOUT</span></li>
          <li><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('bottom')">WORKS</span></li>
          <li><span class="cursor-pointer hover:underline" @click="$router.push('/')">RESUME</span></li>
          <li><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('footer')">CONTACT</span></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>