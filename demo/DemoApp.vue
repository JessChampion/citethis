<template>
  <div id="app">
    <h1>CiteThis Demo</h1>
    <form>
      <h2>Test Record</h2>
      <div>
        <label for="testAuthor">Author:</label>
        <input id="testAuthor"
               type="text"
               v-model="author">
      </div>
      <div>
        <label for="testTitle">Title:</label>
        <input id="testTitle"
               type="text"
               v-model="title">
      </div>
      <div>
        <label for="testType">Type:</label>
        <input id="testType"
               type="text"
               v-model="type">
      </div>
      <div>
        <label for="testYear">Year:</label>
        <input id="testYear"
               type="number"
               v-model="year">
      </div>
    </form>

    <!--This will be the component we bind into an ss template and pass the values to-->
    <div id="citation"
              :author="author"
              :title="title"
              :type="type"
              :year="year"/>
  </div>
</template>

<script>
  export default {
    name: 'DemoApp',
    data() {
      return {
        author: 'test author',
        title: 'test title',
        type: 'ARTICLE',
        year: 2017
      };
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  form {
    margin-bottom: 1rem;
  }

  label {
    display: inline-block;
    min-width: 5rem;
  }
</style>
