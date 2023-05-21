<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Nav />

  <div id="banner">
    <div class="banner_wrap">
      <figure><img src="../images/banner_bg.jpg" alt="code"></figure>
      <div class="slogan">
        <h2><span>Hello !</span> <strong>I Am</strong> Web Developer</h2>
        <p>I'm a Web Developer with extensive experience for over 6 years.</p>
        <ul>
          <li><a href="javascript:;"><i class="bi bi-facebook"></i></a></li>
          <li><a href="javascript:;"><i class="bi bi-instagram"></i></a></li>
          <li><a href="javascript:;"><i class="bi bi-github"></i></a></li>
        </ul>
      </div>
    </div>
  </div>

  <main>
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

  <Footer />

</template>
