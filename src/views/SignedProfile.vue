<template>
<div class="signedProfile">
  <Header></Header>
  <div>
<!--    <img src=""/> hittar inte profil logo -->
  </div>
  <span>
    <p class="name">Sixten Kaffelövér</p>
    <p class="email">sixten.kaffelover@zocom.se</p><br>
  </span>
  <div>
    <h3>Orderhistorik</h3>
    <p class="order">#AB1123282323Z</p><P class="date">20/03/06</P>
    <p class="ordersumma">total ordersumma</p> <p class="money">443 kr</p><hr>
    <p class="order">#AB1128382323X</p><P class="date">20/03/03</P>
    <p class="ordersumma">total ordersumma</p><p class="money">333 kr</p><hr>
    <p class="order">#AB1444482323X</p><P class="date">20/02/21</P>
    <p class="ordersumma">total ordersumma</p><p class="money">893 kr</p><hr class="white">
    <p class="totalt">Totalt spenderat</p><P class="kr">1669 kr</P>

  </div>
</div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "SignedProfile",
  components: {
    Header
  },
  data() {
    return {
    }
  },
  methods: {
    showMyself() {
      this.$router.push('Menu')
    }
  }
}
</script>

<style scoped>
.signedProfile {
  background-color: rgb(46, 42, 38);
  width: 106.5%;
}

.name{
  color: white;
  margin-top: 50px;
  text-align: center;
  padding-top: 45px;
  font-family: serif;
  font-weight: 600;
  font-size: 1.4rem;
}

.email {
  color: darkgrey;
  margin-top: -20px;
  text-align: center;
  font-family: serif;
  font-size: 0.9rem;
}
h3 {
  color: white;
  font-family: serif;
  font-size: 1.4rem;
  margin-left: 30px;
}

.order {
  margin-left: 30px;
  color: lightgrey;
}

.date {
  margin-left: 270px;
  margin-top: -33px;
  color: grey;
}

.ordersumma {
  margin-left: 30px;
  color: dimgrey;
  margin-top: -10px;
}

.money {
  margin-left: 289px;
  margin-top: -33px;
  color: grey;
}

.totalt {
  margin-left: 30px;
  color: white;

}

.kr {
  margin-left: 280px;
  margin-top: -33px;
  color: white;
  padding-bottom: 100px;
}

.white {
  color: white;
  justify-content: center;
}

hr {
  width: 83%;
  margin: 0 auto;
  display: block;
}
</style>