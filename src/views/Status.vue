<template>
  <section class="status">
    <div class="orderNumber">Ordernummer: {{ orderNr }}</div>
    <img src="@/assets/graphics/drone.svg" class="drone" alt="drone"/>
    <div class="order">
      <span>Din beställning</span><br/>
      <span>är på väg!</span>
    </div>
    <div class="timer">{{ETA}} minuter</div>
    <a class="tag" @click="returnMenu">Ok, cool!</a>
  </section>
</template>

<script>
import { generateOrderNr, generateETA } from "@/backend/utils/utils.js";

export default {
  name: "Menu",
  components: {
  },
  data() {
    return {
      orderNr: "",
      ETA: 0,
    }
  },
  methods: {
    getData() {
      this.orderNr = generateOrderNr();
      this.ETA = generateETA();
    },
    returnMenu() {
      this.$router.push('Menu')
    }
  },
  async mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.status {
  background-color: #e26b53;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.orderNumber {
  color: #f1d6d3;
  letter-spacing: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.order {
  color: white;
  font-family: serif;
  font-size: 2.2rem;
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 15px;
}
.timer {
  color: white;
  font-family: serif;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
}
.tag {
  background-color: white;
  padding: 10px 30px 10px 30px;
  margin: 75px;
  border-radius: 20px;
  font-family: serif;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
