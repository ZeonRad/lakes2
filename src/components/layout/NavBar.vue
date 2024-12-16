<template>
    <nav class="bg-blue text-white py-2 px-4 flex flex-col md:flex-row items-center gap-4">
      <RouterLink to="/"  class="hover:bg-blue-light px-4 py-2 rounded" :class="{ 'bg-blue-light': $route.name === 'index' }">
        Főoldal
      </RouterLink>
      <RouterLink v-for="lake in lakes" :key="lake.id" :to="{ name: 'lake',
       params: { id: lake.id } }" :class="{ 'bg-blue-light': $route.params.id == lake.id }">
        {{ lake.name }}
      </RouterLink>
    </nav>
</template>
  
<script>
  import { http } from "@utils/http.mjs";
  
  export default {
    name: "NavBar",
    data() {
      return {
        lakes: [],
      };
    },
    methods: {
      async getLakes() {
        try {
          const response = await http.get("/lakes");
          this.lakes = response.data.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
      this.getLakes();
    },
  };
</script>
  
<style>

</style>    