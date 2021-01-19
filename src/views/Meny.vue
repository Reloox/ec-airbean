<template>
<div class="meny">
  <Header @showCart="showCart"
      v-bind:cart-count="cartCount"
      v-bind:show-cart-icon="true"/>
  <h1>Meny</h1>
  <MenuItem
      v-bind:menuItems="menuItems"
      v-for="menuItems in menu"
      :key="menuItems.id"
      v-on:menuItemAdded="add(menuItems)"/>
  <cart-popup v-if="visible"/>
  <Footer/>
</div>
</template>

<script>
import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import CartPopup from "@/components/CartPopup";
import Footer from "@/components/Footer";

export default {
  name: "Meny",
  components:{
    CartPopup,
    Header,
    MenuItem,
    Footer
  },
  data (){
    return {
      cartCount: 0,
      visible: false
    }
  },
  computed: {
    menu() {
      return this.$root.menu;
    }
  },
  methods: {
    add(item) {
      let chosenItem = this.$root.orders.find(
          (element) => element.title == item.title
      );
      if (chosenItem) {
        chosenItem.cartCount += 1;
        chosenItem.price += item.price;
      } else {
        this.$root.orders.push({
          title: item.title,
          price: item.price,
          cartCount: 1,
        });
      }
      this.cartCount += 1;
    },
    showCart() {
      alert('clicked')
      this.visible = !this.visible;

    },
  }
}
</script>

<style scoped>
.meny {
  background-color: rgb(231, 218, 218);
  width: 106.5%;

}

h1 {
  text-align: center;
}
</style>