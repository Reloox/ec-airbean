<template>
  <section class="profile">
    <Header></Header>
    <div class="signUp">
      <h2 class="title">Välkommen till AirBean-familjen!</h2>
      <p class="info">Genom att skapa ett konto nedan kan</p>
      <p class="info">spara och se din orderhistorik.</p>
      <div class="style">
        <p class="name">Namn</p>
        <input type="text">
        <p class="mail">Epost</p>
        <input type="text"> <br><br>
        <input type="radio" class="radio">
      </div>
      <a class="tag" @click="showMyself">Brew me a cup!</a>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Menu",
  components: {
    Header
  },
  data() {
    return {
    }
  },
  methods: {
    showMyself() {
      this.$router.push('SignedProfile')
    }
  }
}
</script>

<style scoped>
.profile {
  background-color: rgb(46, 42, 38);
  width: 106.5%;

}
.signUp {
  background-color: rgb(243, 228, 225);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -30px 20px 30px 20px;
}

.tag {
  background-color: black;
  padding: 10px 10px 10px 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
  color: white;
  font-family: serif;
  font-weight: 600;
}

.title {
  text-align: center;
  font-family: serif;
  font-size: 2rem;
}

.info {
  font-family: sans-serif;
  margin: 1px;
}

.name {
  font-family: sans-serif;
  margin-right: 200px;
  font-size: 12px;
}

.mail {
  font-family: sans-serif;
  font-size: 12px;
}

.style {

}
</style>
