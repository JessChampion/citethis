<template>
  <div>
    <fieldset class="formatSelector__wrap">
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
  </div>
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
    padding: 0 0.25rem 0.5rem;
  }

  .formatSelector__wrap {
    background: #dfdfdf;
    border: none;
    border-radius: 0.25rem 0 0.25rem 0.25rem;
    box-shadow: 0.1rem 0.15rem 0.15rem 0 rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 1.2rem 0.6rem 0.45rem;
    text-align: left;
    width: 9.5rem;
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
