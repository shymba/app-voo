<template>
  <div class="flex flex-col min-h-screen font-Space Grotesk bg-app-primary">
    <NavComponent/>
    <MainSection/>
    <FooterSection/>
    <RouterView/>
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router';
import NavComponent from './components/NavComponent.vue'
import MainSection from "./components/MainSection.vue";
import FooterSection from "./components/FooterSection.vue";

</script>

<style lang="scss">

</style>
