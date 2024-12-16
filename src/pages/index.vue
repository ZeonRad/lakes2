<template>
    <BaseLayout title="Európai tavak">
      <div class="grid gap-[1rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BaseCard v-for="lake in lakes" :key="lake.id" :lake="lake" />
      </div>
    </BaseLayout>
</template>
  
<script>
  import BaseLayout from "@layouts/BaseLayout.vue";
  import BaseCard from "@components/layout/BaseCard.vue";
  import { http } from "@utils/http.mjs";
  
  export default {
    name: "index",
    components: {
      BaseLayout,
      BaseCard,
    },
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
    mounted() {
      this.getLakes();
    },
  };
</script>
  
<style>

</style>