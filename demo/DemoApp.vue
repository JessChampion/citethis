<template>
  <div id="app">
    <h2>Vue Component Demo</h2>
    <form>
      <h3>Test Record</h3>
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

    <CiteThis :author="author"
              :title="title"
              :type="type"
              :year="year.toString(10)"/>
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
  form {
    margin-bottom: 1rem;
  }

  label {
    display: inline-block;
    min-width: 5rem;
  }
</style>
