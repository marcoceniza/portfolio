<script setup>
import { useCustomStore } from '@/stores/customStore';
import { XMarkIcon } from '@heroicons/vue/24/solid'; 
import { storeToRefs } from 'pinia';

const customStore = useCustomStore();
const { isMenuOpen } = storeToRefs(customStore);
const { toggleMenu, scrollToSection } = customStore;
</script>

<template>
    <div v-if="isMenuOpen" class="absolute h-screen w-full bg-[#555] z-12 top-0">
        <div class="flex justify-between px-4 bg-[#313131] items-center min-h-[65px] leading-[65px]">
            <RouterLink to="/" class="bg-gradient-to-r from-[#12E0F3] to-[#13B852] bg-clip-text text-transparent cursor-pointer font-bold text-[35px]">MC</RouterLink>
            <XMarkIcon
            class="size-6 text-white cursor-pointer"
            @click="toggleMenu"
            />
        </div>

        <nav>
            <ul class="text-center text-white">
                <li class="py-3 border border-b-white border-solid"><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('banner')">HOME</span></li>
                <li class="py-3 border border-b-white border-solid"><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('main')">ABOUT</span></li>
                <li class="py-3 border border-b-white border-solid"><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('bottom')">WORKS</span></li>
                <li class="py-3 border border-b-white border-solid"><span class="cursor-pointer hover:underline" @click="$router.push('/')">RESUME</span></li>
                <li class="py-3 border border-b-white border-solid"><span class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('footer')">CONTACT</span></li>
            </ul>
        </nav>
    </div>
</template>  