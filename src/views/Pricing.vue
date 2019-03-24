<script>
export default {

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
      <h2>Kanban Your Way</h2>
      <p>Trusted by millions, kanban boards power teams all around the world. Explore which option is right for you. </p>
      <h3>Pricing Models</h3>
      <h4>Free</h4>
      <p>$0 per user per month forever</p>
      <a href="#">Get Started</a>
      <h4>Business Class</h4>
      <p>$9.99 per user per month</p>
      <a href="#">Learn More</a>
      <h4>Enterprise</h4>
      <p>$20.83 per user per month for 100 users</p>
      <a href="#">Learn More</a>
      <section>
        <h3>Standard Features</h3>
        <h4>Standard Features for Free Tier</h4>
        <ul>
          <li>Unlimited Personal Boards</li>
          <li>Unlimited Cards</li>
          <li>Unlimited Lists</li>
          <li>1 Enhancement per Board</li>
          <li>10MB per File Attachment</li>
        </ul>
        <button>Get Started</button>
        <h4>Standard Features for Business Class Tier</h4>
        <ul>
          <li>Unlimited Personal Boards</li>
          <li>Unlimited Cards</li>
          <li>Unlimited Lists</li>
          <li>1 Enhancement per Board</li>
          <li>250MB per File Attachment</li>
          <li>Priority Support</li>
          <li>Observers</li>
          <li>Custom Backgrounds & Stickers</li>
        </ul>
        <button>Learn More</button>
        <h4>Standard Features for Enterprise Tier</h4>
        <ul>
          <li>Unlimited Personal Boards</li>
          <li>Unlimited Cards</li>
          <li>Unlimited Lists</li>
          <li>1 Enhancement per Board</li>
          <li>250MB per File Attachment</li>
          <li>Priority Support</li>
          <li>Observers</li>
          <li>Custom Backgrounds & Stickers</li>
        </ul>
        <button>Learn More</button>
      </section>
      <section>
        <h3>Team Features</h3>
        <h4>Team Features for Free Tier</h4>
        <ul>
          <li>10 Team Boards</li>
        </ul>
        <h4>Team Features for Business Class Tier</h4>
        <ul>
          <li>10 Team Boards</li>
          <li>Board Collections</li>
        </ul>
        <h4>Team Features for Free Tier</h4>
        <ul>
          <li>10 Team Boards</li>
          <li>Board Collections</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style>

</style>
