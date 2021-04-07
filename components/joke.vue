<template>
  <nuxt-link :to="'/jokes/' + id">
    <div class="joke">
      <p>{{ joke }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Joke",
  props: ["joke", "id"],
};
</script>

<style scoped>
.joke {
  border: 1px solid black;
  margin-bottom: 25px;
  padding: 10px 15px;
  border-radius: 100px;
  color: black;
}

.joke p {
  border: none !important;
}

.joke:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>