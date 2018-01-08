<template>
  <button @click="toggle"
          :aria-pressed="[active]">
    CITE
  </button>
</template>

<script>
  export default {
    name: 'CiteThisButton',
    props: {
      toggle: {
        type: Function,
        default: () => null
      },
      active: {
        type: Boolean,
        default: false
      },
    }
  };
</script>
