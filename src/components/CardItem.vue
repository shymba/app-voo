<template>
  <div class="gap-6">
    <div class="py-6">
      <img :src="card.imgSrc" class=" border border-black rounded" />
      <div class="">{{ card.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    card: {
      type: Object,
      required: true
    },
  }
}
</script>
