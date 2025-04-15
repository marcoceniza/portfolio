<script setup>
import { MapIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';
import { useCustomStore } from '@/stores/customStore';
import FormInput from '@/components/FormInput.vue';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import 'animate.css';

const { typeWriter } = useCustomStore();
const { typedText } = storeToRefs(useCustomStore());

onMounted(() => {
  typeWriter();

  const srList = ['#main', '#bottom', '#footer']

  srList.forEach(className => {
    ScrollReveal().reveal(className, { delay: 500 });
  });
});
</script>

<template>

  <!-- banner -->
  <div id="banner" class="bg-[#3A3A3A] px-4">
      <div class="wrapper flex justify-between mx-auto h-[700px] items-center max-md:h-full max-md:py-12">
        <section class="text-left text-white max-md:w-full max-md:text-center max-lg:w-[450px]">
            <h2 class="animate__animated animate__fadeIn text-[22px]">MARCO CENIZA <strong class="textColor text-[65px] font-bold block relative leading-[100%] max-lg:text-[50px]">{{ typedText }} <span class="blink">|</span></strong></h2>
            <p class="animate__animated animate__fadeIn animate__delay-1s text-[20px] mt-[40px] mb-[25px] max-lg:text-[18px] max-sm:text-[16px]">I'm a Web Developer with extensive experience for over 6 years.</p>
            <button class="animate__animated animate__fadeIn animate__delay-2s mt-[50px] bgColor block w-[150px] h-[50px] text-[#313131] text-[16px] font-bold rounded-[4px] max-md:mx-auto">CONTACT ME</button>
        </section>
        <section class="animate__animated animate__fadeIn mr-[90px] max-lg:mr-[40px] max-md:hidden">
            <figure class="w-[300px] rotate-[-43deg] overflow-hidden rounded-[20px] max-w-full max-lg:w-[200px] max-xl:w-[270px]"><img src="../images/bnr_img.jpg" alt="man wearing eyeglasses" class="rotate-[43deg] scale-[1.4]"></figure>
        </section>
      </div>
  </div>

  <!-- main -->
  <main id="main" class="bg-[#4B4B4B] px-4">
    <div class="wrapper flex justify-between mx-auto h-[700px] items-center text-left max-md:h-full max-md:py-12">
        <section class="w-[70%] text-white max-md:w-full">
          <h2 class="textColor text-[30px] font-bold block relative leading-[100%]">About Me</h2>
          <p class="mt-[40px] font-bold text-[20px] mb-[8px] max-sm:text-[16px]">I'm a Web Developer having 6 Years of Experience</p>
          <p>With more than six years of experience as a web developer, I have become proficient in a range of coding languages and frameworks, including HTML, CSS, JavaScript, Vue.js. I have also worked with content management systems like WordPress and utilized Laravel and CodeIgniter for web application development. In addition to my coding skills, I am well-versed in version control using Git, file management through FileZilla, and database management with MySQL and Firebase. I continue to adapt and grow in this ever-evolving field to deliver successful web solutions.</p>
          <ul class="columns-2 relative mt-[32px] max-sm:columns-1">
              <li class="relative pl-[30px] max-sm:mb-3"><MapIcon class="h-6 w-6 text-white absolute left-0" /> <strong>Location:</strong> Cebu City, Cebu</li>
              <li class="relative pl-[30px]"><EnvelopeIcon class="h-6 w-6 text-white absolute left-0" /> <strong>Email:</strong>  marcoceniza15@gmail.com</li>
          </ul>
          <button class="bgColor mt-[50px] block w-[220px] h-[50px] text-[#313131] text-[19px] font-bold rounded-[4px] max-md:mx-auto">Download Resume</button>
        </section>
        <section class="w-[25%] max-md:hidden">
            <figure><img src="../images/main_img3.jpg" alt="Vite"></figure>
        </section>
    </div>
  </main>

  <!-- bottom -->
  <div id="bottom" class="bg-[#3A3A3A] px-4">
    <div class="wrapper flex justify-center items-center mx-auto py-10">
      <div class="relative text-center">
        <h2 class="textColor text-[30px] font-bold block relative leading-[100%]">My Works</h2>
        <p class="text-white mt-[40px] mb-[50px] mx-auto w-[600px] max-w-full max-sm:w-full">Throughout my career as a web developer, I have created several simple sample projects, which I would like to share.</p>
        <div class="flex justify-center gap-4 relative project_wrap max-md:flex-wrap max-sm:flex-col">
            <figure class="min-h-[320px] w-[320px] max-w-full relative max-md:w-[250px] max-md:min-h-0 max-sm:w-[250px] max-sm:min-h-[250px] max-sm:mx-auto"><img src="../images/main_img2.jpg" alt="todo app" class="rounded-[5px] h-full w-full block"><a href="https://todo.mc-dev.site/" target="_blank">View Project &raquo;</a></figure>
            <figure class="min-h-[320px] w-[320px] max-w-full relative max-md:w-[250px] max-md:min-h-0 max-sm:w-[250px] max-sm:min-h-[250px] max-sm:mx-auto"><img src="../images/main_img3.png" alt="todo app" class="rounded-[5px] h-full w-full block"><a href="https://mc-dev.site/converter/" target="_blank">View Project &raquo;</a></figure>
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <footer id="footer" class="bg-[#4B4B4B]">
    <div class="wrapper flex justify-center px-4 items-center mx-auto h-[700px] max-md:h-full max-md:py-12">
      <div class="relative text-center">
        <h2 class="textColor text-[30px] font-bold block relative leading-[100%]">Contact Me</h2>
        <p class="text-white mt-[40px] mb-[50px] mx-auto w-[700px] max-w-full max-md:w-full">If you have any questions or inquiries, please feel free to fill in the form below. I'll get back to you as soon as possible to assist you further. Thank you for reaching out!</p>
        <form @submit.prevent="sendEmail()">
          <div class="flex justify-between flex-wrap gap-4 relative">
            <FormInput placeholder="Name*" class="w-[48%] p-[12px] max-md:w-full" />
            <FormInput placeholder="Email*" class="w-[48%] p-[12px] max-md:w-full" />
            <FormInput placeholder="Address*" class="w-full p-[12px] max-md:w-full" />
            <FormInput :textarea="true" cols="30" rows="5" placeholder="Message*" class="w-full p-[12px] max-md:w-full" />
          </div>
        </form>
        <button class="mt-[35px] bgColor block w-[175px] h-[50px] text-[#313131] text-[19px] font-bold rounded-[4px]">Send Message</button>
      </div>
    </div>
    <p class="bg-[#595959] text-white py-[12px] px-[4px] text-center">CopyRight &copy; {{ new Date().getFullYear() }} Marco Ceniza All Rights Reserved</p>
  </footer>
  
</template>
