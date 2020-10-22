<template>
  <form class="form-container">
    <fieldset class="form-container__wrapper">
      <legend>Filter by:</legend>
      <div>
        <label for="language">Language:</label>
        <select id="language">
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
        <button type="submit" @click="filterByLang()" class="button">
          Submit
        </button>
      </div>
      <div>
        <label for="date">Date:</label>
        <input
          id="date"
          type="number"
          min="1900"
          max="2020"
          step="1"
          value="2020"
        />
        <button type="submit" @click="filterByDate()" class="button">
          Submit
        </button>
      </div>
      <div>
        <label for="date">Author:</label>
        <input
          id="author"
          type="search"
          v-model="author"
          autocomplete="off"
          placeholder="book author"
        />
        <button type="submit" @click="filterByAuthor(author)" class="button">
          Submit
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BooksSearchFilters",
  data() {
    return {
      author: ""
    }
  },
  props: {
    filterByLang: {
      type: Function,
      default: () => {}
    },
    filterByDate: {
      type: Function,
      default: () => {}
    },
    filterByAuthor: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters(["booksByTitle"])
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 70%;
  text-align: left;
  margin: auto;
  legend {
    font-weight: 700;
    // text-transform: uppercase;
  }
  &__wrapper {
    padding: 15px;
    border: 1px solid gainsboro;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input,
    select {
      margin: 0 10px;
    }
  }
}
</style>
