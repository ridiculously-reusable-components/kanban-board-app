<script>
export default {
  name: 'PricingPage'
}
</script>

<template>
  <main>
    <header class="main-header">
      <h1 class="logo">Vue.js Kanban Board</h1>
      <nav>
        <ul class="main-header__nav">
          <li class="main-header__nav-item">
            <router-link class="main-header__nav-link" to="/">Home</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link class="main-header__nav-link" to="/pricing">Pricing</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link class="main-header__nav-link" to="/workspace">Workspace</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link class="main-header__nav-link" to="/">Change board</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <section class="subhero">
        <h2 class="subhero__title">Kanban Your Way</h2>
        <p class="subhero__text">Trusted by millions, kanban boards power teams all around the world. Explore which option is right for you. </p>
      </section>
      <div class="price-chart">
        <section class="price-chart__header">
          <h3 class="price-chart__header-title">Pricing Models</h3>
          <div class="price-row">
            <div class="price-chart__header-item">
              <h4 class="price-chart__header-type">Free</h4>
              <p class="price-chart__header-price">$0 per user per month forever</p>
              <a class="button" href="#">Get Started</a>
            </div>
            <div class="price-chart__header-item">
              <h4 class="price-chart__header-type">Business Class</h4>
              <p class="price-chart__header-price">$9.99 per user per month</p>
              <a class="button" href="#">Learn More</a>
            </div>
            <div class="price-chart__header-item">
              <h4 class="price-chart__header-type">Enterprise</h4>
              <p class="price-chart__header-price">$20.83 per user per month</p>
              <a class="button" href="#">Learn More</a>
            </div>
          </div>
        </section>
        <section>
          <div class="header-row">
            <h3>Standard Features</h3>
          </div>
          <div class="features">
            <div class="feature">
              <h4 class="sr-only">Standard Features for Free Tier</h4>
              <ul class="feature-list">
                <li class="feature-list-item">Unlimited Personal Boards</li>
                <li class="feature-list-item">Unlimited Cards</li>
                <li class="feature-list-item">Unlimited Lists</li>
                <li class="feature-list-item">1 Enhancement per Board</li>
                <li class="feature-list-item">10MB per File Attachment</li>
              </ul>
            </div>
            <div class="feature">
              <h4 class="sr-only">Standard Features for Business Class Tier</h4>
              <ul class="feature-list">
                <li class="feature-list-item">Unlimited Personal Boards</li>
                <li class="feature-list-item">Unlimited Cards</li>
                <li class="feature-list-item">Unlimited Lists</li>
                <li class="feature-list-item">1 Enhancement per Board</li>
                <li class="feature-list-item">250MB per File Attachment</li>
                <li class="feature-list-item">Priority Support</li>
                <li class="feature-list-item">Observers</li>
                <li class="feature-list-item">Custom Backgrounds & Stickers</li>
              </ul>
            </div>
            <div class="feature">
              <h4 class="sr-only">Standard Features for Enterprise Tier</h4>
              <ul class="feature-list">
                <li class="feature-list-item">Unlimited Personal Boards</li>
                <li class="feature-list-item">Unlimited Cards</li>
                <li class="feature-list-item">Unlimited Lists</li>
                <li class="feature-list-item">1 Enhancement per Board</li>
                <li class="feature-list-item">250MB per File Attachment</li>
                <li class="feature-list-item">Priority Support</li>
                <li class="feature-list-item">Observers</li>
                <li class="feature-list-item">Custom Backgrounds & Stickers</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div class="header-row">
            <h3>Team Features</h3>
          </div>
          <div class="features">
            <div class="feature">
              <h4 class="sr-only">Team Features for Free Tier</h4>
              <ul class="feature-list">
                <li class="feature-list-item">10 Team Boards</li>
              </ul>
            </div>
            <div class="feature">
              <h4 class="sr-only">Team Features for Business Class Tier</h4>
              <ul class="feature-list">
                <li class="feature-list-item">10 Team Boards</li>
                <li class="feature-list-item">Board Collections</li>
              </ul>
            </div>
            <div class="feature">
              <h4 class="sr-only">Team Features for Free Tier</h4>
              <ul class="feature-list">
                <li class="feature-list-item">10 Team Boards</li>
                <li class="feature-list-item">Board Collections</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="price-chart__footer">
          <div class="price-row">
            <div class="price-chart__footer-item">
              <a class="button" href="#">Get Started</a>
            </div>
            <div class="price-chart__footer-item">
              <a class="button" href="#">Learn More</a>
            </div>
            <div class="price-chart__footer-item">
              <a class="button" href="#">Learn More</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <footer class="footer">
      <small>Thanks to <a href="https://undraw.co/illustrations">Undraw</a> for the great illustrations!</small>
    </footer>
  </main>
</template>

<style lang="scss">
.main-header {
  background-color: #19c2b1;
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

.main-header__nav-link {
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.footer {
  max-width: 1024px;
  text-align: center;
  margin: 0 auto;
  padding: 30px 0;
}


.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.feature{
  border-left: 1px solid rgb(15, 187, 136);

  &:last-child {
    border-right: 1px solid rgb(15, 187, 136);
  }
}

.feature-list {
  list-style: none;
  display: grid;
  grid-template-rows: auto;
  margin: 0;
  padding: 0;
}

.feature-list-item {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid rgb(15, 187, 136);

  &:last-child {
    border-bottom: 0;
  }
}

.subhero {
  max-width: 1160px;
  margin: 60px auto;
}

.subhero__title {
  width: 66.66%;
  text-align: center;
  font-size: 2.5rem;
  margin: 0 auto 15px;
  display: block;
}

.subhero__text {
  width: 66.67%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0 auto;
}

.price-chart {
  width: 960px;
  margin: 0 auto;
}

.price-chart__footer {
  background: linear-gradient(180deg, rgb(98, 211, 191) 0%, rgb(52, 157, 108) 100%);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: white;
  padding: 30px;
  margin: 0 auto;
}

.price-chart__footer-item {
  text-align: center;
}

.price-chart__header {
  background: linear-gradient(180deg, rgb(98, 211, 191) 0%, rgb(52, 157, 108) 100%);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: white;
  padding: 30px;
  margin: 0 auto;
}

.price-chart__header-item {
  text-align: center;
}

.price-chart__header-title {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
}

.price-chart__header-price {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.price-chart__header-type {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.price-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
}

.header-row {
  background-color: #d2ebdc;
  color: #6db982;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 0;
}

.button {
  background: #eee;
  color: #222;
  font-weight: 500;
  text-decoration: none;
  font-size: 1em;
  padding: 0.7em 1.5em;
  border-radius: 6px;
  box-shadow: 0 3px #006644;
  margin: 0.25em auto;
  display: inline-block;

  &.is-primary {
    background-color: #36B37E;
    color: #fff;
  }

  &.is-info {
    background-color: #209cee;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
</style>
