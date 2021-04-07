<template>
  <div class="container mt-5">
    <h3>Jokes</h3>
    <SearchJokes></SearchJokes>
    <div class="jokes mt-3">
      <Joke
        v-for="joke in $store.state.joke.jokes"
        :key="joke.id"
        :joke="joke.joke"
        :id="joke.id"
      ></Joke>
    </div>
    <div v-if="$store.state.joke.jokes.length <= 0">Jokes not found</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "JokesList",
  head() {
    return {
      title: "Jokes List",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny dad jokes",
        },
      ],
    };
  },

  methods: {
    ...mapActions({
      fetchJokes: "joke/fetchJokes",
    }),
  },

  async created() {
    this.fetchJokes();
  },
};
</script>

<style scoped>
</style>