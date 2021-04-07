<template>
  <div class="container mt-5">
    <h3 class="mb-3">Single Joke</h3>
    <p>{{ $store.state.joke.joke.joke }}</p>
    <small>Joke ID: {{ $store.state.joke.joke.id }}</small>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SingleJoke",
  head() {
    return {
      title: `Single Joke - ${this.$store.state.joke.joke.joke}`,
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
      fetchJoke: "joke/fetchJoke",
    }),
  },

  async created() {
    this.fetchJoke(this.$route.params.id);
  },
};
</script>

<style scoped>
</style>