<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import Nav from '@/components/Nav.vue';
import { useCustomStore } from '@/stores/customStore';
import { Bars3Icon } from '@heroicons/vue/24/solid';
import { onMounted, onBeforeUnmount } from 'vue';

const customStore = useCustomStore();
const { toggleNavbar } = storeToRefs(customStore);
const { toggleMenu, showHamburger, updateWidth, scrollToSection } = customStore;

onMounted(() => {
    window.addEventListener('resize', updateWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWidth);
});
</script>

<template>
  <header class="bg-[#313131]" :class="{ 'fixed left-0 right-0 top-0 mx-auto z-10': toggleNavbar }" id="header">
    <div class="w-full max-w-[1200px] relative overflow-hidden flex justify-between items-start mx-auto px-4 min-h-[65px] leading-[65px]">
      <RouterLink to="/" class="bg-gradient-to-r from-[#12E0F3] to-[#13B852] bg-clip-text text-transparent cursor-pointer font-bold text-[35px]">MC</RouterLink>
      <Bars3Icon
        class="size-6 text-white cursor-pointer relative top-[20px]"
        @click="toggleMenu"
        v-show="showHamburger"
      />

      <nav>
        <ul class="flex gap-5">
          <li><span class="cursor-pointer text-white hover:underline" @click="$router.push('/'); scrollToSection('banner')">HOME</span></li>
          <li><span class="cursor-pointer text-white hover:underline" @click="$router.push('/'); scrollToSection('main')">ABOUT</span></li>
          <li><span class="cursor-pointer text-white hover:underline" @click="$router.push('/'); scrollToSection('bottom')">WORKS</span></li>
          <li><span class="cursor-pointer text-white hover:underline" @click="$router.push('/')">RESUME</span></li>
          <li><span class="cursor-pointer text-white hover:underline" @click="$router.push('/'); scrollToSection('footer')">CONTACT</span></li>
        </ul>
      </nav>
    </div>
    <Nav />
  </header>

  <RouterView />
</template>