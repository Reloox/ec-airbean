<template>
  <div class="container-menu">
    <header class="menu-nav-icon">
      <img src="@/assets/graphics/close.svg" alt="close"
           @click="returnToSite"/>
    </header>
    <section class="menu-list">
      <ul>
        <router-link to="/Meny" class="underline"><li>Meny</li></router-link><hr>
        <router-link to="/About" class="underline"><li>Vårt Kaffe</li></router-link><hr>
        <router-link to="/Profile" class="underline"><li>Min Profil</li></router-link><hr>
        <router-link to="/Status" class="underline"><li>Order Status</li></router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    returnToSite() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container-menu {
  background-color: rgb(46, 42, 38);
  padding: 1rem;
  height: 100vh;
  width: 21em;
}

.menu-list{
  float: left;
}

section.menu-list ul {
  list-style: none;
}

section.menu-list ul li {
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "PT Serif", serif;
  font-size: 3.4rem;
  margin-top: 25px;
}

.menu-nav-icon img {
  background-color: white;
  border-radius: 100% !important;
  height: 50px;
}

hr {
  color: dimgrey;
}

.underline {
  text-decoration:none;
}
</style>
