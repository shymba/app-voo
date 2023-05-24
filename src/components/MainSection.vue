<template>
  <div class="container px-6 relative inline-block">
    <div>
      <button  id="dropdownDefaultButton"  data-dropdown-toggle="dropdown"
  class="w-full rounded-md bg-app-secondary px-3 text-sm mt-24 mb-12 text-app-primary shadow-sm ring-1 ring-inset ring-gray-300" type="button"
    >
    <div class="flex items-center justify-between py-6 px-8">
      <div class="flex items-center">
        <img src="../assets/Alpha-Logo.svg" class="">
        <div class="ml-12 truncate">
          Important info regarding our service
        </div>
      </div>
      <div class="">
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
    </button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-11/12 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
  </div>




    </div>
  </div>
  <div class="">
    <CardList
        :allCardsData="allCardsData"
    />
  </div>

  <div class="flex items-center flex-col m-auto mt-40 mb-32 px-6 w-full md:w-2/4">
    <h3 class="font-Space Grotesk fons text-sm md:text-xl">Be the first one to know when we launch our beta!</h3>
    <div class="flex items-center justify-center mt-6 w-full">
      <input type="email" placeholder="E-mail" class="rounded-md w-2/3 p-4"/>
      <button class="text-app-secondary text-sm md:text-xl font-Space Grotesk rounded-md bg-app-orange ml-3 p-4 font-medium cursor-pointer">Sign-up</button>
    </div>
  </div>

</template>

<script>
import ApiService from "../modules/apiService";
import CardList from "./CardList.vue";

const apiGetCards = new ApiService()
export default {
  name: "MainSection",
  components: {CardList},
  data() {
    return {
      allCardsData: [],
      imageSrc: []
    }
  },
  methods: {
    async getCardsInfo() {
      const dataCard = await apiGetCards.getCardsInfo()
      dataCard.forEach((card) => {
        this.allCardsData.push({
          title: card.title,
          imgSrc: card.images[0].src,
          vendor: card.vendor,
          id: card.id
        })
      })

      //     = dataCard
      // dataCard.forEach((card) => {
      //   console.log(card.images[0].src)
      //   this.imageSrc.push(card.images[0].src)
      // })
    },
  },
    mounted() {
      this.getCardsInfo()
    }
  }

</script>
