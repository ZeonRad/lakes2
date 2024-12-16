<template>
    <BaseLayout :title="lake?.name || ''">
      <div class="py-4">
        <BaseLake v-if="lake" :lake="lake" />
        <p v-else ></p>
      </div>
    </BaseLayout>
</template>
  
<script>
  import BaseLayout from "@layouts/BaseLayout.vue";
  import BaseLake from "@components/layout/BaseLake.vue";
  import { http } from "@utils/http.mjs";
  
  export default {
    name: "lake",
    components: {
      BaseLayout,
      BaseLake,
    },
    data() {
      return {
        lake: "", 
      };
    },
    methods: {
      async getLake() {
        try {
          const response = await http.get(`/lakes/${this.$route.params.id}`);
          this.lake = response.data.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
    watch: {
      "$route.params.id": "getLake",
    },
    mounted() {
      this.getLake();
    },
  };
</script>
  
<style>

</style>
  