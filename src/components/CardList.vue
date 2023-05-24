<template>
  <div class="container px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
    <CardItem
        v-for="card in allCardsData"
        :card="card"
        :key="card.id"
    />
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
export default {
  name: "CardList",
  components: { CardItem },
  props: {
    allCardsData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      imgSrc: [],
    }
  },
}
</script>

<style scoped>

</style>
