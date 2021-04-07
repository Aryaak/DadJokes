<template>
  <div>
    <input
      @keyup="fetchSearchJokes(text)"
      type="text"
      placeholder="Search Jokes..."
      v-model="text"
      class="form-control"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchJokes",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions({
      fetchSearchJokes: "joke/fetchSearchJokes",
    }),
  },
};
</script>

<style scoped>
input[type="text"].form-control {
  box-shadow: none;
  border: 1px solid black;
}
</style>