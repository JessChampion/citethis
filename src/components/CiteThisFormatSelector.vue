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
    background: #dfdfdf;
    border: none;
    border-radius: 0.25rem 0 0.25rem 0.25rem;
    margin-top: -0.3rem; /*counteract padding*/
    padding: 1.2rem 0.6rem 0.45rem;
    text-align: left;
  }

  .formatSelector__title {
    cursor: default;
    font-size: 0.8rem;
    position: relative;
    top: 1rem;
  }

  .formatSelector__buttons {
    text-align: center;
  }

  .formatSelector__button {
    cursor: pointer;
    font-size: 0.8rem;
    margin-right: 0.25rem;
    min-width: 2.5rem;
  }
</style>
