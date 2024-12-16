<template>
    <div class="min-h-screen bg-gray">
      <header>
        <NavBar />
      </header>
      <main class="container mx-auto px-4 py-6 flex flex-col gap-4">
        <h1 class="text-2xl font-bold text-darkBlue text-center">{{ title }}</h1>
        <slot />
      </main>
    </div>
</template>
  
<script>
  import NavBar from "@components/layout/NavBar.vue";
  
  export default {
    name: "BaseLayout",
    props: {
      title: String
    },
    components: {
      NavBar,
    },
  };
</script>
  
<style>

</style>
  