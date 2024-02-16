<template>

  <Nav :class="{ toggle: toggleNavbar }" :handleNavClick="scrollToSection" />

  <div id="banner">
    <div class="banner_wrap">
      <figure><img src="../assets/images/banner_bg.jpg" alt="code"></figure>
      <div class="slogan">
        <h4 class="animate__animated animate__fadeIn animate__delay-1s">Hello !</h4>
        <h2><strong>{{ typedText }}</strong> <span>|</span></h2>
        <p class="animate__animated animate__fadeIn animate__delay-2s">I'm a Web Developer with extensive experience for over 5 years.</p>
        <ul class="animate__animated animate__fadeIn animate__delay-3s">
          <li><a href="javascript:;"><i class="bi bi-facebook"></i></a></li>
          <li><a href="javascript:;"><i class="bi bi-instagram"></i></a></li>
          <li><a href="javascript:;"><i class="bi bi-github"></i></a></li>
        </ul>
      </div>
    </div>
  </div>

  <main id="main">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <figure><img class="rounded" src="../assets/images/main_img.jpg" alt="developer"></figure>
        </div>
        <div class="col-8">
          <h2>About Me</h2>
          <h4>I'm a Web Developer having 5 Years of Experience.</h4>
          <p>"With more than five years of experience as a web developer, I have become proficient in a range of coding languages and frameworks, including HTML, CSS, JavaScript, Vue.js, and the Ionic Framework. I have also worked with content management systems like WordPress and utilized CodeIgniter for web application development. In addition to my coding skills, I am well-versed in version control using Git, file management through FileZilla, and database management with MySQL and Firebase. I continue to adapt and grow in this ever-evolving field to deliver successful web solutions."</p>
          <ul>
            <li><i class="bi bi-geo-alt-fill"></i> <strong>Location:</strong> Cebu City, Cebu</li>
            <li><i class="bi bi-calendar-week-fill"></i> <strong>Age:</strong> 29</li>
            <li><i class="bi bi-telephone-fill"></i> <strong>Phone:</strong> 09667414792</li>
            <li><i class="bi bi-envelope-fill"></i> <strong>Email:</strong> marcoceniza15@gmail.com</li>
          </ul>
          <hr>
          <button class="btn btn-primary"><i class="bi bi-download"></i> Download Resume</button>
        </div>
      </div>
    </div>
  </main>

  <div id="bottom">
    <div class="container">
      <div class="btm_box">
        <h2><span>Works</span> My Work</h2>
        <p>Throughout my career as a web developer, I have created several simple sample projects, which I would like to share.</p>
        <div class="row">
          <section class="col-4">
            <a href="https://mc-todo23.netlify.app/" target="_blank">Simple Todo App &raquo;</a>
            <figure><img src="../assets/images/btm_img.jpg" alt="phone"></figure>
          </section>
          <section class="col-4">
            <a href="https://mc-reservation23.netlify.app/" target="_blank">Reservation System &raquo;</a>
            <figure><img src="../assets/images/btm_img2.jpg" alt="laptop"></figure>
          </section>
          <section class="col-4">
            <a href="https://mc-library24.netlify.app/" target="_blank">Library System &raquo;</a>
            <figure><img src="../assets/images/btm_img3.jpg" alt="library"></figure>
          </section>
          <section class="col-4">
            <figure><img src="../assets/images/comingsoon.jpg" alt="Coming Soon"></figure>
          </section>
          <section class="col-4">
            <figure><img src="../assets/images/comingsoon.jpg" alt="Coming Soon"></figure>
          </section>
          <section class="col-4">
            <figure><img src="../assets/images/comingsoon.jpg" alt="Coming Soon"></figure>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!-- <Footer /> -->

  <footer id="footer">
        <div class="container ftr_wrap">
            <div class="ftr_box">
                <h2><span>Touch</span> Get in Touch</h2>
                <p>If you have any questions or inquiries, please feel free to fill in the form below. I'll get back to you as soon as possible to assist you further. Thank you for reaching out!</p>
                <div class="row">
                    <div class="col-8">
                      <div class="alert alert-danger" v-show="validateField">
                        <strong>Message!</strong> All fields are required!
                      </div>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <input type="text" v-model="name" class="form-control" placeholder="Name *">
                            </div>
                            <div class="col-6 mb-2">
                                <input type="email" v-model="email" class="form-control" placeholder="Email *">
                            </div>
                            <div class="col-6 mb-2">
                                <input type="text" v-model="phone" class="form-control" placeholder="Phone *">
                            </div>
                            <div class="col-12 mb-2">
                                <textarea v-model="message" class="form-control" rows="5" placeholder="Your Message here..."></textarea>
                            </div>
                            <div class="col-12 mb-2">
                                <button @click="submitMessage" class="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <ul>
                            <li><span><i class="bi bi-house-door-fill"></i> Home</span> Bontores Street Villa Kalubihan Basak San Nicolas Cebu City</li>
                            <li><span><i class="bi bi-telephone-fill"></i> Phone</span> 09667414792</li>
                            <li><span><i class="bi bi-envelope-fill"></i> Email</span> marcoceniza15@gmail.com</li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
        <div class="copyright bg-dark">
            <div class="container">
                <section>
                <p>CopyRight &copy; {{ currentYear }} Marco Ceniza All Rights Reserved</p>
                </section>
                <section>
                    <ul>
                        <li><a href="javascript:;"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="javascript:;"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="javascript:;"><i class="bi bi-github"></i></a></li>
                    </ul>
                </section>
            </div>
        </div>
    </footer>

</template>

<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import ScrollReveal from 'scrollreveal';
import { onMounted, ref, watch } from 'vue';

const fullText = ref('I am a Web Developer');
const typedText = ref('');
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const validateField = ref(false);
const currentYear = new Date().getFullYear();
const toggleNavbar = ref(false);

const submitMessage = () => {
  if(name.value === '' && email.value === '' && phone.value === '' && message.value === '') {
    validateField.value = true;
    return;
  }

  email.send({
    SecureToken : "867522e1-30e4-4c26-8880-a1b3e30462a5",
    To : "marcoceniza20@gmail.com",
    From : "marcoceniza15@gmail.com",
    Subject : name.value,
    Body: `Name: ${name.value}<br>Email: ${email.value}<br>Phone: ${phone.value}<br>Message: ${message.value}`
  }).then(
    console.log('Message sent successfully!')
  );
}

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

  if (currentScroll > 200 && currentWidth !== 1000) toggleNavbar.value = true;
  else toggleNavbar.value = false;
});

onMounted(() => {
  typeWriter();
  
  const srList = ['main', '#bottom', 'footer']

  srList.forEach(className => {
    ScrollReveal().reveal(className, {delay: 500});
  });
});
</script>

<style scoped>
.toggle{position: fixed; left: 0; right: 0; margin: 0 auto; top: 0; z-index: 3;}
</style>
