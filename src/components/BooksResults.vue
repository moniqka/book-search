<template>
  <div class="container">
    <ul class="book-list" v-scroll="onScroll">
      <li v-for="(book, key) in newBookList" :key="key" class="book-container">
        <figure class="book-container__image-container">
          <img
            :src="bookCover(book)"
            class="book-container__image"
            :alt="book.volumeInfo.title"
            @click="openURL(book.volumeInfo)"
          />
        </figure>
        <span>
          <h3>{{ book.volumeInfo && book.volumeInfo.title }}</h3>
          <p class="book-container__description">
            {{ book.volumeInfo && book.volumeInfo.description }}
          </p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BooksSearchInput",
  data() {
    return {
      title: "",
      limit: 10,
      start: 0,
      newBookList: []
    };
  },
  props: {
    bookList: {
      type: Array,
      defoult: []
    }
  },
  computed: {
    ...mapGetters(["booksByTitle"])
  },
  methods: {
    nextResults() {
      let nextResults = this.start + 10;
      //merges next 10 results with old list of books
      this.newBookList = [
        ...this.newBookList,
        ...this.booksByTitle.slice(nextResults, this.limit + nextResults)]
      this.start = this.start + 10;
    },
    bookCover(book) {
      return book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail ||
            book.volumeInfo.imageLinks.smallThumbnail
        : null;
    },
    onScroll(event) {
      const scrollBar = event.target.scrollingElement;
      // gets window height
      let winHeight = scrollBar.innerHeight
        ? scrollBar.innerHeight
        : document.body.clientHeight;

      // gets current vertical scrollbar position
      let scrlPosition = window.pageYOffset
        ? window.pageYOffset
        : document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop;

      // if scrollbar gets to bottom
      if (document.body.scrollHeight <= scrlPosition + winHeight) {
        this.nextResults();
      }
    },
    openURL(book) {
      window.open(book.previewLink)
    }
  },
  watch: {
    booksByTitle() {
      this.newBookList = this.bookList;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin-top: 15px;
}
.book-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  padding: 0;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
}
.book-container {
  display: flex;
  flex-basis: 50%;
  height: 200px;
  padding: 20px;
  @media screen and (max-width: 700px) {
    height: 130px;
    padding: 10px 0;
  }
  // &:not(:first-child):not(:nth-child(2)) {
  //   border-top: 2px solid gainsboro;
  // }
  &:nth-child() {
    figure {
      border-left: 2px solid gainsboro;
    }
  }
  &__image-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    margin: 0 10px;
    border-left: 2px solid gainsboro;
    @media screen and (max-width: 700px) {
      padding: 0;
      margin: 0;
      max-width: 110px;
    }
  }
  &__image {
    max-height: 100%;
    width: auto;
    &:hover {
      transform: scale(1.2);
      cursor: zoom-in;
    }
  }
  h3 {
    text-align: left;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (max-width: 700px) {
      font-size: 16px;
      margin: 0;
    }
  }
  &__description {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-align: left;
    @media screen and (max-width: 700px) {
      font-size: 12px;
      width: 45vw;
    }
  }
}
</style>
