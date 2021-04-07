<template>
  <div class="container mt-5">
    <h1>Welcome to dad jokes app</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dad Jokes App",
      name: "description",
      content: "Best place for corny dad jokes",
    };
  },
};
</script>

<style>
.container {
  display: grid;
  place-items: center !important;
}
</style>
