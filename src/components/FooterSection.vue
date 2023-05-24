<template>
    <div class="border-t-2 border-black bg-white text-app-secondary">
        <div class="container mt-20 mb-20">
            <div class="container px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <img src="../assets/Footer-Logo.svg"/>
              <div class="">
                <ul v-for="li in ul_1" :key="li">
                  <li>{{ li }}</li>
                </ul>
              </div>
              <div class="">
                <ul v-for="li in ul_2" :key="li">
                  <li>{{ li }}</li>
                </ul>
              </div>
              <div class="">
                <ul v-for="li in ul_3" :key="li">
                  <li>{{ li }}</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterSection",
    data() {
        return {
            ul_1: ['FAQ', 'RETURNS', 'CONTACT'],
            ul_2: ['TERMS & CONDITIONS', 'PRIVACY POLICY', 'COOKIE POLICY', 'COOKIE SETTINGS'],
            ul_3: ['ABOUT SECOND CHANCE', 'CAREER', 'FACEBOOK', 'INSTAGRAM'],
        }
    },
}

</script>
