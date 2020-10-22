<template>
  <div class="home">
    <BooksSearchComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import BooksSearchComponent from "@/components/BooksSearchComponent.vue";

export default {
  name: "SearchApp",
  components: {
    BooksSearchComponent
  }
};
</script>
