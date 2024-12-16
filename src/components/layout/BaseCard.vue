<template>
    <div class="col">
      <div class="card shadow">
        <img :src="getImageURL(lake.image)" :alt="lake.name" class="card-img-top"/>
        <div class="card-body text-center">
          <h5 class="card-title text-darkBlue">{{ lake.name }}</h5>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "BaseCard",
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
    .shadow{
        box-shadow: 0px 0px 20px ;
    }
</style>
  