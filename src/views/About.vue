<template>
  <div class="about">
    <Header v-bind:show-cart-icon="false"/>
    <h1>Vårt kaffe</h1>
    <div>
      <p class="sub"> Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds
      dripper, crema, strong whipped, variety extra iced id lungo half and half
      mazagran. Pumpkin spice.</p>
      <p class="information"> Que dark fair trade, spoon decaffeinated, barista
      wings whipped, as rich aftertaste, con panna milk black, arabica white
      rich beans single shot extra affogato.
      So affogato macchiato sit extraction instant grinder seasonal organic,
      turkish single shot, single origin, and robusta strong to go so dripper.
      Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak,
      fair trade flavour, frappuccino medium, café au lait flavour cultivar ut
      bar instant kopi-luwak.</p>
      <p class="information"> Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.</p>
    </div>
      <div class="picture">
        <img src="@/assets/graphics/eva-cortado.jpg" alt="Eva Cortado"/>
        <h2 >Eva Cortado</h2>
        <p>VD & Grundare</p>
        <Footer/>
      </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "../components/Footer.vue";

export default {
  name: 'About',
  components: {
    Header,
    Footer
  },
  methods: {
    showMenu() {
      this.$router.push('Menu')
    }
  }
}
</script>

<style scoped>
.about {
  background-color: rgb(231, 218, 218);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 107%;
}

h1 {
  font-family: "PT Serif", serif;
  margin-bottom: -0.2px;
  display: flex;
}

.sub {
  font-family: "PT Serif", serif;
  margin-left: 18px;
  padding: 0 25px;
  font-weight: bold;
}

.information {
  padding: 0 25px;
  margin-left: 18px;
  font-size: 0.95rem;
}

.picture, img {
  border-radius: 100% !important;
  margin-top: 20px;
  margin-bottom: -10px;
  font-family: "PT Serif", serif;
  text-align:center;
}
</style>


