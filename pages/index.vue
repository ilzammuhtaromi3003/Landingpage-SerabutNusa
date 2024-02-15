<template>
  <div>
    <Navbar :content-options="landingPageContent.sectionNavbar"/>
    <Hero :content-options="landingPageContent.sectionHero"/>
    <Register :content-options="landingPageContent.sectionRegister"/>
    <Kenalan :content-options="landingPageContent.sectionKenalan"/>
    <Benefit :content-options="landingPageContent.sectionBenefit"/>
    <Product :content-options="landingPageContent.sectionProduct"/>
    <Why :content-options="landingPageContent.sectionWhy"/>
    <Step :content-options="landingPageContent.sectionStep"/>
    <Earning :content-options="landingPageContent.sectionEarning" />
    <Footer :content-options="landingPageContent.sectionFooter"/>
  </div>
</template>

<script>

import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import Kenalan from '../components/Kenalan.vue';
import Benefit from '../components/Benefit.vue';
import Product from '../components/Product.vue';
import Why from '../components/Why.vue';
import Step from '../components/Step.vue';
import Earning from '../components/Earning.vue';
import Register from '../components/Register.vue';
import { landingPageContent } from '../utils/constants.js'


export default {
  
    name: "IndexPage",
    components: { Footer, Navbar, Hero, Kenalan, Benefit, Product, Why, Step, Earning, Register },
    data() {
      return {
        landingPageContent
      }
    },
    mounted() {
    },
}
</script>