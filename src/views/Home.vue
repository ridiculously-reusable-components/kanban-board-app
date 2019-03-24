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
      <section>
        <h2>Kanban boards let you visualize your work to help you get more done.</h2>
        <p>Board, lists, and cards enable you to organize your projects in a fun, flexible, and rewarding way.</p>
        <button>Go to Your Workspace</button>
      </section>
      <section>
        <h2>Work with any team</h2>
        <p>Wheter it's for work, a side project, or even the next family vacation, kanban boards can help you and yoru team organized.</p>
        <button>Get started</button>
      </section>
      <section>
        <h2>Information at a glance</h2>
        <p>Dive into the details by adding comments, attachments, due dates, and more directly to kanban cards. Collaborate on projects from beginning to end.</p>
      </section>
      <section>
        <h2>See how it works</h2>
        <p>For from idea to action in seconds with the intuitively simple boards, lists and cards.</p>
      </section>
      <section>
        <h2>Kanan boards your way</h2>
        <p>Use kanban boards the way you work best. This app has got the flexibility and features to fit any working style.</p>
        <section>
          <h3>The Workflow Playbook</h3>
          <p>It's easy to get up and running with kanban boards. We've collected all of the boards and tools you need to success in one handy resource.</p>
          <button>Make a Game Plan</button>
          <h3>A Productivity Platform</h3>
          <p>Integrate the apps your team already uses directly with your workflow. Enhancements turn kanban boards into living applications to meety our team's unique business needs.</p>
          <button>Enhance Your Workflow</button>
          <h3>Always in Sync</h3>
          <p>No matter where you are, kanban b oards stay in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</p>
          <button>Available on App Store</button>
          <button>Availabe for Google Play</button>
        </section>
        <section>
          <h3>Work Smarter with Kanban Boards</h3>
          <p>Companies of all shapes and sizes uses kanban boards.</p>
          <button>Find out how --></button>
        </section>
        <section>
          <h2>Start Planning Today</h2>
          <p>Sign up and become one of the billions of people around the world using Trello to get more done.</p>
          <button>Get Started - It's Free!</button>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

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
</style>
