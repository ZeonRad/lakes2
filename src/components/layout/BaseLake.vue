<template>
    <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
      <div class="flex-shrink-0">
        <img
          :src="getImageURL(lake.image)"
          :alt="lake.name"
          class="rounded shadow w-full md:w-96"
        />
      </div>
      <div class="text-justify">
        <h2 class="text-darkBlue font-bold text-xl mb-2">{{ lake.name }}</h2>
        <p>{{ lake.details }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BaseLake",
    props: {
      lake: Object
    },
    methods: {
      getImageURL(filename) {
        return `/images/${filename}`;
      },
    },
  };
  </script>
  
<style>

</style>
  