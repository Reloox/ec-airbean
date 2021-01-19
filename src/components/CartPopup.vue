<template>
  <div>
<h1>Din beställning</h1>
<li
    class="cart"
    v-for="menuItems in this.$root.orders"
    :key="menuItems.id"
    v-bind:menuItems="menuItems"
    v-on:plus="increase(menuItems)"
    v-on:minus="decrease(menuItems)">
  <h2>{{ menuItems.title }}</h2>
  <aside>
    <section class="add">
      <img src="../assets/graphics/arrow-up.svg"
          @click="increase(menuItems)"/>
    </section>
    {{ menuItems.amount }}
    <section class="less">
      <img src="../assets/graphics/arrow-down.svg"
          @click="decrease(menuItems)"/>
    </section>
  </aside>
  <p>{{ menuItems.price * menuItems.amount }} kr</p>
</li>
    <div class="total">
      <h1>Total {{ total }} kr</h1>
      <p>inkl moms + drönarleverans</p>
    </div>
    <router-link to="/profile"><button>Take my money!</button></router-link>
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
        chosenItem.amount += 1;
        chosenItem.price += item.price;
      }
    },
    decrease(item) {
      let chosenItem = this.$root.orders.find(
          (element) => element.title == item.title
      );
      if (chosenItem) {
        chosenItem.amount -= 1;
        chosenItem.price -= item.price;
      }
    }
  }
}
</script>

<style scoped>

</style>