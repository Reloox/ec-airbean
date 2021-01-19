<template>
  <div class="container-home">
    <aside class="imgLeft">
      <img src="@/assets/graphics/intro-graphic-left.svg" alt="left"/>
    </aside>
    <main class="imgBody">
      <img class="logo" src="@/assets/graphics/airbean-landing.svg" alt="logo"
           @click="showNavigation"/>
    </main>
    <section class="imgRight">
      <img src="@/assets/graphics/intro-graphic-right.svg" alt="right"/>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  methods: {
    showNavigation() {
      this.$router.push('Navigation')
    }
  }
}
</script>

<style scoped>
.container-home {
  display: flex;
  flex-direction: row;
  background-color: #1aa074;
}

.imgBody {
  display: flex;
  justify-content: center;
  position: absolute;
}

.logo{
  position: absolute;
  margin-left: 23rem;
  margin-top: 260px;
}

.imgRight {
  position: absolute;
  margin-left: 13rem;
}
</style>