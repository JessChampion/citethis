<template>
  <fieldset :class="$style.formatSelector">
    <legend :class="$style.formatSelector__title">
      Select citation file format
    </legend>
    <div :class="$style.formatSelector__buttons">
      <button v-for="format in formats"
              :key="format"
              :class="$style.formatSelector__button"
              @click="() => cite(format)"
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
      }
    }
  };
</script>

<style module lang="scss">
  .formatSelector {
    border: none;
    margin: 0;
    padding: 0.75em 0.6em 0.45em;
    text-align: left;
    width: 9.5em;

    &__title {
      cursor: default;
      font-size: 0.8em;
      position: relative;
      top: 0.5em;
    }

    &__buttons {
      text-align: center;
    }

    &__button {
      cursor: pointer;
      font-size: 0.8em;
      margin-right: 0.25em;
      min-width: 2.5em;
    }
  }
</style>
