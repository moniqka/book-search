<template>
  <div class="container">
    <ul class="book-list" v-scroll="onScroll">
      <li v-for="(book, key) in newBookList" :key="key" class="book-container">
        <figure class="book-container__image-container">
          <img
            :src="bookCover(book)"
            class="book-container__image"
            :alt="book.volumeInfo.title"
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
    // newBookList: {
    //   get() {
    //     return this.bookList;
    //   }
    //   set()
    // }
  },
  methods: {
    nextResults() {
      let nextResults = this.start + 10;
      this.newBookList = [...this.newBookList,...(this.booksByTitle.slice(nextResults, this.limit + nextResults))]
      console.log('booklist', this.newBookList)
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
      let winHeight = (scrollBar.innerHeight) ? scrollBar.innerHeight : document.body.clientHeight;    // gets window height

      // gets current vertical scrollbar position
      let scrlPosition = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;

      // if scrollbar gets to bottom
      if (document.body.scrollHeight <= (scrlPosition + winHeight)) {
        console.log('Bottom');
        this.nextResults();
      }
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
.book-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  // flex-direction: column;
  width: 75%;
  margin: auto;
  padding: 0;
}
.book-container {
  display: flex;
  flex-basis: 50%;
  height: 200px;
  padding: 20px;
  // &:not(:first-child):not(:nth-child(2)) {
  //   border-top: 2px solid gainsboro;
  // }
  &:nth-child() {
    figure {
      border-left: 2px solid gainsboro;
    }
  }
  // padding-left: 0;
  &__image-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    margin: 0 10px;
    border-left: 2px solid gainsboro;
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
    // max-height: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &__description {
    display: -webkit-box;
    // max-height: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-align: left;
  }
}
</style>
