<template>
  <div class="menuItem">
    <div class="addItem-col1">
      <button @click="$emit(`menuItemAdded`)">+</button>
    </div>
    <section class="info-col2">
      <h2>{{ menuItems.title }}....</h2>
      {{ menuItems.desc }}
    </section>
    <aside class="price-col3">
      {{ menuItems.price }} kr
    </aside>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: { menuItems: Object },
}
</script>

<style scoped>
.menuItem {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "div section aside";
  color: rgb(46, 42, 38);
  font-family: serif;
}

div.addItem-col1 {
  grid-area: div;
  margin-left: 30px;
  margin-top: 8px;
}

section.info-col2 {
  grid-area: section;
  margin-left: -45px;
  margin-top: -11.5px;
  padding: 0 2px;
  font-size: 0.85rem;
}

aside.price-col3 {
  grid-area: aside;
  margin-left: 45px;
  margin-top: 8px;
  font-weight: bold;
}
</style>