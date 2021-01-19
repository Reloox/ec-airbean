<template>
<header>
  <img src="@/assets/graphics/graphics-header.svg" alt="header" />
  <div class="navMenu">
      <img src="@/assets/graphics/navicon.svg" alt="nav" class="navImg"
           @click="showMenu"/></div>
  <div class="bagMenu"
       v-if="showCartIcon"
       v-on:visible="visible">
    <span class="badge">{{cartCount}}</span>
    <img src="@/assets/graphics/bag.svg" alt="bag" class="bagImg"
         @click="cart"/>
  </div>
</header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    showCartIcon: Boolean,
    cartCount: Number
  },
  methods: {
    showMenu() {
      this.$router.push('Navigation')
    },
    visible() {
      this.showNav = !this.showNav;
    },
  cart() {
      this.$root.$emit('showCart')
    console.log('cart clicked')
    }
  }
}
</script>

<style scoped>

.navMenu {
  border-radius: 100% !important;
  height: 45px;
  width: 45px;
  position: absolute;
  margin-top: -100px;
  margin-left: 15px;
  background-color: white;
}

.navImg {
  margin-top: 12px;
  margin-left: 10px;
}

.bagImg {
  margin-top: -7px;
  margin-left: 14px;
}

.bagMenu {
  border-radius: 100% !important;
  height: 45px;
  width: 45px;
  position: absolute;
  margin-top: -100px;
  margin-left: 315px;
  background-color: black;
}

.badge {
  border-radius: 100%;
  box-shadow: 0.15rem 0.15rem 0 rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  text-align: start;
  margin-left: 1.8rem;
  background-color: rgb(229, 103, 78);
  color: white;
}
</style>