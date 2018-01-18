<template>
  <fieldset class="formatSelector">
    <legend class="formatSelector__title">
      Select citation file format
    </legend>
    <div class="formatSelector__buttons">
      <button class="formatSelector__button"
              v-for="format in formats"
              :key="format"
              @click="cite(format)"
      >
        {{ format }}
      </button>
    </div>
  </fieldset>
</template>

<script>
  export default {
    name: 'CiteThisFormatSelector',
    props: {
      cite: {
        type: Function,
        required: true
      },
      formats: {
        type: Object,
        required: true
      },
    }
  };
</script>

<style>
  .formatSelector {
    border: none;
    margin: 0;
    padding: 0.75em 0.6em 0.45em;
    text-align: left;
    width: 9.5em;
  }

  .formatSelector__title {
    cursor: default;
    font-size: 0.8em;
    position: relative;
    top: 0.5em;
  }

  .formatSelector__buttons {
    text-align: center;
  }

  .formatSelector__button {
    cursor: pointer;
    font-size: 0.8em;
    margin-right: 0.25em;
    min-width: 2.5em;
  }
</style>
