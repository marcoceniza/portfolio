import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCustomStore = defineStore('custom', () => {
    const fullText = ref('WEB DEVELOPER');
    const typedText = ref('');
    const toggleNavbar = ref(false);
    const windowWidth = ref(window.innerWidth);
    const isMenuOpen = ref(false);

    const typeWriter = () => {
        let i = 0;

        const typingInterval = setInterval(() => {
            typedText.value += fullText.value[i];
                i++;
                
            if (i === fullText.value.length) {
                clearInterval(typingInterval);
            }
        }, 200);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    } 

    window.addEventListener('scroll', function() {
        let currentScroll = window.scrollY;
        let currentWidth = window.innerWidth;

        if (currentScroll > 200 && currentWidth !== 1000) {
            toggleNavbar.value = true;
        }else {
            toggleNavbar.value = false;
        }
    });

    const updateWidth = () => {
        windowWidth.value = window.innerWidth;
    };

    const showHamburger = computed(() => windowWidth.value <= 640);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    return {
        scrollToSection,
        fullText,
        typedText,
        toggleNavbar,
        typeWriter,
        toggleMenu,
        showHamburger,
        isMenuOpen,
        updateWidth
    }
})
