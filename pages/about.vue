<template>
  <div class="container mt-5">
    <h1 class="mb-3">About DadJokes.</h1>
    <p>This is app that display corny dad jokes.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About The App",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny dad jokes",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>