<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import ScrollReveal from 'scrollreveal';

export default {
  name: 'HomeView',
  components: {Nav, Footer},
  data() {
    return {
      fullText: 'I am a Web Developer',
      typedText: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    submitMessage() {
      Email.send({
        SecureToken : "867522e1-30e4-4c26-8880-a1b3e30462a5",
        To : "marcoceniza20@gmail.com",
        From : "marcoceniza15@gmail.com",
        Subject : this.name,
        Body: `Name: ${this.name}<br>Email: ${this.email}<br>Phone: ${this.phone}<br>Message: ${this.message}`
      }).then(
        console.log('Message sent successfully!')
      );
    },
    typeWriter() {
      let i = 0;
      const typingInterval = setInterval(() => {
        this.typedText += this.fullText[i];
        i++;
        if (i === this.fullText.length) {
          clearInterval(typingInterval);
        }
      }, 200);
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  mounted() {
    this.typeWriter();
  
    const srList = ['main', '#bottom', 'footer']

    srList.forEach(className => {
      ScrollReveal().reveal(className, {delay: 500});
    });
    
  }
}
</script>

<template>

  <Nav :handleNavClick="scrollToSection" />

  <div id="banner">
    <div class="banner_wrap">
      <figure><img src="../images/banner_bg.jpg" alt="code"></figure>
      <div class="slogan">
        <h4 class="animate__animated animate__fadeIn animate__delay-1s">Hello !</h4>
        <h2><strong>{{ typedText }}</strong> <span>|</span></h2>
        <p class="animate__animated animate__fadeIn animate__delay-2s">I'm a Web Developer with extensive experience for over 6 years.</p>
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
        <div class="col-sm-4">
          <figure><img src="../images/main_img.jpg" alt="person coding"></figure>
        </div>
        <div class="col-sm-8">
          <h2>About Me</h2>
          <h4>I'm Professional Web Developer having 6 Years of Experience.</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <ul>
            <li><i class="bi bi-geo-alt-fill"></i> <strong>Location:</strong> Cebu City, Cebu</li>
            <li><i class="bi bi-calendar-week-fill"></i> <strong>Age:</strong> 28</li>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
          <li><a href="">Web</a></li>
          <li><a href="">Mobile</a></li>
        </ul>
        <div class="row">
          <div class="col-sm-4">
            <figure><img src="../images/btm_img.jpg" alt="tinder"><a href="javascript:;"></a></figure>
          </div>
          <div class="col-sm-4">
            <figure><img src="../images/btm_img2.jpg" alt="laptop"><a href="javascript:;"></a></figure>
          </div>
          <div class="col-sm-4">
            <figure><img src="../images/btm_img3.jpg" alt="app"><a href="javascript:;"></a></figure>
          </div>
          <div class="col-sm-4">
            <figure><img src="../images/btm_img.jpg" alt="tinder"><a href="javascript:;"></a></figure>
          </div>
          <div class="col-sm-4">
            <figure><img src="../images/btm_img2.jpg" alt="laptop"><a href="javascript:;"></a></figure>
          </div>
          <div class="col-sm-4">
            <figure><img src="../images/btm_img3.jpg" alt="app"></figure>
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Footer /> -->

  <footer id="footer">
        <div class="container ftr_wrap">
            <div class="ftr_box">
                <h2><span>Touch</span> Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="row">
                            <div class="col-sm-12 mb-2">
                                <input type="text" v-model="name" class="form-control" placeholder="Name *">
                            </div>
                            <div class="col-sm-6 mb-2">
                                <input type="email" v-model="email" class="form-control" placeholder="Email *">
                            </div>
                            <div class="col-sm-6 mb-2">
                                <input type="text" v-model="phone" class="form-control" placeholder="Phone *">
                            </div>
                            <div class="col-sm-12 mb-2">
                                <textarea v-model="message" class="form-control" rows="5" placeholder="Your Message here..."></textarea>
                            </div>
                            <div class="col-sm-12 mb-2">
                                <button @click="submitMessage" class="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
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
                <p>CopyRight &copy; 2023 Marco Ceniza All Rights Reserved</p>
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
