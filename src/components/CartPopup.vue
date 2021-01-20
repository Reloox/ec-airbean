<template>
  <div class="cartpopup">
<h1>Din beställning</h1>
<li class="cart"
    v-for="menuItems in this.$root.orders"
    :key="menuItems.id"
    v-bind:menuItems="menuItems"
    v-on:plus="increase(menuItems)"
    v-on:minus="decrease(menuItems)">
  <h2>{{ menuItems.title }}</h2>
  <aside class="arrows">
    <section class="add">
      <img src="../assets/graphics/arrow-up.svg"
          @click="increase(menuItems)"/>
    </section>
    {{ menuItems.cartCount }}
    <section class="less">
      <img src="../assets/graphics/arrow-down.svg"
          @click="decrease(menuItems)"/>
    </section>
  </aside>
  <p>{{ menuItems.price * menuItems.cartCount }} kr</p>
</li>
    <div class="total">
      <h1>Total {{ total }} kr</h1>
      <p>inkl moms + drönarleverans</p>
    </div>
    <router-link class="tag" to="/profile"><a>Take my money!</a></router-link>
  </div>
</template>

<script>
export default {
  name: "CartPopup",
  computed: {
    total() {
      return this.$root.orders.reduce((acc, item) => acc + item.price, 0);
    }
  },
  methods: {
    increase(item) {
      let chosenItem = this.$root.orders.find(
          (element) => element.title == item.title
      );
      if (chosenItem) {
        chosenItem.cartCount += 1;
        chosenItem.price += item.price;
      }
    },
    decrease(item) {
      let chosenItem = this.$root.orders.find(
          (element) => element.title == item.title
      );
      if (chosenItem) {
        chosenItem.cartCount -= 1;
        chosenItem.price -= item.price;
      }
    }
  }
}
</script>

<style scoped>
.arrows {
  margin-left: 70px;
  text-align: center;
}

.cartpopup {
  background-color: white;
  position: absolute;
  height: auto;
  width: 27%;
  box-shadow: 0px 0px 27px 18px rgba(0, 0, 0, 0.75);
  margin-top: -30rem;
}

h1 {
  color: black;
  font-family: serif;
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
}

.cart {
  display: flex;
  margin-left: 30px;
}

p {
  font-family: serif;
  padding: 0 20px;
  font-size: 0.9rem;
  margin-bottom: 30px;
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
  margin-left: 8rem;
  text-decoration: none;
}
</style>