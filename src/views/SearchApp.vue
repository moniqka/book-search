<template>
  <div class="home">
    <BooksSearchInput />
  </div>
</template>

<script>
// @ is an alias to /src
import BooksSearchInput from "@/components/BooksSearchInput.vue";

export default {
  name: "SearchApp",
  components: {
    BooksSearchInput
  }
};
</script>
