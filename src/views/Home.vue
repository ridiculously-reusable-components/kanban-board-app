<script>
export default {
  name: "HomePage"
}
</script>

<template>
  <main>
    <header class="main-header">
      <h1 class="logo">Vue.js Kanban Board</h1>
      <nav>
        <ul class="main-header__nav">
          <li class="main-header__nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link to="/pricing">Pricing</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link to="/workspace">Workspace</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link to="/">Change board</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <section class="hero">
        <div class="hero__content">
          <div class="hero__left">
            <h2 class="hero__title">Kanban boards let you visualize your work to help you get more done.</h2>
            <p class="hero__text">Board, lists, and cards enable you to organize your projects in a fun, flexible, and rewarding way.</p>
            <button class="button">Go to Your Workspace</button>
          </div>
          <div class="hero__right">
            <img src="../assets/homeHero.png" alt="">
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section__content">
          <div class="section__text">
            <h2 class="section__title">Work with any team</h2>
            <p class="section__text">Wheter it's for work, a side project, or even the next family vacation, kanban boards can help you and yoru team organized.</p>
            <button class="button">Get started</button>
          </div>
          <div class="section__image">
            <img src="../assets/homeSection1.png" alt="">
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section__content">
          <div class="section__image">
            <img src="../assets/homeSection2.png" alt="">
          </div>
          <div class="section__text">
            <h2 class="section__title">Information at a glance</h2>
            <p class="section__text">Dive into the details by adding comments, attachments, due dates, and more directly to kanban cards. Collaborate on projects from beginning to end.</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section__content">
          <div class="text-center">
            <h2 class="section__title">See how it works</h2>
            <p class="section__text">For from idea to action in seconds with the intuitively simple boards, lists and cards.</p>
            <img src="../assets/homeCarousel.png" alt="">
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section__content section__content--column">
          <div>
            <h2>Kanan boards your way</h2>
            <p>Use kanban boards the way you work best. This app has got the flexibility and features to fit any working style.</p>
          </div>
          <section class="section__content">
            <div>
              <img src="../assets/homeFeature1.png" alt="">
              <h3>The Workflow Playbook</h3>
              <p>It's easy to get up and running with kanban boards. We've collected all of the boards and tools you need to success in one handy resource.</p>
              <button class="button">Make a Game Plan</button>
            </div>
            <div>
              <img src="../assets/homeFeature2.png" alt="">
              <h3>A Productivity Platform</h3>
              <p>Integrate the apps your team already uses directly with your workflow. Enhancements turn kanban boards into living applications to meety our team's unique business needs.</p>
              <button class="button">Enhance Your Workflow</button>
            </div>
            <div>
              <img src="../assets/homeFeature3.png" alt="">
              <h3>Always in Sync</h3>
              <p>No matter where you are, kanban b oards stay in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</p>
              <button class="button">Available on App Store</button>
              <button class="button">Availabe for Google Play</button>
            </div>
          </section>
        </div>
        <section class="section">
          <div class="section__content section__content--column">
            <h2 class="section__title">Work Smarter with Kanban Boards</h2>
            <p class="section__text">Companies of all shapes and sizes uses kanban boards.</p>
            <button class="button">Find out how --></button>
          </div>
        </section>
        <section class="section">
          <div class="section__content section__content--column">
            <h2 class="section__title">Start Planning Today</h2>
            <p class="section__text">Sign up and become one of the billions of people around the world using Trello to get more done.</p>
            <button class="button">Get Started - It's Free!</button>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<style media="screen">
.main-header {
  background-color: #3ad6c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}

.main-header__nav {
  display: flex;
  list-style: none;
}

.main-header__nav-item {
  padding: 0 10px;
}

.logo {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.hero {
  background-color: green;
  color: white;
}

.hero__content {
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
}

.hero__title {
  font-size: 2.25rem;
  line-height: 1;
  margin-bottom: 15px;
}

.hero__text {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.hero__left {
  flex: 2;
}

.hero__right {
  flex: 3;
}

.button {
  padding: 12px;
  border: 1px solid #ccc;
  background-color: #eee;
}


.section__content {
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section__content--column {
  flex-direction: column;
}

.section__title {
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 15px;
}

.section__text {
  font-size: 1.25rem;
  margin-bottom: 15px;
  flex: 4;
}

.section__image {
  flex: 5;
}

.text-center {
  text-align: center;
}
</style>
