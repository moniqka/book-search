<template>
  <div class="home">
    <BooksSearchComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import BooksSearchComponent from "@/components/BooksSearchComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "SearchApp",
  components: {
    BooksSearchComponent
  },
  computed: {
    ...mapGetters(["booksByTitle"])
  }
};
</script>
