<template>
  <div class="about">
    <p>
      This application was created for recrutation precess.<br /><br />
      <span>Things to develop:</span><br />
      - clean CSS --> create main scss file for the whole project which contains
      variables, mixins and defined styles for common elements. (usually I start
      with creating such file, but this time I have followed steps in project
      guide and had started with basic styling)<br />
      - improve RWD and A11Y<br />
      - upgrade filters <br />
      - add unit testing
    </p>
    <button>
      <router-link to="/search">Open app</router-link>
    </button>
  </div>
</template>
<style lang="scss" scoped>
button {
  height: 30px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  margin-top: 50px;
  padding: 0 10px;
  text-transform: uppercase;
  @media screen and (max-width: 700px) {
    margin-top: 20px;
  }
}
a:link,
a:visited {
  color: white;
  font-weight: 700;
  text-decoration: none;
}
.about {
  width: 50%;
  margin: auto;
  p {
    text-align: left;
    line-height: 1.4;
  }
  span {
    font-weight: 700;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
}
</style>
