<template>
  <button class="cite"
          @click="cite">
    CITE
  </button>
</template>

<script>
  export default {
    name: 'CiteThisButton',
    props: {
      cite: {
        type: Function,
        default: () => null
      },
    }
  };
</script>

<style>
  .cite {
    margin: 1rem;
  }
</style>
